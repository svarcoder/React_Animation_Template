import styled from 'styled-components';

interface IProps {
  isCheckedProps?: boolean;
}

export const CheckboxButtonStyle = styled.div<IProps>`
  box-sizing: content-box;

  input[type='checkbox'] {
    height: 0;
    width: 0;
  }

  input[type='checkbox'] + label {
    position: relative;
    display: flex;
    align-items: center;
    color: ${(props) => (props.isCheckedProps ? 'transparent' : '#9e9e9e')};
    transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
  }
  input[type='checkbox'] + label > ins {
    position: absolute;
    display: block;
    bottom: -2px;
    left: 38px;
    height: 0;
    width: 95%;
    overflow: hidden;
    text-decoration: none;
    transition: height 300ms cubic-bezier(0.4, 0, 0.23, 1);
  }
  input[type='checkbox'] + label > ins > i {
    position: absolute;
    bottom: 1;
    left: 7;
    font-style: normal;
    color: #4fc3f7;
  }
  input[type='checkbox'] + label > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1em;
    width: 1em;
    height: 1em;
    background: transparent;
    border: 2px solid #9e9e9e;
    border-radius: 2px;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.4, 0, 0.23, 1);
  }

  input[type='checkbox'] + label:hover > span,
  input[type='checkbox']:focus + label > span {
    background: rgba(255, 255, 255, 0.1);
  }
  input[type='checkbox']:checked + label > ins {
    height: 100%;
  }

  input[type='checkbox']:checked + label > span {
    border: 0.2em solid #ffeb3b;
    padding: 0;
    background-color: #ffeb3b;
    animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
    box-sizing: content-box;
  }
  input[type='checkbox']:checked + label > span:before {
    content: '';
    position: absolute;
    top: 0.55em;
    left: 0.37em;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: checkbox-check 125ms 250ms cubic-bezier(0.4, 0, 0.23, 1) forwards;
    box-sizing: content-box;
  }

  @keyframes shrink-bounce {
    0% {
      transform: scale(1);
    }
    33% {
      transform: scale(0.55);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes checkbox-check {
    0% {
      width: 0;
      height: 0;
      border-color: #212121;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    33% {
      width: 0.2em;
      height: 0;
      transform: translate3d(0, 0, 0) rotate(45deg);
    }
    100% {
      width: 0.2em;
      height: 0.5em;
      border-color: #212121;
      transform: translate3d(0, -0.5em, 0) rotate(45deg);
    }
  }
`;

export const SimpleCheckBoxStyle = styled.div`
  .cbx {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    /* padding: 6px 8px; */
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.2s ease;
  }
  .cbx:not(:last-child) {
    margin-right: 6px;
  }
  .cbx:hover {
    background: rgba(0, 119, 255, 0.06);
  }
  .cbx span {
    float: left;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    transform: scale(1);
    border: 1px solid #cccfdb;
    transition: all 0.2s ease;
    box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);
  }
  .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }
  .cbx span:last-child {
    padding-left: 8px;
    line-height: 18px;
  }
  .cbx:hover span:first-child {
    border-color: #07f;
  }
  .inp-cbx {
    position: absolute;
    visibility: hidden;
  }
  .inp-cbx:checked + .cbx span:first-child {
    background: #07f;
    border-color: #07f;
    animation: wave 0.4s ease;
  }
  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }

  .inline-svg {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }

  @-moz-keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
  @-webkit-keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
  @-o-keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
  @keyframes wave {
    50% {
      transform: scale(0.9);
    }
  }
`;
