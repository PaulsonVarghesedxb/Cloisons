import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import {
    BsTelephone
} from "react-icons/bs"
import {
    FiLink
} from "react-icons/fi"
import {
    GoMail
} from "react-icons/go"

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
                            <Col md="6" className='p-0 ' >
                                <Card
                                    // style={{
                                    //     width: '18rem'
                                    // }}
                                    className="cardcon"
                                >

                                    <div className="mapDiv">
                                        <iframe className='' title="Map"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.1433911697522!2d55.380374!3d25.2657614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dcac356e5b9%3A0xb4fe5b1e9b9373e7!2sFast%20Business%20Service!5e0!3m2!1sen!2sin!4v1685984397950!5m2!1sen!2sin"
                                            width="100%"
                                            height="300"
                                            // style="border:0;"
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" className="justify-content-center d-flex">
                                            OFFICE
                                        </CardTitle >
                                        <CardText className="justify-content-center d-flex">
                                            <ul className="Footetli">
                                                <li className="liaddress" > 302M, 3rdFloor<br />
                                                    <div className="py-1"> Sheikha Mhara Building</div>
                                                    <div className="py-1"> Dubai, United Arab Emirates</div></li>

                                            </ul>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col md="6" className='p-0 ' >
                                <Card
                                    // style={{
                                    //     width: '18rem'
                                    // }}
                                    className="cardcon"
                                >

                                    <div className="mapDiv">
                                        <iframe className='' title="Map"
                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3609.197656857646!2d55.55448711501016!3d25.230266783880783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEzJzQ5LjAiTiA1NcKwMzMnMjQuMCJF!5e0!3m2!1sen!2sae!4v1688916842707!5m2!1sen!2sae"
                                            width="100%"
                                            height="300"
                                            // style="border:0;"
                                            allowfullscreen=""
                                            loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade">
                                        </iframe>
                                    </div>
                                    <CardBody>
                                        <CardTitle tag="h5" className="justify-content-center d-flex">
                                            FACTORY
                                        </CardTitle>
                                        <CardText className="justify-content-center d-flex">
                                            <ul className="Footetli">
                                                <li className="liaddress" >The Cloisons,S-07<br />
                                                    <div className="py-1"> Behind Co-Op Factory</div>
                                                    <div className="py-1"> Al Tayyah , Dubai, UAE</div></li>

                                            </ul>
                                        </CardText>
                                    </CardBody>
                                </Card>

                            </Col>
                            <Col md="12" className='p-0 mr-3' >
                                <div className="contactInfodiv">

                                    <div className="iconbg"><GoMail size={20} color="#4d4b4b94" /></div><div className="justify-content-center align-items-center d-flex p-3">contact@thecloisons.com</div>
                                    <div className="iconbg"><BsTelephone size={20} color="#4d4b4b94" /></div><div className="justify-content-center align-items-center d-flex p-3">+971 42204141, 00971506562400</div>
                                    <div className="iconbg"><FiLink size={20} color="#4d4b4b94" /></div><div className="justify-content-center align-items-center d-flex p-3">www.thecloisons.com</div>

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
