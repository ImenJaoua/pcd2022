import React, { useState } from 'react'
import './Login.css'
import{Link} from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [user,setUser]= useState({
        email:'', password:''

    })
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }
    const loginSubmit= async e =>{
        e.preventDefault()
        try{
            await axios.post('/user/signin',{...user})
            localStorage.setItem('firstLogin',true)
            window.location.href='/main';

        }catch (err){
            alert(err.response.data.msg)
        }
    }
    return (
        <section className='login'>
            <div className='container_login'>
                <div className='title'>Login</div>
                <form onSubmit={loginSubmit}>
                    <div className='user-info'>

                        <div className='input-box'>
                        <span className='details'>Email</span>

                            <input type="email" placeholder='Enter your Email' name="email" required 
                            value={user.email} onChange={onChangeInput}
                            />
                        </div>
                        <div className='input-box'>
                        <span className='details'>Password</span>

                            <input type="password" placeholder='Enter your password' name="password" required 
                            value={user.password} onChange={onChangeInput}/>
                        </div>
                        <div className='button_login'>
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </form>
                <h5>
                <Link to="/Register">Dont have an account ?</Link>
              </h5>

            </div>

        </section>
    )
}

export default Login