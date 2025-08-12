import { useState, useEffect } from "react"

import {GetCookie, SetAuthRequestHeaders, IsUserAuthorized } from "../add-func/UserAutorization";

import "../styles/nav-additional-styling.css"

export const NavBar = () => {

    const[accLoggedIn, setAccLoggedIn] = useState(false);

    const token = GetCookie("token")

    const LoginConditionalRender = () =>{
        if(accLoggedIn){
            return (
                <>
                    <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="/account">
                        <i className="fas fa-user"></i>
                    </a>
                    </li>
                </>
            )
        }
        return(
            <>
                <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="/login">
                    Log in
                </a>
                </li>
            </>
        )
    }
    
    useEffect(() => {
        IsUserAuthorized(SetAuthRequestHeaders("GET", {}, token)).then((isAuthorized: boolean) => {
            setAccLoggedIn(isAuthorized);
        }); 
    })

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light mask-custom shadow-0">
        <div className="container">
            <a className="navbar-brand fw-bold"  style={{"color": "#5e9693"}} href="">ShopUp</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                <a className="nav-link fs-3" href="/">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link fs-3" href="/about">About</a>
                </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item me-3 me-lg-0">
                <a className="nav-link" href="/cart">
                    <i className="fas fa-shopping-cart"></i>
                </a>
                </li>
                {LoginConditionalRender()}
            </ul>
            </div>
        </div>
        </nav>

        </>
    )

}