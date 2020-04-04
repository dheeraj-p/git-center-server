import css from 'styled-jsx/css';
import colors from '../../styles/colors';

const HeaderStyles = css`
  .header {
    background-color: ${colors.colorBackgroundDark};
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1000;
  }
`;

export default HeaderStyles;
