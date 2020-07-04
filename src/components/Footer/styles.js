import styled from 'styled-components';
import { Container} from "styled-bootstrap-grid";
import {colors, getRemsFromPixels} from '../../styles';

export const StyledFooter = styled(Container)`
    background: ${colors.ebonyClay};
    color: ${colors.white};
    padding: ${getRemsFromPixels(64)};
    a {
        color: ${colors.burningOrange};
    }
`;

export const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    svg {
        margin-right: ${getRemsFromPixels(16)};
    }
`;
