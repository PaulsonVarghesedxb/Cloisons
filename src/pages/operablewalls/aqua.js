import { Button, Col, Container, Row } from "reactstrap";
import { useEffect } from "react";
import img1 from "../../images/AquaMain.jpg"
import stackA from "../../images/alma/StackingSystems_A.jpg"
import stackB from "../../images/alma/StackingSystems_B.jpg"
import stackC from "../../images/alma/StackingSystems_C.jpg"
import stackD from "../../images/alma/StackingSystems_D.jpg"
import stackE from "../../images/alma/StackingSystems_E.jpg"
import stackF from "../../images/alma/StackingSystems_F-2.jpg"
import stackG from "../../images/alma/StackingSystems_G.jpg"
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";


function Aqua() {

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

                                <p className="justify-content-center align-items-center d-flex text-center subHead2">Aqua Walls</p>
                                <Row>
                                    <Col md="5">
                                        <Bounce direction={"right"} triggerOnce={true}>
                                            <ul className="nolistdot">
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Sound insulation: up to 49dB as standard - Double-glazed walls (Aqua)</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Fire Rating: EI2.30 (laboratory certified)</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Fire classification: EN13501-1 B-s2, d0 (laboratory certified)</li>
                                                <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" /> Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating.</li>
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
                            <Col>
                                <img src={stackG} width={'100%'} height={'100%'} alt="loading,.." />
                            </Col>


                            <Bounce direction={"right"} triggerOnce={true}>
                                <div className="m-5">
                                    <Button className="btdw p-2" onClick={() => { window.open("https://drive.google.com/file/d/1fdC-maWjFnfq4nUFP6Pv-VuisNJ-NQMx/view?usp=sharing", '_blank') }}>Download Catalouge</Button>
                                </div>
                            </Bounce>
                        </Row>
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default Aqua;
