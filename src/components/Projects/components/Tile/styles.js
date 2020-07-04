import styled from 'styled-components';
import { colors, fontFamily, getRemsFromPixels } from "../../../../styles";

export const StyledTile = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    strong {
        font-family: ${fontFamily.poppins};
        font-size: ${getRemsFromPixels(24)};
        font-weight: 800;
        text-transform: uppercase;
        color: ${colors.ebonyClay};
        letter-spacing: ${getRemsFromPixels(2)};
    }
    * {
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
    img {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    &:hover {
        img {
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
        strong {
            text-shadow: ${getRemsFromPixels(-1)} ${getRemsFromPixels(1)} ${colors.ebonyClay};
            color: ${colors.burningOrange};
        }
    }
`;

export const ImageWrap = styled.div`
    width: 100%;
    padding: ${getRemsFromPixels(28)};
    img {
        width: 100%;
        object-fit: contain;
    }
`;

export const LogosWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    padding: ${getRemsFromPixels(16)} ${getRemsFromPixels(32)};
    svg {
        fill: ${colors.ebonyClay};
    }
`;

export const Logo = styled.div`
    width: 20%;
`;
