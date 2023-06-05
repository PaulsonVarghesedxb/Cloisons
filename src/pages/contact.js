import { Col, Container, Row } from "reactstrap";
import {
    BsTelephone
} from "react-icons/bs"
import {
    FiLink
} from "react-icons/fi"
import {
    GoMail
} from "react-icons/go"
import {
    BsBuildings
} from "react-icons/bs"
function Contact() {
    return (
        <>
            <div className="contactUs"><div className="headerAbout">Contact us</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <p className="justify-content-center align-items-center d-flex text-center subHead">We love meeting new perople <br />and helping them.</p>
                            </Col>
                        </Row>
                        <Row className='mt-0 mb-5 p-0 justify-content-md-center'>

                            <Col md="5" className='p-0 mr-3' >
                                <div className="contactInfodiv">
                                    <ul className="Footetli">
                                        <li className="liaddress" >  <div className="iconbg"><BsBuildings size={20} color="#4d4b4b94" className='mb-2' /></div>302M,3rdFloor.<br />
                                            <div className="py-3"> FAST Business Centre Building</div>
                                            <div className="py-2"> Dubai, United Arab Emirates</div></li>
                                        <li className="lilistCont"> <div className="iconbg"><GoMail size={20} color="#4d4b4b94" className='mb-2' /></div>contact@thecloisons.com</li>
                                        <li className="lilistCont"> <div className="iconbg"><BsTelephone size={20} color="#4d4b4b94" className='mb-2' /></div>+971 42204141</li>
                                        <li className="lilistCont"> <div className="iconbg"><FiLink size={20} color="#4d4b4b94" className='mb-2' /></div>www.thecloisons.com</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md="6" className='p-0 ' >
                                <div className="mapDiv">
                                    <iframe className='' title="Map"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.1433911697522!2d55.380374!3d25.2657614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dcac356e5b9%3A0xb4fe5b1e9b9373e7!2sFast%20Business%20Service!5e0!3m2!1sen!2sin!4v1685984397950!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        // style="border:0;"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
