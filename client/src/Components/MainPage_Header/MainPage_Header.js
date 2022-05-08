import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Plane from './icon/plane.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './MainPage_Header.css'
function MainPage_Header() {
    const state = useContext(GlobalState)
    console.log(state)
    const [isLogged,setIsLogged] = state.userAPI.isLogged
    const [isAdmin,setIsAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)
    
    const hist = async()=>{
        window.location.href = "/history";
    }
    const cat = async()=>{
        window.location.href = "/cat";
    }
    const createFlight = async()=>{
        window.location.href = "/createFlight";
    } 
    const ca = async()=>{
        window.location.href = "/cart";
    }
    const logoutUser = async () =>{
        await axios.get('/user/logout')
        setIsAdmin(false)
        setIsLogged(false)
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/createFlight" onClick={createFlight} >Create Flight</Link></li>
                
                <li><Link to="/cat" onClick={cat}>Categories</Link></li>
            
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/main">{isAdmin ? 'Admin' : 'LET S Travel'}</Link>
                </h1>
            </div>

            <ul style={styleMenu} className='ul-items'>
                <li><Link to="/main">{isAdmin ? 'Flights' : 'Home'}</Link></li>
                {isAdmin? ''
                :
                <li><Link to="/history" onClick={hist}>History</Link></li>

                }

                {isAdmin && adminRouter()}

                {
                    loggedRouter() 
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

         
            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart" onClick={ca}>
                        <img src={Plane} alt="" width="30" />
                    </Link>
                </div>
            }
            
            
        </header>
    )
}

export default MainPage_Header