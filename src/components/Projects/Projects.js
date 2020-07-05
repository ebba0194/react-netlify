import React, { useState } from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import {ProjectContainer, ContentWrap, Margin, CollapsibleWrap} from "./styles";
import { projectData } from "./data";
import Tile from "./components/Tile";
import Slider from "react-slick";

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 3,
        afterChange: current => setCurrentSlide(current),
        nextArrow:
            <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 iKhrnw">
                <title>RightArrowSquare icon</title>
                <path d="M3 5v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2zm4 6h5V7l5 5-5 5v-4H7v-2z"></path>
            </svg>,
        prevArrow:
            <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 iKhrnw">
                <title>LeftArrowSquare icon</title>
                <path
                    d="M19 21a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14zM12 7v4h5v2h-5v4l-5-5 5-5z"></path>
            </svg>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    prevArrow: '',
                    nextArrow: ''
                }
            }
        ]
    };
    return (
        <ProjectContainer id="projects">
            <Row>
                <Col col={12}>
                    <h3>
                        Projects
                    </h3>
                    <i>A non-comprehensive look at what I've been working on lately</i>
                    <Margin/>
                </Col>
                <Col col={12}>
                    <Slider {...settings} >
                        {projectData.map((project) => (
                            <div key={project.title}>
                                <Tile project={project} />
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>
            <Row>
                <Col col={12}>
                    <Margin />
                    <CollapsibleWrap>
                        {projectData.map((project, i) => (
                            <ContentWrap key={project.title} show={i === currentSlide}>
                                <strong>{project.title}</strong>
                                <div dangerouslySetInnerHTML={{ __html: project.content }} />
                            </ContentWrap>
                        ))}
                    </CollapsibleWrap>
                </Col>
            </Row>
        </ProjectContainer>
    );
}

export default Projects;
