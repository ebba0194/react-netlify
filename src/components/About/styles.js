import styled from 'styled-components';
import { Container, media } from "styled-bootstrap-grid";
import {colors, getRemsFromPixels} from "../../styles";

export const StyledAbout = styled(Container)`
    margin-top: ${getRemsFromPixels(64)};
    color: ${colors.ebonyClay};
    ${media.lg`
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        padding-bottom: ${getRemsFromPixels(128)};
    `}
`;

export const Content = styled.div`

`;

export const Headshot = styled.div`
    width: ${getRemsFromPixels(150)};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: ${getRemsFromPixels(48)} auto;
    padding: ${getRemsFromPixels(16)};
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    img {
        width: 100%;
        display: block;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;
