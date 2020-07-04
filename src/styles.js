import { createGlobalStyle } from 'styled-components';

const fontSizeNumber = 16;

export const global = { fontSize: `${fontSizeNumber}px` };

export const getRemsFromPixels = (pixels) => {
    const numberRem = pixels / fontSizeNumber;
    return `${numberRem}rem`;
};

export const fontFamily = {
    raleway: 'Raleway',
    poppins: 'Poppins',
};

export const colors = {
    burningOrange: '#FF6732',
    cyan: '#02F2FF',
    ebonyClay: '#2A2F3D',
    supernova: '#FFCA00',
    white: '#FFFFFF',
};

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    line-height: 1.5;
    overflow-x: hidden;
  }
  html {
    font-size: ${global.fontSize};
  }
  body {
    color: ${colors.ebonyClay};
    font-size: ${getRemsFromPixels(16)};
    font-family: ${fontFamily.raleway};
    font-weight: 400;
    margin: 0;
  }
  #root {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5 {
    font-family: ${fontFamily.poppins};
  }
  h3 {    
    font-size: ${getRemsFromPixels(32)};
  }
  a {
    color: ${colors.ebonyClay};
  }
  button {
    font-family: ${fontFamily.raleway};
    &:hover {
        cursor: pointer;
    }
  }
`;
