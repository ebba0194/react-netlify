import styled from 'styled-components';
import { Container } from "styled-bootstrap-grid";
import {colors, getRemsFromPixels} from "../../styles";

export const StyledAbout = styled(Container)`

`;

export const Headshot = styled.div`
    width: ${getRemsFromPixels(150)};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: ${getRemsFromPixels(48)} auto;
    border: ${getRemsFromPixels(2)} solid ${colors.white};
    padding: ${getRemsFromPixels(16)};
    border-radius: 100%;
    img {
        width: 100%;
        display: block;
        border-radius: 100%;
    }
`;
