import React from 'react';
import { StyledFooter, Wrap } from './styles';
import { Row, Col } from "styled-bootstrap-grid";

const Footer = () => (
    <StyledFooter fluid>
        <Row>
            <Col col={12}>
                <Wrap>
                    <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 iKhrnw"><title>Github
                        icon</title>
                        <path fillRule="evenodd"
                              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                              clipRule="evenodd"></path>
                    </svg>
                    <svg viewBox="0 0 24 24" height="48" width="48" focusable="false" role="img" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg" className="StyledIconBase-ea9ulj-0 iKhrnw"><title>Netlify
                        icon</title>
                        <path
                            d="M16.934 8.519a1.044 1.044 0 01.303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 01.209.574l3.497 1.482a1.044 1.044 0 01.355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 01-.7.407l-.647 3.957a1.044 1.044 0 01.303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25l-3.268-1.39a1.2 1.2 0 01-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 010-.167.052.052 0 00-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 01-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 01-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 01.824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 01.104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 01-.563.125 1.389 1.389 0 01-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 01.314 0 1.378 1.378 0 01.344 0l2.735-4.25a1.19 1.19 0 01-.334-.824 1.242 1.242 0 010-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 01.835-.282 1.357 1.357 0 01.397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 01.24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"></path>
                    </svg>
                    <i>This site was created with Github and Netlify! Check out the repo <a href="https://github.com/ebba0194/react-netlify" target="blank">here</a>.</i>
                </Wrap>
            </Col>
        </Row>
    </StyledFooter>
);

export default Footer;
