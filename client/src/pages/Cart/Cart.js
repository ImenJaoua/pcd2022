import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../GlobalState'
import axios from 'axios'
import './Cart.css'
import PaypalButton from './PaypalButton'
import location from './icon/location-mark.svg'
import price from './icon/price.svg'
import avatar from './icon/avatar.png'
import MainPage_Header from '../../Components/MainPage_Header/MainPage_Header'
function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.Price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }


    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeFlight = id => {
        if (window.confirm("Do you want to delete this flight?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async (payment) => {
        const { paymentID, address } = payment;

        await axios.post('/api/payment', { cart, paymentID, address }, {
            headers: { Authorization: token }
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>

    return (
        <div className='Cart'>
            <MainPage_Header />
            {
                cart.map(flight => (
                    <div className="detail cart" key={flight._id}>
                        <img src={flight.images.url} alt="" />

                        <div className="box-detail">
                            <div className="roww">
                                <img src={location} alt="icon" />
                                <span>{flight.Destination}</span>
                                <img id='Price' src={price} alt="icon" />
                                <span>{flight.Price} DT</span>
                            </div>

                            <p>{flight.Description}</p>

                            <div className="amount">

                                <button onClick={() => decrement(flight._id)}> - </button>

                                {<span>{flight.quantity}</span>}
                                <button onClick={() => increment(flight._id)}> + </button>
                            </div>
                            <div className="total">
                            <span>Total:</span><h4>{total}DT</h4>
                                <PaypalButton
                                    total={total}
                                    tranSuccess={tranSuccess} />
                            </div>
                            <div className="delete"
                                onClick={() => removeFlight(flight._id)}>
                                X
                            </div>
                        </div>


                    </div>
                ))
            }


        </div>
    )
}

export default Cart