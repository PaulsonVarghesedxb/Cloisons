import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Button, Col, Container, Row } from "reactstrap";
import singleGlaze1 from "../images/singelglazed/singleglazed1.jpeg"
import singleGlaze2 from "../images/singelglazed/singleglazed2.jpeg"
import singleGlaze3 from "../images/singelglazed/singleglazed3.jpeg"
import singleGlaze4 from "../images/singelglazed/signleglazed4.jpeg"
import singleGlaze5 from "../images/singelglazed/singleglazed5.jpeg"
import singleGlaze6 from "../images/singelglazed/singleglazed6.jpeg"
import singleGlaze7 from "../images/singelglazed/singleglazed7.jpeg"
import singleGlaze8 from "../images/singelglazed/singleglazed8.jpeg"
import singleGlaze9 from "../images/singelglazed/singleglazed9.jpeg"

function SingleGlazed() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="singleglazedHead"><div className="headerGlass">SINGLE GLAZED - ID1</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p className="justify-content-center align-items-center d-flex text-center subHead">SINGLE GLAZED - ID1</p>
                                    <p>The ID 1 partition with single edge to edge glazing offers an innovative design and smart solutions for designing the layout of office environments. This partition system has been designed to offer flexibility, quality and brightness.</p>
                                    <p>With the minimisation of its runners and micro-profiles between the glazed panels or with our special assembly processes, the ID 1 partition deceives both light and transparency, and reflects the latest trends. </p>
                                    <p>Depending on the heights, you can use it with tempered glazing, 10 mm or 12 mm-thick flat smooth joints. It has been designed to convey a smart, state-of-the-art brand image.</p>

                                </Bounce>
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className=" justify-content-center text-center">
                                        <ul >
                                            <li className="licss">
                                                SINGLE EDGE TO EDGE GLAZING</li>
                                            <li className="licss">FLEXIBILITE AND QUALITY</li>
                                            <li className="licss">INNOVATIVE DESIGN</li>

                                        </ul>
                                    </div>
                                </Bounce>
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <div className=" justify-content-center text-center">
                                        <Button className="btdw p-2" onClick={() => { window.open("https://drive.google.com/file/d/1bvQoYofEoCLfukBKaKMhe_w-MP_luFj-/view?usp=drive_link", '_blank') }}>DOWNLOAD</Button>
                                    </div>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>
                <Row>


                    <div className="rowGrid">

                        <div className="columnGrid">
                            <Bounce direction={"left"} triggerOnce={true}>
                                <img src={singleGlaze1} alt="loading.." />
                                <img src={singleGlaze2} alt="loading.." />



                            </Bounce>
                        </div>


                        <div className="columnGrid">
                            <Bounce direction={"right"} triggerOnce={true}>
                                <img src={singleGlaze3} alt="loading.." />
                                <img src={singleGlaze4} alt="loading.." />



                            </Bounce>

                        </div>
                        <div class="columnGrid">
                            <Bounce direction={"right"} triggerOnce={true}>
                                <img src={singleGlaze5} alt="loading.." />
                                <img src={singleGlaze6} alt="loading.." />



                            </Bounce>

                        </div>
                        <div class="columnGrid">
                            <Bounce direction={"right"} triggerOnce={true}>
                                <img src={singleGlaze7} alt="loading.." />
                                <img src={singleGlaze8} alt="loading.." />
                                <img src={singleGlaze9} alt="loading.." />
                            </Bounce>

                        </div>


                    </div>


                </Row>

            </Container>
        </>
    );
}

export default SingleGlazed;
