import { Button, Col, Container, Row } from "reactstrap";
import { useEffect } from "react";
import img1 from "../../images/waveImg.jpg"
import stackA from "../../images/wave/1.jpg"
import stackB from "../../images/wave/2.jpg"
import stackC from "../../images/wave/3.jpg"
import stackD from "../../images/wave/4.jpg"
import stackE from "../../images/wave/5.jpg"
import stackF from "../../images/wave/6.jpg"
import wave1 from "../../images/wave/howitwork_wave1.jpg"
import wave2 from "../../images/wave/howitwork_wave2.jpg"
import wavimg1 from "../../images/wave/banner_vista-1.jpg"
import wavenav1 from "../../images/wave/wave01.png"
import wavenav2 from "../../images/wave/wave02.png"
import wavenav3 from "../../images/wave/wave03.png"
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Demo from "./demo";


function Wave() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const items = [
        { id: "1", src: wavenav1, txt: "01.Wave Floor Supported" },
        { id: "2", src: wavenav2, txt: "02.Wave Top Hung" },
        { id: "3", src: wavenav3, txt: "03.Wave Operable Wall" },
    ]
    return (
        <>

            <Container className="pt-5">
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row>

                            <Col md="4" className="justify-content-center align-items-center d-flex">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <h1 className="headBig">WAVE</h1>
                                </Bounce>
                            </Col>

                            <Col md="8">
                                <p className="txtHead">HOW IT WORKS</p>
                                <ReactCompareSlider
                                    itemOne={<ReactCompareSliderImage src={wave2} alt="Image one" />}
                                    itemTwo={<ReactCompareSliderImage src={wave1} alt="Image two" />}
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

                                    <img src={wavimg1} width={'100%'} height={'400px'} alt="loading.." />

                                    <img src={wave1} width={'100%'} height={'400px'} alt="loading.." />
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

                            <Bounce direction={"right"} triggerOnce={true}>
                                <div className="m-5">
                                    <Button className="btdw p-2" onClick={() => { window.open("https://drive.google.com/file/d/1ZXvtDY0MIZIH2A8TatetNRyfd_tCEW_n/view?usp=drive_link", '_blank') }}>Download Catalouge</Button>
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
