import { NavBar } from "../components/NavBar"
import "../styles/about-page.css"
import monitorSideImage from "../assets/old_shool_monitor_shopup_v2.png"
import { Footer } from "../components/Footer"

export const AboutPage = () => {

    return (<>

        <NavBar/>
        <div className="about-main-container">
            <div className="about-image-text-container d-flex flex-row gap-4">
                <div className="about-text">
                    <h2 className="fw-bold">ABOUT THIS PROJECT</h2>
                    <hr />
                    <p className="about-text-paragraph">
                        <span>This project</span> was inspired by an internship hiring task to build a full-stack web application using Java Spring Boot
                        and a frontend framework of choice (I chose React).
                        <br /> <br />
                        <span>The application</span> simulates an online retail store where an automated bot collects orders from an NxN product grid, 
                        optimizing its path to pick items efficiently.
                        <br /> <br />
                        <span>It also includes</span> a full CRUD system for user accounts and orders, backed by MongoDB, with JWT authentication 
                        implemented via Spring Security for added security.
                    </p>
                </div>
                <div className="about-image d-flex flex-column align-items-center justify-content-center">
                    <h3>It Was Pretty Fun To Make!</h3>
                    <img src={monitorSideImage} alt="shopping cart image" />
                </div>
            </div>
            <Footer/>

        </div>
        
    </>)
}