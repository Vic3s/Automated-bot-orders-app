import "../styles/login-page.css"
import { useNavigate, Link } from "react-router"
import { useState } from "react";
import { NavBar } from "../components/NavBar";

export const LoginPage = () => {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    const PostLoginData = (e: any) => {
        e.preventDefault();

        const UserRegisterObject = {
            email: email,
            password: password,
        }

        fetch("http://localhost:5000/post-login-data", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(UserRegisterObject)
        })
        .then(response => { response.json()})
        .then(data => {console.log(data); navigate("/")})
        .catch(err => console.log(err))
    }

    return (
        <>
        <NavBar/>
            <div className="login-page-container">
                <div className="login-form-container">
                    <div className="login-heading-container">
                        <h1>Log In</h1>
                    </div>
                    <form className="login-form" onSubmit={(e) => PostLoginData(e)}>
                        <div className="input-email input-container">
                            <input type="email" name="user-email" placeholder="Email" 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-password input-container">
                            <input type="password" name="user-password" placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>

                        <div className="button-container">
                            <button type="submit">
                                Log In
                            </button>
                        </div>
                    </form>

                    <div className="register-page-redirect">
                        <p>
                            Dont have an account? <Link className="link-register" to="/register">Create one!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}