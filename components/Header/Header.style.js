import css from 'styled-jsx/css';
import colors from '../../styles/colors';

const HeaderStyles = css`
  .header {
    background-color: ${colors.colorBackgroundDark};
  }

  .header > .title{
    color: ${colors.colorTextLight};
  }
`;

export default HeaderStyles;
