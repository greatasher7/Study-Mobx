import { DefaultTheme, css } from 'styled-components';

// variables
const variable = {};

// mixins
const mixin = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

// colors
const lightColors = {
  text_color: '#000000',
  background_color: '#ffffff',
  btn_color: 'skyblue',
};

const darkColors = {
  text_color: '#ffffff',
  background_color: '#000000',
  btn_color: 'green',
};

const lightTheme: DefaultTheme = {
  colors: lightColors,
  variable,
  mixin,
};

const darkTheme: DefaultTheme = {
  colors: darkColors,
  variable,
  mixin,
};

export { lightTheme, darkTheme };

export type TypeVariable = typeof variable;
export type TypeMixin = typeof mixin;
export type TypeColor = typeof lightColors;
