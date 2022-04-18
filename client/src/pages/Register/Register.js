import React,{useState} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import './Register.css'
import M from 'materialize-css'
import axios from 'axios'
const Register =()=>{
    
    const [user, setUser] = useState({
        name:'',userName:'', email:'', password: '',phone:''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/signup', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/login";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

  return (
    <section className='body'>
    <div className='container'>
        <div className='title'>Registration</div>
        <form action='#' onSubmit={registerSubmit}>
            <div className='user-details'>
                <div className='input-box'>
                    <span className='details'>Full name</span>
                    <input type="text" placeholder='Enter your name' name="name" required 
                    value={user.name}
                onChange={onChangeInput}/>
                </div>
                <div className='input-box'>
                    <span className='details'>Username</span>
                    <input type="text" placeholder='Enter your username' name="userName" required
                    value={user.userName}
                    onChange={onChangeInput}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Email</span>
                    <input type="text" placeholder='Enter your email' name="email" required
                    value={user.email}
                    onChange={onChangeInput}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Phone Number</span>
                    <input type="text" placeholder='Enter your number' name="phone" required
                    value={user.phone}
                    onChange={onChangeInput}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Password</span>
                    <input type="text" placeholder='Enter your password' name="password" required
                    value={user.password}
                    onChange={onChangeInput}
                    />
                </div>
                <div className='input-box'>
                    <span className='details'>Confirm Password</span>
                    <input type="text" placeholder='Confirm your password' required/>
                </div>
                <div className='button_subscribe'>
                <input type="submit" value="Register" />
                </div>
            </div>
        </form>
        <Link to="/login">Have you an account ?</Link>
    </div>
    </section>
  )
}

export default Register