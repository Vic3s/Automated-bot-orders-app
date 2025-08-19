import { NavBar } from "../components/NavBar"
import "../styles/about-page.css"
import shoppingBagImage from "../assets/shopping-bag-image.jpg"

export const AboutPage = () => {

    return (<>

        <NavBar/>
        <div className="about-main-container d-flex align-items-center justify-content-center">
            <div className="about-image-text-container d-flex flex-row gap-4">
                <div className="about-text d-flex flex-column align-items-center">
                    <h2 className="fw-bold">About</h2>
                    <h3 className="fw-bold">This Project.</h3>
                    <hr />
                    <h5 className="about-text-paragraph">
                        This project was inspiered by a task given to me
                        for an internship hiring proccess. The task was to
                        create a full stack web application using Java
                        Spring-Boot and a frontend framework of choice(I chose React).
                        The theme of the Project was an online retail store
                        whoes order picking was to be done for an automated bot
                        who takes the orders from a NxN grid of squares, where
                        every square contains a product. The goal was for the bot
                        to find the most optimal path to pickout the order.
                        The application also had to contain a CRUD system that
                        saves user accounts and user orders to a database.
                        For the database i used Mongodb, and to make the application
                        a bit more secure i also added a jwt authentiaction via
                        Spring security.
                    </h5>
                </div>
                <div className="about-image d-flex flex-column align-items-center justify-content-center">
                    <h2 className="fw-bold">Grab Your Bags Because</h2>
                    <img src={shoppingBagImage} alt="shopping cart image" />
                    <h1 className="fw-bold">We Shop Up!</h1>
                </div>
            </div>
            
        </div>
        
    </>)
}