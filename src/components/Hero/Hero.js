import React from 'react';
import { colors } from "../../styles";
import { Row, Col } from 'styled-bootstrap-grid';
import {
    ButtonWrapper,
    FullHeightRow,
    Header,
    StyledHero,
    TextWrapper
} from "./styles";

const Hero = () => (
    <StyledHero fluid>
        <Row>
            <Col col={12}>
                <Header>
                    <ul>
                        <li>
                            <button onClick={() => document.getElementById('about').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>About</button>
                        </li>
                        <li>
                            <button onClick={() => document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>Projects</button>
                        </li>
                        <li>
                            <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>Contact</button>
                        </li>
                    </ul>
                </Header>
            </Col>
        </Row>
        <Row>
            <Col col={12}>
                <TextWrapper>
                    <h1>Bree Therkildsen</h1>
                    <h3>Frontend Developer</h3>
                    <div>Seattle, Washington &bull; <a href="tel:612-384-9744">(612) 384-9744</a></div>
                    <div>
                        <a href="mailto:bree.therkildsen@gmail.com">bree.therkildsen@gmail.com</a>
                    </div>
                </TextWrapper>
            </Col>
        </Row>
        <FullHeightRow>
            <ButtonWrapper col={12}>
                <button onClick={() => document.getElementById('about').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}>
                    <svg viewBox="0 0 24 24" height="80" width="80" focusable="false" role="img" fill={colors.white}
                         xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 iKhrnw">
                        <title>CaretDownCircle icon</title>
                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2zm0 14l-5-6h10l-5 6z"></path>
                    </svg>
                </button>
            </ButtonWrapper>
        </FullHeightRow>
    </StyledHero>
);

export default Hero;
