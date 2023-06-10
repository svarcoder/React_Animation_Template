import styled from 'styled-components';

export const WavyTextStyle = styled.div<any>`
  /* -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(21%, transparent), to(rgba(255, 255, 255, 0.29))); */
  -webkit-box-reflect: ${(props) =>
    props.shadow
      ? 'below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(21%, transparent), to(rgba(255, 255, 255, 0.29)))'
      : null};

  width: 100%;

  input {
    display: none;
    border: 1px solid #fff;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
  }

  h1 {
    margin-top: 2rem;
  }

  .waviy {
  }

  .wavy {
    position: relative;
    -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
    animation-name: wavy;
    animation-duration: 1.3s;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    position: relative;

    top: 0;
    left: 0;
    font-size: ${(props) =>
      props.fontSize === 'small'
        ? '20px'
        : props.fontSize === 'medium'
        ? '35px'
        : props.fontSize === 'large'
        ? '50px'
        : null};
  }
  @keyframes wavy {
    0% {
      top: 0px;
    }
    50% {
      top: -15px;
    }
    100% {
      top: 0px;
    }
  }
`;

export const GradientStyleText = styled.div<any>`
  font-size: ${(props) =>
    props.fontSize === 'small'
      ? '20px'
      : props.fontSize === 'medium'
      ? '30px'
      : props.fontSize === 'large'
      ? '45px'
      : null};
  font-weight: 700;
  letter-spacing: 5px;
  background: -o-linear-gradient(45deg, #ff8a00, #e52e71, #044bea, #7a00ff);
  background: linear-gradient(45deg, #ff8a00, #e52e71, #044bea, #7a00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 300% 300%;
  -webkit-animation: gradient-text 8s ease infinite;
  animation: gradient-text 8s ease infinite;

  @-webkit-keyframes gradient-text {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes gradient-text {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const HeaderSlideUpText = styled.div<any>`
  font-size: ${(props) =>
    props.fontSize === 'small'
      ? '20px'
      : props.fontSize === 'medium'
      ? '30px'
      : props.fontSize === 'large'
      ? '45px'
      : null};

  opacity: 0;
  -webkit-animation: reveal 1s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;
  -moz-animation: reveal 1s ease-in 1 normal forwards;
  -o-animation: reveal 1s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;
  animation: reveal 1s cubic-bezier(0, 1, 0.5, 1) 1 normal forwards;

  -webkit-animation-delay: 0;
  -moz-animation-delay: 0;
  -o-animation-delay: 0;
  animation-delay: 0;

  @keyframes reveal {
    0% {
      opacity: 0;
      -webkit-transform: translateY(100%);
      -moz-transform: translateY(100%);
      -o-transform: translateY(100%);
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -o-transform: translateY(0);
      transform: translateY(0);
    }
  }
`;
