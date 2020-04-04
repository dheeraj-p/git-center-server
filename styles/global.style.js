import css from 'styled-jsx/css';
import colors from './colors';

const GlobalStyles = css.global`
  html,
  body {
    background: ${colors.colorBackgroundLight};
  }
`;

export default GlobalStyles;
