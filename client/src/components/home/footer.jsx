import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../../css/home/footer.css"

const FooterPage = () => {
    return (
        <div style={{ background: "#343A40", color: "white" }}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

            <MDBFooter color="black" className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">About Us</h5>
                            <p className="web-description">
                                An Alien Invasion is about to raid the world! Be prepared! Search for safe zones in the map, it will show you the location of the HQ. Look for areas that are invaded in the tab. Do not forget to see the news and updates on Twitter. Stay safe everyone, they are watching us!
                            </p>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title">Social Media Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href='https://www.linkedin.com/in/febian-garvin-abidin-182a79171/'>
                                        <i className="fab fa-linkedin-in footer-logo"></i>
                                    </a>
                                </li>
                                <li className="list-unstyled">
                                    <a href='https://github.com/febiangarvin'>
                                        <i className="fab fa-github footer-logo"></i>
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="3">
                            <h5 className="title">Other Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="mailto:garvin.abidin@gmail.com">
                                        <i className="fas fa-envelope footer-logo"></i>
                                    </a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://droneme.shop">
                                        <i className="fas fa-globe footer-logo"></i>
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a> Febian Garvin Abidin </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default FooterPage;