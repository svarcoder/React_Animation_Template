/* eslint-disable @typescript-eslint/no-unused-expressions */
import styled from "styled-components";

export const AnimatedCard = styled.body.attrs((props: { Width: string }) => {
  props;
})`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // font-size: 62.5%;
    font-family: "Poppins", sans-serif;
  }

  width: 100%;
  min-height: 100vh;
  background: #40e0d0;
  background: -webkit-linear-gradient(to right, #ff0080, #ff8c00, #40e0d0);
  background: linear-gradient(to right, #ff0080, #ff8c00, #40e0d0);
  display: grid;
  place-items: center;

  .cardBox {
    width: 300px;
    height: 400px;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 10px 0px,
      rgba(0, 0, 0, 0.5) 0px 2px 25px 0px;
  }
  .card {
    position: absolute;
    width: 95%;
    height: 95%;
    background: #000814;
    border-radius: 20px;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #ffffff;
    overflow: hidden;
    padding: 20px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.5) 0px 18px 36px -18px inset;
  }
  .card h2,
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.3rem;
    font-weight: 800;
    pointer-events: none;
    opacity: 0.1;
  }

  span {
    top: 75%;
  }

  .card .content h3 {
    font-size: ${(props) =>
      props.fontSize === "small"
        ? "1rem"
        : props.fontSize === "medium"
        ? "2rem"
        : props.fontSize === "large"
        ? "2.3rem"
        : null};
    padding-bottom: 10px;
  }
  .card .content p {
    font-size: ${(props) =>
      props.fontSize === "small"
        ? "0.8rem"
        : props.fontSize === "medium"
        ? "1rem"
        : props.fontSize === "large"
        ? "1.3rem"
        : null};
    line-height: 25px;
  }
  .card .content {
    transform: translateY(100%);
    opacity: 0;
    transition: 0.3s ease-in-out;
  }

  .card:hover .content {
    transform: translateY(0);
    opacity: 1;
  }

  .cardBox::before {
    content: "";
    position: absolute;
    width: 40%;
    height: 150%;
    background: #40e0d0;
    background: -webkit-linear-gradient(to right, #ff0080, #ff8c00, #40e0d0);
    background: linear-gradient(to right, #ff0080, #ff8c00, #40e0d0);
    animation: glowing01 5s linear infinite;
    transform-origin: center;
    animation: glowing 5s linear infinite;
  }

  @keyframes glowing {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
