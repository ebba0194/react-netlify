import React from 'react';
import {
    Content,
    Headshot,
    StyledAbout
} from "./styles";
import { Row, Col } from "styled-bootstrap-grid";

const About = () => (
    <StyledAbout id="about">
        <Row>
            <Col col={12} md={4} order={2} mdOrder={1}>
                <Headshot>
                    <img src={'/headshot.jpg'} alt="profile" />
                </Headshot>
            </Col>
            <Col col={12} md={8} order={1} mdOrder={2}>
                <h3>About Me</h3>
                <Content>
                    <p>
                        I've been working with people and technology for over 10 years - first on a freelance basis, and then as a part of team within a digital agency. (And I've loved every minute).
                    </p>
                    <p>
                        I began a Computer Science degree and graduated with an Associates from
                        <strong> Minneapolis Technical College</strong> <i>(Minneapolis, Minnesota)</i> in <strong>2018</strong>.
                        I took an internship at <strong>RMG Media</strong> the same year. When the internship concluded, I was offered a full time position- and I was having so much fun, I decided
                        to stay on rather than return to school.
                    </p>
                    <p>
                        I have a passion for clean, simple, accessible, performant and scalable web experiences. It's incredibly rewarding to translate dreams and ideas into a digital reality.
                    </p>
                </Content>
            </Col>
        </Row>
    </StyledAbout>
);

export default About;
