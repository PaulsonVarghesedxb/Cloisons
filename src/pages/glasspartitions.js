import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import singleGlaze from "../images/singelglazed/singleglazed7.jpeg"
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
            <div className="demountable"><div className="headerGlass">Demountable Glass Partions</div></div>
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

                                    <Card className="carddis" onClick={() => { navigate('/SingleGlazedID1') }}>
                                        <CardImg
                                            alt="Card image cap"
                                            src={singleGlaze}
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle className="subHead">
                                                SINGLE GLAZED - ID1
                                            </CardTitle>

                                            <CardText>
                                                ABCD International’s ID 1 Partition is a single edge to edge glazing partition that offers an innovative design and smart solutions for designing office partitions. This partition system was designed to offer versatility, quality, and brightness.
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
