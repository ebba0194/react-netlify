import React from 'react';
import { Container, Row, Col } from "styled-bootstrap-grid";

const Contact = () => (
    <Container fluid>
        <Row>
            <Col col={12}>
                <div id="contact">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdwWWCw8A7L9W8RWdyHh-2Us4r2rcCQIiw_IdXjg5xTJHLECA/viewform?embedded=true"
                        width={window.innerWidth - 30} height="1200" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
                    </iframe>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Contact;
