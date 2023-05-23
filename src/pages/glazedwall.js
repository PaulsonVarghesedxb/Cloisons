import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";

function GlazedWalls() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="solidHead"><div className="headerSolid">Movable Walls</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p className="justify-content-center align-items-center d-flex text-center subHead">Glazed Movable Walls</p>
                                    <p>The industry’s most comprehensive and full-featured lineup of movable glass wall products. With best-in-class sound control, panel automation, switchable smart glass, multiple layout and configuration options and in nearly unlimited finishes, LUMINOUS glass walls provide nearly limitless versatility in a sophisticated and refined style, adding a unique vision element to your space division designs.</p>
                                    <p>The industry’s premium performance glass wall line, Aqua glass walls provide up to 50 STC sound control! </p>
                                    <p>Top-supported panel suspension requiring no floor track, and available in either manual operation; semi-automatic and programmable, self-driving fully automatic panels with telescoping final closure and automatic top and bottom seal activation, Luminous Stella glass walls are available with multiple frame finish and glass options including switchable smart glass, in panel heights up to 5m tall.</p>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='mx-5 p-5 pt-0'>
                            <p className="p-5 subHead2">AQUA </p>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <ul>
                                        <li>
                                            Sound insulation: up to 49dB as standard  Double-glazed walls (Aqua)</li>
                                        <li>Fire Rating: EI2.30 (laboratory certified)</li> <li>Fire classification: EN13501-1 B-s2, d0 (laboratory certified)</li>
                                        <li>Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating.</li>
                                    </ul>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="aqaImg"></div>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className='mx-5 p-5 pt-0'>
                            <p className="p-5 justify-content-center align-items-center d-flex text-center subHead2">WAVE </p>

                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="waveImg"></div>
                                </Bounce>
                            </Col>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <ul>
                                        <li>
                                            Sound insulation: up to 42dB as standard -  Solid walls</li>
                                        <li>Sound insulation: up to 43dB as standard - Double-glazed walls</li> <li>Hidden Hinges</li>
                                        <li>Including pass door</li>
                                        <li>Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating</li>
                                    </ul>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className='mx-5 p-5 pt-0'>
                            <p className="p-5 justify-content-end d-flextext-right subHead2">VISTA </p>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <ul>
                                        <li>
                                            Thickness (mm) 35 - 8mm (25Kg/m2) or 10mm (30Kg/m2)</li>
                                        <li>Sound insulation: up to 35dB</li> <li>Manual</li>
                                        <li>Hidden Hinges, Door Included in the System, Aluminum profile</li>
                                        <li>Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating</li>
                                    </ul>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="vistaImg"></div>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default GlazedWalls;
