import { Button, Col, Container, Row } from "reactstrap";
import { useEffect } from "react";
import img1 from "../../images/AquaMain.jpg"
import img2 from "../../images/aqua/alma_compare_antes.png"
import img3 from "../../images/aqua/alma_compare_depois.png"
import aquam from "../../images/aqua/aquamain.jpg"
import aqua01 from "../../images/aqua/aqua01.png"
import aqua02 from "../../images/aqua/aqua02.jpg"
import aqua03 from "../../images/aqua/aqua03.jpg"
import aqua04 from "../../images/aqua/aqua04.jpg"
import aqua05 from "../../images/aqua/auqa05.jpg"
import aqua06 from "../../images/aqua/aqua06.jpg"
import stackA from "../../images/alma/StackingSystems_A.jpg"
import stackB from "../../images/alma/StackingSystems_B.jpg"
import stackC from "../../images/alma/StackingSystems_C.jpg"
import stackD from "../../images/alma/StackingSystems_D.jpg"
import stackE from "../../images/alma/StackingSystems_E.jpg"
import stackF from "../../images/alma/StackingSystems_F-2.jpg"
import stackG from "../../images/alma/StackingSystems_G.jpg"
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Demo from "./demo";


function Aqua() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const items = [
        { id: "1", src: aqua01, txt: "01.Glazed panel" },
        { id: "2", src: aqua02, txt: "02.Single inset passdoor" },
        { id: "3", src: aqua03, txt: "03.Full Height Passdoor" },
        { id: "4", src: aqua04, txt: "04.Multi height Passdoor" },
        { id: "5", src: aqua05, txt: "05.Doublt inset Passdoor" },
        { id: "6", src: aqua06, txt: "06.Telescopic" },
    ]

    return (
        <>

            <Container className="pt-5">
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row>

                            <Col md="4" className="justify-content-center align-items-center d-flex">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <h1 className="headBig">AQUA</h1>
                                </Bounce>
                            </Col>

                            <Col md="8">
                                <p className="txtHead">HOW IT WORKS</p>
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src={img3} alt="Image one" />}
                                    itemTwo={<ReactCompareSliderImage src={img2} alt="Image two" />}
                                    style={{
                                        width: "100%",
                                        height: "90%",
                                    }}
                                />
                                {/* <img src={img1} width={'100%'} height={'100%'} alt="loading.." /> */}
                            </Col>

                        </Row>
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
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
                                            <source src="products/semiauto.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="viddiv">
                                        <img src={aquam} width={'100%'} height={'100%'} alt="loading.." /></div>
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
                                    <Button className="btdw p-2" onClick={() => { window.open("https://drive.google.com/file/d/1i0pcCt1eCPuAzhpszKQtgEJH3rQsghPC/view?usp=drive_link", '_blank') }}>Download Catalouge</Button>
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
