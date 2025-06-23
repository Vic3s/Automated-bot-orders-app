import "../styles/register-page.css"
import { useNavigate, Link } from "react-router"
import { useState } from "react";
import { NavBar } from "../components/NavBar";

export const RegisterPage = () => {

    const[username, SetUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[telephone, setTelephone] = useState("");
    const[address, setAddress] = useState("");

    const navigate = useNavigate();

    const PostRegisterData = (e: any) => {
        e.preventDefault();

        const UserRegisterObject = {
            username: username,
            email: email,
            password: password,
            telephone: telephone,
            address: address
        }

        fetch("http://localhost:5000/post-register-data", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(UserRegisterObject)
        })
        .then(response => response.json())
        .then(data => {console.log(data); navigate("/login")})
        .catch(err => console.log(err))
    }

    return (
        <>
        <NavBar />
            <div className="register-page-container">
                <div className="register-form-container">
                    <div className="register-heading-container">
                        <h1>Register</h1>
                    </div>
                    <form className="register-form" onSubmit={(e) => PostRegisterData(e)}>
                        <div className="form-left-side">
                            <div className="input-name input-container">
                                <input type="text" name="user-name" placeholder="Name" onChange={(e) => SetUsername(e.target.value)}/>
                            </div>
                            <div className="input-email input-container">
                                <input type="email" name="user-email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="input-password input-container">
                                <input type="password" name="user-password" placeholder="Create Password" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-right-side">
                            <div className="input-telephone input-container">
                                <input type="text" name="user-telephone" placeholder="Telephone" onChange={(e) => setTelephone(e.target.value)}/>
                            </div>
                            <div className="input-address input-container">
                                <input type="text" name="user-address" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
                            </div>
                            <div className="button-container">
                                <button type="submit">
                                    Register Account
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="login-page-redirect">
                        <p>
                            Already have an account? <Link to="/login" className="link-login">Log In!</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}