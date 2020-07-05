import styled from 'styled-components';
import {Container, media} from "styled-bootstrap-grid";
import {colors, fontFamily, getRemsFromPixels} from "../../styles";

export const StyledContainer = styled(Container)`
    margin-bottom: ${getRemsFromPixels(64)};
    ${media.md`
        padding: ${getRemsFromPixels(80)};
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        margin-bottom: ${getRemsFromPixels(128)};
    `}
`;

export const StyledForm = styled.form`
    padding: ${getRemsFromPixels(32)};
    width: 100%;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    padding-bottom: ${getRemsFromPixels(64)};
    text-align: center;
    ${media.md`
        text-align: left;
        padding: 0 ${getRemsFromPixels(64)};
    `}
    label {
        width: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: flex-start;
        font-size: ${getRemsFromPixels(16)};
        ${media.md`
            font-size: ${getRemsFromPixels(18)};
       `}
    }
    input, textarea {
       padding: ${getRemsFromPixels(16)};
       color: ${colors.ebonyClay};
       font-family: ${fontFamily.poppins};
       font-size: ${getRemsFromPixels(16)};
       width: 100%; 
       resize: vertical;
       flex-grow: 1;
       display: block;
       border: ${getRemsFromPixels(1)} solid rgba(0,0,0,0.24);
       transition: 0.2s;
       &:focus {
        border-color: rgba(0,0,0,0.8);
       }
       ${media.md`
            font-size: ${getRemsFromPixels(18)};
       `}
    }
    button {
        padding: ${getRemsFromPixels(16)};
        font-size: ${getRemsFromPixels(18)};
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${colors.burningOrange};
        color: ${colors.white};
        border: 0;
        svg {
            color: ${colors.white};
            padding-left: ${getRemsFromPixels(16)};
        }
    }
`;
