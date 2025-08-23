import "../styles/cart-page.css"
import { useState, useEffect } from "react"
import { NavBar } from "../components/NavBar";
import { CartItem } from "../components/CartItem";
import { DeleteCartObject, getTotalPrice} from "../add-func/CartLocalStorage";
import { getCartItems } from "../add-func/CartLocalStorage";
import { GetCookie, SetAuthRequestHeaders } from "../add-func/UserAutorization";
import type { CartItemQuantityNPrice, CartItemType, OrderProductType, ProductType } from "../Types/Types";
import { useNavigate } from "react-router";


export const CartPage = () => {

    const navigate = useNavigate();

    const[cartItems, setCartItems] = useState<CartItemType[]>(Array<any>);
    const[total, setTotal] = useState(0);

    const token = GetCookie("token");

    const GetCartItemsInfo = () => {

        setTotal(getTotalPrice());

        fetch("http://localhost:5000/get-product-multiple", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                productIds: getCartItems()[0]
            })
        })
        .then(response => { return response.json() })
        .then((data: Array<ProductType>) => {
            const CartItemsList: Array<CartItemType> = [];

            const idsList: Array<any> = getCartItems()[0];
            const productInfoList: Array<CartItemQuantityNPrice> = getCartItems()[1] ;

            for(let i=0; i< idsList.length; i++){
                CartItemsList.push({
                    "id": idsList[i],
                    "location": data[i].location,
                    "name": data[i].name,
                    "price": data[i].price,
                    "quantity": productInfoList[i].quantity,
                    "availableQuantity": data[i].quantity
                })
            }
            setCartItems(CartItemsList);
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        GetCartItemsInfo()
    }, [])

    const SendOrder = (e: any) => {
        e.preventDefault();

        const orderObject: Object = {
            products: cartItems,
            total: getTotalPrice()
        }

        fetch("http://localhost:5000/post-order", 
            SetAuthRequestHeaders("POST", orderObject, token))
        .then(response => { return response.json() } )
        .then(data => console.log(data))
        .catch(err => console.log(err));

        DeleteCartObject();
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
                            {cartItems.map((cartItem: CartItemType) => {
                                return <>
                                <CartItem key={cartItem.id} cartItemData={cartItem} onStateChange={() => {setTotal(getTotalPrice())}}/>
                                </>
                            })}
                        </div>
                    </div>
                    
                    <div className="total-price">
                        <div className="total-price-text">
                            <span>Total:</span>
                            <h3>{total}€</h3>
                        </div>
                        <button className="send-order-btn btn-primary" onClick={(e) => {SendOrder(e); navigate("/")}}>Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}