import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import solid from "../images/solidwall.jpg"
import doubleGlazed from "../images/DOUBLEGLAZE.jpg"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function DemountableGlassPartions() {
    let navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="operaAble"><div className="headerGlass">Demountable Glass Partions</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <p className="justify-content-center align-items-center d-flex text-center subHead">Demountable Glass Partions</p>
                                <p>Our wide range of products makes it possible to meet technical and aesthetic requirements of most architectural projects.</p>
                                <p> With or without joint-covers, edge-to-edge or gap-joint, solid or glazed, our systems, in different thicknesses, are tested in various configurations : tests for acoustics, for demountability,…</p>
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
                                                SINGLE GLAZED - ID1
                                            </CardTitle>

                                            <CardText>
                                                Operable Walls set the standard for ease of use, durability, aesthetics and sound control. Available in flexible layout and storage configurations to optimize your interior space division needs, set up times are minimal, allowing your interior spaces to transform with little effort.
                                            </CardText>

                                        </CardBody>
                                    </Card>
                                    <Card className="carddis" onClick={() => { navigate('/DemoutableID2') }}>
                                        <CardImg
                                            alt="Card image cap"
                                            src={doubleGlazed}
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle className="subHead">
                                                DOUBLE GLAZED - ID2
                                            </CardTitle>

                                            <CardText>
                                                The reference concept in the field of demountable office partitions.It combines a contemporary design thanks to its fine joint covers with an economic approach of the layout requirements within the scope of most projects.
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

export default DemountableGlassPartions;
