import "../styles/account-page.css"
import { useState, useEffect } from "react"
import type { AccoutnType, OrderType } from "../Types/Types";
import { NavBar } from "../components/NavBar";
import { OrderItem } from "../components/OrderItem";
import { GetCookie, DeleteCookie, SetAuthRequestHeaders } from "../add-func/UserAutorization";
import { useNavigate } from "react-router";

export const AccountPage = () => {

    const navigate = useNavigate();

    const[accountInfo, setAccountInfo] = useState<AccoutnType>(Object);
    const[ordersAccount, setOrdersAccount] = useState(Array<OrderType>);

    const GetAccountInfo = () => {

        const token = GetCookie("token");

        fetch("http://localhost:5000/get-account", SetAuthRequestHeaders("GET", {}, token))
        .then(response => { return response.json() })
        .then(data => setAccountInfo(data))
        .catch(err => console.log(err));
    }

    const GetAccountOrdersHistory = () => {
        fetch("http://localhost:5000/get-account-orders", {
            method: "GET",
            headers: {
                "Content-Type": "application-json"
            },
        })
        .then(response => { return response.json() })
        .then(data => setOrdersAccount(data))
        .catch(err => console.log(err));
    }

    const LogOut = () => {
        DeleteCookie("token");
        navigate("/");
    }

    useEffect(() => {
        
        GetAccountInfo()
        GetAccountOrdersHistory();
    }, [])
    
    return (
        <>
            <NavBar />
            <div className="account-main-container">
                <div className="account-name-email-container">
                    <h2 className="account-name">{accountInfo.username}</h2>
                    <h2 className="account-email">{accountInfo.email}</h2>
                    <button className="btn btn-primary w-25" onClick={LogOut}>Log Out</button>
                </div>
                <div className="account-address">
                    <h2>{accountInfo.address}</h2>
                </div>
                <div className="account-orders-container">
                    <div className="orders-general-meta">
                        <div className="general-meta-left-side">
                            <h3 className="number-order">
                                Order Number
                            </h3>
                            <h3 className="bot-path-order">
                                Automated Bot Path
                            </h3>
                        </div>
                        <div className="general-meta-right-side">
                            <h3 className="products-order">
                                Products
                            </h3>
                            <h3 className="total-order">Total</h3>
                        </div>
                    </div>
                    <div className="account-orders-history">
                        {ordersAccount.map((item) => {
                            return <>
                                <OrderItem orderData={item}/>
                            </>
                        })}
                    </div>
                </div>
                
            </div>
        </>
    )
}