import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";

function Solidwalls() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="solidHead"><div className="headerSolid">Solid Walls</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p className="justify-content-center align-items-center d-flex text-center subHead">Solid Walls</p>
                                    <p>Operable Walls set the standard for ease of use, durability, aesthetics and sound control. Available in flexible layout and storage configurations to optimize your interior space division needs, set up times are minimal, allowing your interior spaces to transform with little effort.</p>
                                    <p>Choose from manually operated single or hinged paired panels, or automate your set-up with continuously hinged, electric operation, Cloisons wall Operable Walls are available with ADA inset pass doors, storage pocket door closures, and a myriad of standard or custom panel finishes, limited only by your imagination.</p>
                                    <p>The industry’s premium performance steel panel operable wall, engineered at 116mm panel thickness and manufactured for rugged durability to fit openings up to 12.5m tall, and in unlimited opening widths, Alma Series steel panels are certified by independent acoustical laboratory testing to achieve the industry’s best-in-class acoustic performance up to 56 STC.</p>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='mx-5 p-5 '>
                            <p className="justify-content-center align-items-center d-flex text-center subHead2">ALMA WALLS</p>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <ul>
                                        <li>
                                            Sound insulation: up to 54dB as standard Solid walls (Alma)</li>
                                        <li>Fire Rating: EI2.30 (laboratory certified)</li> <li>Fire classification: EN13501-1 B-s2, d0 (laboratory certified)</li>
                                        <li>Unlimited metal coatings: including intumescent ink, galvanizing, anodizing, powder coating.</li>
                                        <li>Alma Standard Alma Single Door</li>
                                    </ul>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="almaImg"></div>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default Solidwalls;
