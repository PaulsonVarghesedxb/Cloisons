import React from 'react'
import project from "../images/projects.jpg"
import { Container } from 'reactstrap'

const Project = () => {
    return (
        <Container>
            <p className="justify-content-center align-items-center d-flex text-center subHead p-5">Our Projects</p>
            <img src={project} width={'100%'} height={'100%'} alt="loading.." />
        </Container>
    )
}

export default Project