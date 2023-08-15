import { Button, Col, Container, Row } from "reactstrap";
import { useEffect } from "react";
import img1 from "../../images/alma/Wrok1.jpg"
import img2 from "../../images/alma/Work2.jpg"
import img3 from "../../images/solidwall.jpg"
import stackA from "../../images/alma/StackingSystems_A.jpg"
import stackB from "../../images/alma/StackingSystems_B.jpg"
import stackC from "../../images/alma/StackingSystems_C.jpg"
import stackD from "../../images/alma/StackingSystems_D.jpg"
import stackE from "../../images/alma/StackingSystems_E.jpg"
import stackF from "../../images/alma/StackingSystems_F-2.jpg"
import stackG from "../../images/alma/StackingSystems_G.jpg"
import ama01 from "../../images/alma/alma01.png"
import ama02 from "../../images/alma/alma02.png"
import ama03 from "../../images/alma/alma03.png"
import ama04 from "../../images/alma/alma04.png"
import ama05 from "../../images/alma/alma05.png"
import ama06 from "../../images/alma/alma06.jpg"
import amaMain from "../../images/alma/almamain3.jpg"
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";
import './base.css';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Demo from "./demo";


function Alma() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const items = [
        { id: "1", src: ama01, txt: "01. Panel Standard" },
        { id: "2", src: ama02, txt: "02.Singel inset Passdoor" },
        { id: "3", src: ama03, txt: "03.Double inset Passdoor" },
        { id: "4", src: ama04, txt: "04.Full height Passdoor" },
        { id: "5", src: ama05, txt: "05.Fixed telescopic" },
        { id: "6", src: ama06, txt: "06.Telescopic" },
    ]



    return (
        <>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >


                        {/* <p className="justify-content-center align-items-center d-flex text-center subHead2">Alma Walls</p> */}
                        <Row>

                            <Col md="4" className="justify-content-center align-items-center d-flex">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <h1 className="headBig">ALMA</h1>
                                </Bounce>
                            </Col>

                            <Col md="8">
                                <p className="txtHead">HOW IT WORKS</p>
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src={img1} alt="Image one" />}
                                    itemTwo={<ReactCompareSliderImage src={img2} alt="Image two" />}
                                    style={{
                                        width: "100%",
                                        height: "90%",
                                    }}
                                />
                                {/* <img src={img1} width={'100%'} height={'100%'} alt="loading.." /> */}
                            </Col>

                        </Row>




                        <Row className="pt-5">
                            <Col md="7">
                                <img src={img3} width={'100%'} height={'100%'} alt="loading.." />
                            </Col>
                            <Col md="5">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <ul className="nolistdot">
                                        <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Sound insulation: up to 54dB as standard - Solid walls (Alma)</li>
                                        <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Fire Rating: EI2.30 (laboratory certified)</li>
                                        <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Fire classification: EN13501-1 B-s2, d0 (laboratory certified)</li>
                                        <li className="licsslistOper"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating.</li>
                                    </ul>
                                </Bounce>
                            </Col>

                        </Row>
                        <Row className="py-5 my-3">
                            <Col md="12" className="p-0">
                                <Demo itemsData={items} />

                            </Col>

                        </Row>
                        <Row className="py-5 my-3">
                            <Col md="12" className="p-0">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <p className="txtHead">Creating space within space</p>
                                </Bounce>
                                <div className="justify-content-center align-items-center h-100 d-flex">
                                    <div className="mx-3">
                                        <video width="500" controls >
                                            <source src="products/ALMA10m.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <img src={amaMain} width={'100%'} height={'100%'} alt="loading.." />
                                </div>


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
                                    <Button className="btdw p-2" onClick={() => { window.open("https://drive.google.com/file/d/1gUQPAG58O0DZc1JPPd2g-KGR6_nl0rS0/view?usp=drive_link", '_blank') }}>Download Catalouge</Button>
                                </div>
                            </Bounce>
                        </Row>
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default Alma;
