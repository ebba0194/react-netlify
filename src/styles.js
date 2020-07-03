import { createGlobalStyle } from 'styled-components';

const fontSizeNumber = 16;

export const global = { fontSize: `${fontSizeNumber}px` };

export const getRemsFromPixels = (pixels) => {
    const numberRem = pixels / fontSizeNumber;
    return `${numberRem}rem`;
};

export const fontFamily = {
    montserrat: 'Montserrat',
    abril: 'Abril Fatface',
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
  }
  html {
    font-size: ${global.fontSize};
  }
  body {
    font-size: ${getRemsFromPixels(16)};
    font-family: ${fontFamily.montserrat};
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
    font-family: ${fontFamily.montserrat};
  }
  button {
    font-family: ${fontFamily.montserrat};
    &:hover {
        cursor: pointer;
    }
  }
`;
