import React from 'react'
import { Col, Row } from 'reactstrap'

const Footer = () => {
    return (
        <>
            <div className='Footer'>
                <Row>
                    <Col md="3" className='px-3 justify-content-center align-items-center d-flex ' >
                        <img
                            alt="logo"
                            src="logo.png"
                            style={{
                                height: 70,
                                width: 138
                            }}
                        />
                    </Col>
                    <Col md="3" className='px-3' >
                        <ul className='Footetli'>
                            <li className='lihead'>Pages</li>
                            <li className='lilist'>About us</li>
                            <li className='lilist'>Our Projects</li>
                            <li className='lilist' >Resource</li>
                            <li className='lilist'>Contact us</li>
                        </ul>
                    </Col>
                    <Col md="3" className='px-3' >
                        <ul className='Footetli'>
                            <li className='lihead'>Services</li>
                            <li className='lilist'>About us</li>
                            <li className='lilist'>Our Projects</li>
                            <li className='lilist'>Resource</li>
                            <li className='lilist'>Contact us</li>
                        </ul>
                    </Col>
                    <Col md="3" className='px-3' >
                        <ul className='Footetli'>
                            <li className='lihead'>Contact</li>
                            <li className='lilist'>302M, 3rdFloor.
                                FAST Business Centre Building
                                Dubai, United Arab Emirates</li>
                            <li className='lilist'>Ph:+97142204141</li>
                            <li className='lilist'>Email:contact@thecloisons.com</li>

                        </ul>
                    </Col>
                </Row>

            </div>
            <Row className='m-0'>
                <Col className='txtFooter'>
                    Copyright © The Cloisons | 2023
                </Col>
            </Row>
        </>
    )
}

export default Footer