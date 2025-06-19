export const Footer = () => {

    return (
        <>
            <footer className="bg-body-tertiary text-center text-lg-start">
                <div className="container p-4">
                    <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>

                        <ul className="list-unstyled mb-0">
                        <li>
                            <a href="#!" className="text-body">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="text-body">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="text-body">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="text-body">
                                <i className="fa-brands fa-x-twitter"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="text-center p-3">
                    © 2025 Copyright: Vic3s
                </div>
                </footer>
        </>
    )

}