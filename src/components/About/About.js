import React from 'react';
import { Headshot, StyledAbout } from "./styles";
import { Row, Col } from "styled-bootstrap-grid";

const About = () => (
    <StyledAbout id="about">
        <Row>
            <Col col={12}>
                About Me
                <Headshot>
                    <img src={'/headshot.jpg'} alt="profile" />
                </Headshot>
            </Col>
        </Row>
    </StyledAbout>
);

export default About;
