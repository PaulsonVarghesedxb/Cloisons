import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import solid from "../images/solidwall.jpg"
import glazed from "../images/galzedmovable.png"
function Operablewalls() {
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

                                    <Card className="carddis" >
                                        <CardImg
                                            alt="Card image cap"
                                            src={solid}
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                Solid walls
                                            </CardTitle>

                                            <CardText>
                                                This card has supporting text below as a natural lead-in to additional content.
                                            </CardText>

                                        </CardBody>
                                    </Card>
                                    <Card className="carddis">
                                        <CardImg
                                            alt="Card image cap"
                                            src={glazed}
                                            top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                Gazed Movable walls
                                            </CardTitle>

                                            <CardText>
                                                This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                                            </CardText>

                                        </CardBody>
                                    </Card>
                                </CardGroup>

                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Operablewalls;
