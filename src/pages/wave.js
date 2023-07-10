import { Button, Col, Container, Row } from "reactstrap";
import { useEffect } from "react";
import img1 from "../images/waveImg.jpg"
import stackA from "../images/wave/1.jpg"
import stackB from "../images/wave/2.jpg"
import stackC from "../images/wave/3.jpg"
import stackD from "../images/wave/4.jpg"
import stackE from "../images/wave/5.jpg"
import stackF from "../images/wave/6.jpg"
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";


function Wave() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>

            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >

                                <p className="justify-content-center align-items-center d-flex text-center subHead2">Wave Walls</p>
                                <Row>
                                    <Col md="5">
                                        <Bounce direction={"right"} triggerOnce={true}>
                                            <ul className="nolistdot">
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Sound insulation: up to 42dB as standard - Solid walls</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Sound insulation: up to 43dB as standard - Double-glazed walls</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Hidden Hinges</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Including pass door</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating.</li>
                                            </ul>
                                        </Bounce>
                                    </Col>
                                    <Col md="7">
                                        <img src={img1} width={'100%'} height={'100%'} alt="loading.." />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                        <Row>

                            <p className="subHead">See our tracking system</p>
                            <Col>
                                <img src={stackA} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>
                            <Col >
                                <img src={stackB} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>
                            <Col >
                                <img src={stackC} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>
                            <Col>
                                <img src={stackD} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>
                            <Col >
                                <img src={stackE} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>
                            <Col>
                                <img src={stackF} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>

                            <Bounce direction={"right"} triggerOnce={true}>
                                <div className="m-5">
                                    <Button className="btdw p-2">Download Catalouge</Button>
                                </div>
                            </Bounce>
                        </Row>
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default Wave;
