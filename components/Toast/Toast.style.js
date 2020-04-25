import css from 'styled-jsx/css';
import colors from '../../styles/colors';

const ToastStyles = css`
  .toast-container {
    position: -webkit-fixed;
    position: fixed;
    width: 100vw;
    bottom: 4vh;
    left: 0;
    z-index: 1000;
    transition: visibility 0.5s ease-out, opacity 0.5s ease-out;
  }

  .visible {
    visibility: visible;
    opacity: 1;
  }

  .hidden{
    visibility: hidden;
    opacity: 0;
  }

  .toast-message {
    background-color: ${colors.colorBackgroundDark};
    padding: 6px 16px;
    font-weight: lighter;
    border-radius: 4px;
  }
`;

export default ToastStyles;
