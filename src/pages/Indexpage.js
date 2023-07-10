import React, { useState } from 'react'
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from "reactstrap";
import img1 from "../images/ctwentySix/1.jpg"
import img2 from "../images/ctwentySix/2.jpg"
import img3 from "../images/ctwentySix/3.jpg"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  ]
  useEffect(() => {
    window.scrollTo(0, 0)
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
                <Col md="6" style={{ backgroundImage: `url(Services/serv1.jpg)` }}>
                  <Link to="Product"><div className="filterBg ">Project Design</div></Link>
                </Col>
                <Col md="6" style={{ backgroundImage: img1 }}>
                  <Link to="Product"><div className="filterBg ">Project Design</div></Link>
                </Col>
              </Row>
            </div>

          </Col></Row>
        <Row>
          <Col md="12 " className="justify-content-md-center"  >
            <div>
              <p className="justify-content-center align-items-center d-flex text-center subHead">Connect with Us</p>
            </div>

          </Col></Row>
      </Container>
    </div>
  )

}

export default Indexpage