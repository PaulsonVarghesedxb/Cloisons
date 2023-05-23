import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import solid from "../images/solidwall.jpg"
import glazed from "../images/galzedmovable.png"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Operablewalls() {
    let navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="operaAble"><div className="headerAbout">Operable Wall</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <p className="justify-content-center align-items-center d-flex text-center subHead">Operable Wall</p>
                                <p>A movable, interlocking group of panels suspended from an overhead track system that forms a soundproof wall is referred to as a operable wall partition. These movable wall partitions are a cost-effective and flexible option for dividing rooms; they are available in a variety of styles, colours, and finishes to meet all of your specific requirements.</p>
                                <p> Venesta’s Operable Walls from Kwik-Wall, USA are designed to divide available space in a variety of environments elegantly and efficiently. From small meeting rooms to large convention centers, operable walls allow you to adapt your space to the activities of the day. If you are looking for divider partition, wall partition services in UAE and Middle East, you can contact us.</p>
                            </Col>
                        </Row>
                        <Row className='mt-0 p-0 justify-content-md-center'>

                            <Col md="7" className='p-0' >
                                <CardGroup>

                                    <Card className="carddis" onClick={() => { navigate('/SolidWall') }} >
                                        <CardImg
                                            alt="Card image cap"
                                            src={solid}
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle className="subHead">
                                                Solid walls
                                            </CardTitle>

                                            <CardText>
                                                Operable Walls set the standard for ease of use, durability, aesthetics and sound control. Available in flexible layout and storage configurations to optimize your interior space division needs, set up times are minimal, allowing your interior spaces to transform with little effort.
                                            </CardText>

                                        </CardBody>
                                    </Card>
                                    <Card className="carddis" onClick={() => { navigate('/GlazedWall') }}>
                                        <CardImg
                                            alt="Card image cap"
                                            src={glazed}
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle className="subHead">
                                                Gazed Movable walls
                                            </CardTitle>

                                            <CardText>
                                                The industry’s most comprehensive and full-featured lineup of movable glass wall products. With best-in-class sound control, panel automation, switchable smart glass, multiple layout and configuration options and in nearly unlimited finishes.
                                            </CardText>

                                        </CardBody>
                                    </Card>
                                </CardGroup>

                            </Col>
                        </Row>

                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default Operablewalls;
