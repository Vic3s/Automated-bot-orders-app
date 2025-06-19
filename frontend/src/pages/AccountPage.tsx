import { useState, useEffect } from "react"
import type { AccoutnType, ObjectType } from "../static/Types";

export const AccountPage = () => {

    const[accountInfo, setAccountInfo] = useState<AccoutnType>(Object);
    const[ordersAccount, setOrdersAccount] = useState<ObjectType>(Object);


    const GetAccountInfo = () => {
        fetch("http://loaclhost:5000/get-account", {
            method: "GET",
            headers: {
                "Content-Type": "application-json"
            }
        })
        .then(response => { return response.json() })
        .then(data => setAccountInfo(data))
        .catch(err => console.log(err));
    }

    const GetAccountOrdersHistory = () => {
        fetch("http://loaclhost:5000/get-account-orders", {
            method: "GET",
            headers: {
                "Content-Type": "application-json"
            }
        })
        .then(response => { return response.json() })
        .then(data => setOrdersAccount(data))
        .catch(err => console.log(err));
    }

    useEffect(() => {
        GetAccountInfo();
        GetAccountOrdersHistory();
    }, [])
    
    return (
        <>
            <div className="account-main-container">
                <div className="account-name-email">
                    <h2>{accountInfo.name}</h2>
                    <h2>{accountInfo.email}</h2>
                </div>
                <div className="accoutn-address">
                    <h2>{accountInfo.address}</h2>
                </div>
                <div className="account-orders">
                    {/* map orders here */}
                </div>
            </div>
        </>
    )
}