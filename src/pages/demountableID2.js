import { useEffect } from "react";
import { Bounce } from "react-awesome-reveal";
import { Col, Container, Row } from "reactstrap";

function DemoutableID2() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="demoutableHead"><div className="headerGlass">DOUBLE GLAZED - ID2</div></div>
            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p className="justify-content-center align-items-center d-flex text-center subHead">DOUBLE GLAZED - ID2</p>
                                    <p>The ID2 glass partition is aesthetically distinguished by the total absence of structure between the modules.</p>
                                    <p>This glazed partition is available in single glazing but especially in double glazing edge to edge and offers prestigious solutions and personalizes workspaces. </p>
                                    <p>In 77 or 103 mm thickness, with 2 tempered or laminated glazing, the acoustic performance of this removable partition is of a very high level. To affirm the luxurious character of this bulkhead, the junctions between the solid and glazed modules are realized edge to edge without a joint cover. Depending on the configuration, this partition can achieve an acoustic performance of up to 48 dB.</p>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='mx-5 p-5 pt-0'>
                            <p className="p-5 subHead2">CLOISON 26(P26)</p>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p>The reference concept in the field of demountable office partitions. It combines a contemporary design thanks to its fine joint covers with an economic approach of the layout requirements within the scope of most projects.</p>
                                    <p>Direct clipping of the joint covers enables an extremely simple implementation and assembly of these partitions, which are entirely made of aluminium.</p>
                                    <p>It is possible to create all types of partition modules, solid/glass filling and doors. Beautiful designs, modularity and economy combine to accommodate office environment.</p>
                                    <ul>
                                        <li>The reference concept</li>
                                        <li>Contemporary design</li>
                                        <li>Economic approach</li>
                                    </ul>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="partitiontwenty"></div>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className='mx-5 p-5 pt-0'>
                            <p className="p-5 justify-content-center align-items-center d-flex text-center subHead2">CLOISON 40(P40) </p>

                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="partitionfour"></div>
                                </Bounce>
                            </Col>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p>The Partition range is the reference concept in the field of demountable office partitions. It combines an elegant design with proven flexibility, and therefore easier installation.</p>
                                    <p>Direct clipping of the joint covers enables an extremely simple implementation and assembly of these partitions, which are entirely made of aluminium, thanks to an important series of adjustments.
                                        It enables the creation of all types of partition modules and accepts all types of solid/glass filling and doors.</p>
                                    <p>It ensures a level of functionality required to meet to the requirements of each specific organisation and opens a human-scale working environment.</p>
                                    <ul>
                                        <li>
                                            Easier installation</li>
                                        <li>Extremely simple assembly</li>
                                    </ul>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className='mx-5 p-5 pt-0'>
                            <p className="p-5 justify-content-end d-flex text-right subHead2">CLOISON 100(P100) </p>
                            <Col md="6" >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p>The 100 Partition® is the answer to your requirements regarding high partitions with major acoustic insulation properties.It combines the elegant design of the 40 Partition® and the stability of a 100mm-thick partition with excellent mechanical properties.</p>
                                    <p>Direct clipping of the joint covers enables extremely simple implementation and assembly of this partition entirely made of aluminium thanks to an important series of adjustments and a special bracket.</p>
                                    <p>It enables the creation of all types of partition modules up to 4.50m or more depending on the configuration of the partition and accepts all types of solid/glass filling and doors.</p>
                                    <ul>
                                        <li>
                                            High partitions</li>
                                        <li>Elegant design ans stabiity</li>
                                        <li> Extremely simple implementation ans assembly</li>

                                    </ul>
                                </Bounce>
                            </Col>
                            <Col md="6">
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="partitionhund"></div>
                                </Bounce>
                            </Col>
                        </Row>


                    </Col>
                </Row>

            </Container>
        </>
    );
}

export default DemoutableID2;
