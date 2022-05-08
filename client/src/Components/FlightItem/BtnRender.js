import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../GlobalState' 
import './FlightItem.css'
function BtnRender({flight,deleteFlight}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart
    const det = async(id)=>{
        window.location.href ="/detail/"+id;
    }
    const book = async(f)=>{
        window.location.href = "/booking";
        addCart(f)
    }
    return (
        <>
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy" to="#!" 
                   onClick={() =>deleteFlight(flight._id, flight.images.public_id)}>
                        Delete
                    </Link>
                   <Link id="btn_view" to={`/edit_flight/${flight._id}`} >
                        Edit
                    </Link>
                  
                </>
                : <>
                    <Link id="btn_buy" to="/booking" onClick={() => book(flight)}>
                        Book
                    </Link>
                    <Link id="btn_view" to={`/detail/${flight._id}`} onClick={() => det(flight._id)}>
                        View
                    </Link>
                </>
            }
                
        </div>
         <div className='btn_delay'>  <Link id="btn_delay" to={`/prediction/${flight._id}`}>
         Predict Delay
     </Link></div>
     </>
    )
}

export default BtnRender