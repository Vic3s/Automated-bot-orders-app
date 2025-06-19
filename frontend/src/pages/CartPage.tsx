import { data } from "react-router";
import "../styles/cart-page.css"
import { useState, useEffect } from "react"
import { NavBar } from "../components/NavBar";
import { CartItem } from "../components/CartItem";


export const CartPage = () => {

    const[cartItems, setCartItems] = useState([]);

    const getCartItems = () => {
        const cartProducts = sessionStorage.getItem("cartProducts");

        if(cartProducts !== null){
            const cartObject = JSON.parse(cartProducts)

            const items: string[] = Object.keys(cartObject);
            const quantities: number[] = Object.values(cartObject);

            return {0: items, 1: quantities}
        }else{
            return {};
        }        
    }

    const GetCartItemsInfo = () => {

        fetch("http://localhost:5000/get-products-multiple", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemsList: getCartItems()[0]
            })
        })
        .then(response => response.json())
        .then(data => setCartItems(data))
    }
    useEffect(() => {
        GetCartItemsInfo()
    }, [])

    const SendOrder = () => {

        const orderObject: Object = {} 

        fetch("http://localhost:5000/post-order", {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ order: orderObject })
        })
    }

    return (
        <>
        <NavBar/>
            <div className="cart-main-container">
                <div className="heading-container">
                    <h1 className="heading-page">Cart</h1>
                </div>
                <div className="order-info">
                    <div className="general-meta">
                        <div className="product-info-container">
                            <div className="product-section">
                                <h3>Product</h3>
                            </div>
                            <div className="quantity-price-section">
                                <h3>Quantity</h3>
                                <h3>Price</h3>
                            </div>
                        </div>
                        <div className="products-cart-container">
                            {cartItems.map((cartItem) => {
                                return <>
                                <CartItem cartItemData={cartItem}/>
                                </>
                            })}
                        </div>
                    </div>
                    
                    <div className="total-price">
                        <div className="total-price-text">
                            <span>Total:</span>
                            <h3>$54</h3>
                        </div>
                        <button className="send-order-btn" onClick={SendOrder}>Order</button>
                    </div>
                </div>
                
            </div>
        </>
    )

}