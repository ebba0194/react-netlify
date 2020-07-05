import React from 'react';
import { StyledContainer, StyledForm } from "./styles";
import { Row, Col } from "styled-bootstrap-grid";

const Contact = () => (
    <StyledContainer>
        <Row>
            <Col col={12}>
                <div id="contact">
                    <StyledForm name="contact" method="POST" data-netlify="true">
                        <h3>Get In Touch</h3>
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Your Company: <input type="text" name="company" /></label>
                        </p>
                        <p>
                            <label>Message: <textarea rows="5" cols="30" name="message"/></label>
                        </p>
                        <p>
                            <button type="submit">
                                Send
                                <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img"
                                     fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                                     className="StyledIconBase-ea9ulj-0 iKhrnw"><title>MailSend icon</title>
                                    <path
                                        d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 001.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path>
                                    <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path>
                                </svg>
                            </button>
                        </p>
                    </StyledForm>

                </div>
            </Col>
        </Row>
    </StyledContainer>
);

export default Contact;
