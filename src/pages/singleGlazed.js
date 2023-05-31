import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";
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
                                    <p>ABCD International’s ID 1 Partition is a single edge to edge glazing partition that offers an innovative design and smart solutions for designing office partitions. This partition system was designed to offer versatility, quality, and brightness.</p>
                                    <p>The partition deceives both light and transparency, and reflects the latest trends, thanks to the minimization of its runners and micro-profiles between the glazed panels, as well as our special assembly processes </p>
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
