import React from 'react';
import {
    ImageWrap,
    Logo,
    LogosWrap,
    StyledTile
} from "./styles";

const Tile = ({ project }) => (
    <StyledTile href={project.url} target="blank">
        <strong>{project.title}</strong>
        <ImageWrap>
            <img src={project.img} alt={project.title}/>
        </ImageWrap>
        <LogosWrap>
            {project.logos.map((logo, i) => (
                <Logo key={`logo-${i}`}>
                    <logo.component />
                </Logo>
            ))}
        </LogosWrap>
    </StyledTile>
);

export default Tile; 
