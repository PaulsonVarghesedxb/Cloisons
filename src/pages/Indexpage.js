import React, { useState } from 'react'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from "reactstrap";
import img1 from "../images/ctwentySix/1.jpg"
import img2 from "../images/AquaMain.jpg"
import img3 from "../images/waveImg.jpg"
import img4 from "../images/chundered/2.jpg"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bounce } from 'react-awesome-reveal';
import { GoMail } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Indexpage = () => {
  const items = [
    {
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
      src: img1
    },
    {
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
      src: img2
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: img3
    },
    {
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
      src: img4
    },
  ]
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  }, [])
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          className="d-block w-100 h-100"
          src={item.src}
          alt={item.altText}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      {/* <div className='banner'>

      </div> */}
      <Container>
        <Row>
          <Col>
            <style>
              {`.custom-tag {
              max-width: 100%;
              height: 450px;
              background: black;
            }`}
            </style>
            <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={true} interval={1000}>
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>

        </Row>

        <Row>
          <Col md="12 " className="justify-content-md-center mt-5 mb-5"  >
            <div>
              <p className="justify-content-center align-items-center d-flex text-center subHead">Our Products</p>
              <Row>
                <Col md="6" className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/ID1.jpg)` }}>
                    <Link to="SingleGlazedID1"> <Bounce direction={"left"} triggerOnce={true}><div className="productDiv">ID 1</div></Bounce></Link>
                  </div>
                </Col>
                <Col md="6" className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/26.jpg)` }}>
                    <Link to="CloisonP26"><Bounce direction={"right"} triggerOnce={true}><div className="productDiv ">CLOISON 26</div></Bounce></Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md="6" className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/40.jpg)` }}>
                    <Link to="CloisonP40"><Bounce direction={"left"} triggerOnce={true}><div className="productDiv">CLOISON 40</div></Bounce></Link>
                  </div>
                </Col>
                <Col md="6" className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/100.jpg)` }}>
                    <Link to="CloisonP100"><Bounce direction={"right"} triggerOnce={true}><div className="productDiv ">CLOISON 100</div></Bounce></Link>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/Alma1.jpg)` }}>
                    <Link to="Alma"><Bounce direction={"left"} triggerOnce={true}><div className="productDiv">ALMA</div></Bounce></Link>
                  </div>
                </Col>
                <Col className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/Aquaimg.jpg)` }}>
                    <Link to="Aqua"><Bounce direction={"left"} triggerOnce={true}><div className="productDiv ">AQUA</div></Bounce></Link>
                  </div>
                </Col>
                <Col className='p-3'>
                  <div className="serviceBg " style={{ backgroundImage: `url(products/waveimg.jpg)` }}>
                    <Link to="Wave"><Bounce direction={"right"} triggerOnce={true}><div className="productDiv ">WAVE</div></Bounce></Link>
                  </div>
                </Col>
              </Row>
            </div>

          </Col></Row>
        <Row>
          <Col md="12 " className="justify-content-md-center m-3 p-3"  >
            <div>
              <p className="justify-content-center align-items-center d-flex text-center subHead p-3">Connect with Us</p>
              <Row>
                <Col className="justify-content-center align-items-center d-flex text-center">
                  <div className='borderIco justify-content-center align-items-center d-flex text-center'>
                    <GoMail size={60} className="connectIco" />
                  </div>
                </Col>
                <Col className="justify-content-center align-items-center d-flex text-center">
                  <div className='borderIco justify-content-center align-items-center d-flex text-center'>
                    <BsTelephone size={60} className="connectIco" />
                  </div>
                </Col >
                <Col className="justify-content-center align-items-center d-flex text-center">
                  <div className='borderIco justify-content-center align-items-center d-flex text-center'>
                    <IoLogoWhatsapp size={60} className="connectIco" />
                  </div>
                </Col>
              </Row>
            </div>

          </Col></Row>
      </Container>
    </div>
  )

}

export default Indexpage