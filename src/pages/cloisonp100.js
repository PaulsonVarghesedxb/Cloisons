import { Button, Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import img1 from "../images/chundered/1.jpg"
import img2 from "../images/chundered/2.jpg"
import img3 from "../images/chundered/3.jpg"
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";


function CloisonP100() {
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
        <>

            <Container>
                <Row>
                    <Col md="12" className="justify-content-md-center"  >
                        <Row className='m-5 p-5 '>
                            <Col md="12" className='px-3' >
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <p className="justify-content-center align-items-center d-flex text-center subHead">Double Glazed - Cloison 100(P100)</p>
                                    <p>The 100 Partition® is the answer to your requirements regarding high partitions with major acoustic insulation properties. It combines the elegant design of the 40 Partition® and the stability of a 100mm-thick partition with excellent mechanical properties.</p>
                                    <p>Direct clipping of the joint covers enables extremely simple implementation and assembly of this partition entirely made of aluminium thanks to an important series of adjustments and a special bracket.</p>
                                    <p>It enables the creation of all types of partition modules up to 4.50m or more depending on the configuration of the partition and accepts all types of solid/glass filling and doors.</p>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className=' justify-content-md-center align-items-center m-5 p-5'>
                            <Col md="7" >
                                <style>
                                    {`.custom-tag {
              max-width: 100%;
              height: 450px;
              background: black;
            }`}
                                </style>
                                <Bounce direction={"left"} triggerOnce={true}>
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
                                </Bounce>
                            </Col>
                            <Col>
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <ul className="nolistdot">
                                        <li className="licsslist"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />High partitions</li>
                                        <li className="licsslist"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Elegant design ans stabiity</li>
                                        <li className="licsslist"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Extremely simple implementation ans assembly</li>
                                    </ul>
                                </Bounce>
                                <Bounce direction={"right"} triggerOnce={true}>
                                    <div className="m-5">
                                        <Button className="btdw p-2">Download</Button>
                                    </div>
                                </Bounce>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container >
        </>
    );
}

export default CloisonP100;
