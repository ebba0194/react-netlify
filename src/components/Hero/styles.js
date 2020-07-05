import styled from 'styled-components';
import { Container, Col, Row, media } from 'styled-bootstrap-grid';
import {colors, fontFamily, getRemsFromPixels} from "../../styles";

export const StyledHero = styled(Container)`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    background-color: ${colors.ebonyClay};
    background-image: url('/skyline.jpg');
    background-attachment: fixed;
    background-position: center;
    background-blend-mode: soft-light;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    padding: ${getRemsFromPixels(48)};
    button:hover {
        cursor: pointer;
    }
`;

export const FullHeightRow = styled(Row)`
    height: 100%;
    flex-grow: 1;
    position: relative;
`;

export const TextWrapper = styled.div`
    color: ${colors.white};
    letter-spacing: ${getRemsFromPixels(2)};
    text-align: center;
    text-shadow: ${getRemsFromPixels(1)} ${getRemsFromPixels(1)} ${colors.ebonyClay};
    h1 {
        letter-spacing: ${getRemsFromPixels(8)};
        margin-bottom: 0;
        font-size: ${getRemsFromPixels(30)};
        color: ${colors.white};
        text-shadow: 0 ${getRemsFromPixels(1)} ${colors.white};
        ${media.md`
            font-size: ${getRemsFromPixels(80)};
            text-shadow: ${getRemsFromPixels(1)} ${getRemsFromPixels(1)} ${colors.ebonyClay};
        `}
    }
    a {
        transition: 0.2s ease-in-out;
        color: ${colors.white};
        &:hover {
            color: ${colors.burningOrange};    
        }
    }
`;

export const ButtonWrapper = styled(Col)`
    display: flex;
    flex-flow: column
    justify-content: center;
    align-items: flex-end;
    bottom: 0;
    button {
        display: block;
        margin: auto;
        margin-bottom: 0;
        background: transparent;
        border: 0;
        svg {
            text-shadow: ${getRemsFromPixels(1)} ${getRemsFromPixels(1)} ${colors.ebonyClay};
        }
    }
`;

export const Header = styled.div`
    padding: ${getRemsFromPixels(10)} ${getRemsFromPixels(48)};
    box-shadow: 0 0 0 rgba(0,0,0,0.12), 0 0 0 rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-in-out;
    max-width: 100%;
    width: auto;
    margin: auto;
    button {
        font-family: ${fontFamily.poppins};
        border: 0;
        background: transparent;
        font-size: ${getRemsFromPixels(18)};
        font-weight: 300;
        letter-spacing: ${getRemsFromPixels(2)};
        margin: ${getRemsFromPixels(16)} ${getRemsFromPixels(32)};
        padding: 0;
        text-align: center;
        color: ${colors.white};
        position: relative;
        transition: 0.2s ease-in-out;
        text-shadow: ${getRemsFromPixels(1)} ${getRemsFromPixels(1)} ${colors.ebonyClay};
        &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: -${getRemsFromPixels(12)};
            width: 0;
            border-bottom: ${getRemsFromPixels(1)} solid transparent;
            transition: 0.2s ease-in-out;
        }
        &:hover {
            outline: 0;
            color: ${colors.burningOrange};
            text-shadow: ${getRemsFromPixels(1)} ${getRemsFromPixels(1)} transparent;
            &:after {
                width: 100%;
                border-color: ${colors.burningOrange};
            }
        }
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-flow: flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }
`;
