import { Button, Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from "reactstrap";
import { useEffect, useState } from "react";
import img1 from "../images/cfourty/1.jpg";
import img2 from "../images/cfourty/2.jpg";
import img3 from "../images/cfourty/3.jpg";
import img4 from "../images/cfourty/4.jpg";
import { Bounce } from "react-awesome-reveal";
import { FiArrowUpCircle } from "react-icons/fi";


function CloisonP40() {
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
            altText: 'Slide 4',
            caption: 'Slide 4',
            key: 4,
            src: img4
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
                                    <p className="justify-content-center align-items-center d-flex text-center subHead">Double Glazed - Cloison 40(P40)</p>
                                    <p>The Partition range is the reference concept in the field of demountable office partitions. It combines an elegant design with proven flexibility, and therefore easier installation.</p>
                                    <p>Direct clipping of the joint covers enables an extremely simple implementation and assembly of these partitions, which are entirely made of aluminium, thanks to an important series of adjustments. It enables the creation of all types of partition modules and accepts all types of solid/glass filling and doors.</p>
                                    <p>It ensures a level of functionality required to meet to the requirements of each specific organisation and opens a human-scale working environment.</p>
                                </Bounce>
                            </Col>
                        </Row>
                        <Row className=' justify-content-md-center align-items-center m-5 p-5'>
                            <Col md="6" >
                                <style>
                                    {`.custom-tag {
              max-width: 100%;
              height: 400px;
              background: black;
            }`}
                                </style>
                                <Bounce direction={"left"} triggerOnce={true}>
                                    <Carousel activeIndex={activeIndex} next={next} previous={previous} fade={true}>
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
                                <Bounce direction={"Right"} triggerOnce={true}>
                                    <ul className="nolistdot">
                                        <li className="licsslist"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Easier installation</li>
                                        <li className="licsslist"><FiArrowUpCircle size={20} color="#2196F3" className="mb-1 mx-2" />Extremely simple assembly</li>
                                    </ul>
                                </Bounce>
                                <Bounce direction={"Right"} triggerOnce={true}>
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

export default CloisonP40;
