import css from 'styled-jsx/css';
import colors from './colors';

const GlobalStyles = css.global`
  html,
  body {
    background: ${colors.colorBackgroundLight};
  }

  .btn-primary {
    background-color: ${colors.colorButtonPrimary};
    border-color: ${colors.colorButtonPrimary};
  }

  .btn-primary :hover{
    background-color: ${colors.colorButtonPrimaryDark};
  }
`;

export default GlobalStyles;
