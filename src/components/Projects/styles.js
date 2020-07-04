import { Container, media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import {colors, getRemsFromPixels} from "../../styles";

export const ProjectContainer = styled(Container)`
    padding-bottom: ${getRemsFromPixels(128)};
    text-align: center;
    vertical-align: center;
    svg {
        fill: ${colors.burningOrange};
    }
    ${media.md`
        padding-top: ${getRemsFromPixels(64)};
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
    min-height: ${getRemsFromPixels(300)};
`;

export const ContentWrap = styled.div`
    max-height: 0;
    opacity: 0;
    padding: 0 ${getRemsFromPixels(32)};
    overflow: hidden;
    transition: 0.3s ease-in-out;
    ${({ show }) => show && `
        height: 100%;
        max-height: ${getRemsFromPixels(1000)};
        opacity: 1;
        padding: ${getRemsFromPixels(32)};
    `}
`;
