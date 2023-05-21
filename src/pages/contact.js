import { Col, Container, Row } from "reactstrap";
import {
    BsTelephone
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
                        <Row className='mt-0 p-0 '>

                            <Col md="9" className='p-0' >
                                <div className="contactInfodiv">
                                    <ul className="Footetli">
                                        <li >  <div className="iconbg"><BsTelephone size={20} color="#4d4b4b94" className='mb-2' /></div>302M,3rdFloor.<br />
                                            FAST Business Centre Building<br />
                                            Dubai, United Arab Emirates</li>
                                        <li className="lilistCont"> <div className="iconbg"><BsTelephone size={20} color="#4d4b4b94" className='mb-2' /></div>contact@thecloisons.com</li>
                                        <li className="lilistCont"> <div className="iconbg"><BsTelephone size={20} color="#4d4b4b94" className='mb-2' /></div>+971 42204141</li>
                                        <li className="lilistCont"> <div className="iconbg"><BsTelephone size={20} color="#4d4b4b94" className='mb-2' /></div>www.thecloisons.com</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row className='m-5 p-5 '>


                            <Col md="6" className='px-3' >
                                <p className="subHead">Partners</p>
                                <p className="para">
                                    PCTS invests in the engineering, maintenance and production of quality , customisable , movable walls with a continuous focus on customer satisfaction . We believe that our exacting precision led standards ensure products are superior in their design and development . PCTS precision line products are ALMA, AQUA, WAVE, VISTA.
                                </p></Col>
                            <Col md="6" className='p-0' >
                                <div className="about2Img"></div>
                            </Col>
                        </Row>
                        <Row className='m-5 p-5 '>

                            <Col md="6" className='p-0' >
                                <div className="about2Img"></div>
                            </Col>
                            <Col md="6" className='px-3' >
                                <p className="subHead">Products</p>
                                <p className="para">
                                    Our products are designed to meet the needs and exceed the expectations of our customers. Our research and development team is continually raising the design benchmark and our design team is dedicated to providing solutions that inspire and perform superbly.
                                </p></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Contact;
