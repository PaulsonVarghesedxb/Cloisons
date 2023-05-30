import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";

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
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='mx-5 p-5 pt-0'>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <div className="SingleGlazed1img"></div>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="SingleGlazed2img"></div>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className='mx-5 p-5 pt-0'>

                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="SingleGlazed3img"></div>
                                </Bounce>
                            </Col>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <div className="SingleGlazed4img"></div>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className='mx-5 p-5 pt-0'>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <div className="SingleGlazed5img"></div>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="SingleGlazed6img"></div>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default SingleGlazed;
