import { Container, media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {colors, getRemsFromPixels} from "../../styles";

export const ProjectContainer = styled(Container)`
    padding-top: ${getRemsFromPixels(64)};
    text-align: center;
    vertical-align: center;
    svg {
        fill: ${colors.burningOrange};
    }
    ${media.md`
        text-align: left;
    `}
    h3 {
        margin-bottom: 0;
    }
`;

export const Margin = styled.div`
    margin-top: ${getRemsFromPixels(32)};
`;

export const CollapsibleWrap = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

export const ContentWrap = styled.div`
    opacity: 0;
    display: none;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out 0.1s;
    ${({ show }) => show && `
        opacity: 1;
        display: block;
        padding: ${getRemsFromPixels(32)};
    `}
`;
