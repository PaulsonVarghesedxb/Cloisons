import { Col, Container, Row } from "reactstrap";
import { Slide } from "react-awesome-reveal";

function About() {
  return (
    <>
      <div className="aboutUs"><div className="headerAbout">About us</div></div>
      <Container>
        <Row>
          <Col md="12" className="justify-content-md-center"  >
            <Row className='m-5 p-5 '>
              <Col md="6" className='px-3' >
                <p className="subHead">What we do</p>
                <p className="para">
                  A leading manufacturing company dedicated to delivering innovative solutions to our clients. We believe that success comes from combining technical expertise with a deep understanding of our clients' needs. We are constantly learning and evolving ,staying up-to-date with the latest trends and technologies in our field to ensure that we are always offering the best possible solutions.
                </p></Col>

              <Col md="6" className='p-0 pl-2' >
                <Slide direction={"right"} triggerOnce={true}>
                  <div className="about3Img"></div>
                </Slide>
              </Col>

            </Row>
            <Row className='m-5 p-5 '>

              <Col md="6" className='p-0 ' >
                <Slide triggerOnce={true}>
                  <div className="about4Img"></div>
                </Slide>
              </Col>
              <Col md="6" className='px-3' >
                <p className="subHead">Partners</p>
                <p className="para">
                  Our esteemed partner , French manufactures ABCD International has been designing and marketing demountable office partitions since 1980. It has been able to establish itself as the leading manufacturer range designer. From design to manufacturing and marketing ,we offer over 15 ranges of high-quality removable partitions options. Our product line includes items like Joint partitions, Edge to edge partitions, Autonomous boxes, etc In order to reduce the emission of pollutants into the ambient air, ABCD has selected low- emission materials [ A+ or A labeled] for its partition walls. Its easy implementation, modularity and attractive price contribute towards an optimal office environment.
                </p></Col>
            </Row>
            <Row className='m-5 p-5 '>


              <Col md="6" className='px-3' >
                <p className="subHead">Partners</p>
                <p className="para">
                  PCTS invests in the engineering, maintenance and production of quality , customisable , movable walls with a continuous focus on customer satisfaction . We believe that our exacting precision led standards ensure products are superior in their design and development . PCTS precision line products are ALMA, AQUA, WAVE, VISTA.
                </p></Col>
              <Col md="6" className='p-0' >
                <Slide direction={"right"} triggerOnce={true}>
                  <div className="about1Img"></div>
                </Slide>
              </Col>
            </Row>
            <Row className='m-5 p-5 '>

              <Col md="6" className='p-0' >
                <Slide triggerOnce={true} >
                  <div className="about2Img"></div>

                </Slide>
              </Col>
              <Col md="6" className='px-3' >
                <p className="subHead">Products</p>
                <p className="para">
                  Our products are designed to meet the needs and exceed the expectations of our customers. Our research and development team is continually raising the design benchmark and our design team is dedicated to providing solutions that inspire and perform superbly.
                </p></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
