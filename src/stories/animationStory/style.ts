import styled from "styled-components";

export const Submit = styled.div`
  @-webkit-keyframes extend {
    0% {
      width: 600px;
      height: 200px;
      border-radius: 100px;
    }
    10% {
      width: 610px;
      height: 210px;
      background: #fff;
      margin-left: -5px;
      margin-top: -5px;
    }
    20% {
      width: 600px;
      height: 200px;
      background: #6fb07f;
      margin-left: 0px;
      margin-top: 0px;
    }
    100% {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin-left: 190px;
      background: #6fb07f;
    }
  }
  @keyframes extend {
    0% {
      width: 600px;
      height: 200px;
      border-radius: 100px;
    }
    10% {
      width: 610px;
      height: 210px;
      background: #fff;
      margin-left: -5px;
      margin-top: -5px;
    }
    20% {
      width: 600px;
      height: 200px;
      background: #6fb07f;
      margin-left: 0px;
      margin-top: 0px;
    }
    100% {
      width: 200px;
      height: 200px;
      border-radius: 100px;
      margin-left: 190px;
      background: #6fb07f;
    }
  }

  @-webkit-keyframes disappear {
    0% {
      opacity: 1;
    }
    20% {
      color: #fff;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes disappear {
    0% {
      opacity: 1;
    }
    20% {
      color: #fff;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes appear {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  html {
    background: #fff;
  }

  input,
  button,
  submit {
    border: none;
  }

  .cont {
    position: absolute;
    width: 610px;
    height: 10px;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -300px;
  }

  button {
    border-width: 1px;
    width: 600px;
    height: 200px;
    /*border-radius*/
    border-radius: 100px;
    background: #fff;
    position: absolute;
    border: 5px solid #6fb07f;
  }

  button > span {
    font-size: 48px;
    color: #6fb07f;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
    filter: alpha(opacity=0);
    opacity: 0;
  }

  button:focus {
    /*animation*/
    -webkit-animation: extend 1s ease-in-out;
    -ms-animation: extend 1s ease-in-out;
    animation: extend 1s ease-in-out;
    -webkit-animation-fill-mode: forwards;
    /* Chrome, Safari, Opera */
    animation-fill-mode: forwards;
  }

  button:focus > span {
    /*animation*/
    -webkit-animation: disappear 1s ease-in-out;
    -ms-animation: disappear 1s ease-in-out;
    animation: disappear 1s ease-in-out;
    -webkit-animation-fill-mode: forwards;
    /* Chrome, Safari, Opera */
    animation-fill-mode: forwards;
  }

  button:focus > img {
    /*animation*/
    -webkit-animation: appear 1s ease-in-out;
    -ms-animation: appear 1s ease-in-out;
    animation: appear 1s ease-in-out;
    -webkit-animation-fill-mode: forwards;
    /* Chrome, Safari, Opera */
    animation-fill-mode: forwards;
  }
`;

export const Loader = styled.div`
  .loader {
    background-color: #ecf0f1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    z-index: 100000;
  }

  .loader__element {
    border-radius: 100%;
    border: 5px solid #555;
    margin: calc(5px * 2);
  }

  .loader__element:nth-child(1) {
    animation: preloader 0.6s ease-in-out alternate infinite;
  }
  .loader__element:nth-child(2) {
    animation: preloader 0.6s ease-in-out alternate 0.2s infinite;
  }

  .loader__element:nth-child(3) {
    animation: preloader 0.6s ease-in-out alternate 0.4s infinite;
  }

  @keyframes preloader {
    100% {
      transform: scale(2);
    }
  }
`;

export const Swatch = styled.div`
  .swatch {
    display: block;
    text-align: center;
    position: relative;
    margin: 100px;
  }
  .swatch div {
    width: 70px;
    height: 225px;
    position: absolute;
    top: 0px;
    border-radius: 5px;
    border-top: solid 2px rgba(0, 0, 0, 0.2);
    border-left: solid 3px rgba(255, 255, 255, 0.2);
    border-bottom: solid 3px rgba(0, 0, 0, 0.2);
    text-align: center;
    box-sizing: border-box;
    transform-origin: center 90%;
    display: inline-block;
    backface-visibility: hidden;
    margin-left: -35px;
    transform: rotate(0deg);
  }
  .swatch div:before {
    width: 16px;
    height: 16px;
    content: "";
    background-color: #ffffff;
    display: inline-block;
    border-radius: 8px;
    bottom: 10px;
    position: absolute;
    margin-left: -8px;
  }
  .swatch div:nth-child(1) {
    background-color: #815a8f;
    animation: swatch-purple-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  .swatch div:nth-child(2) {
    background-color: #6730ec;
    animation: swatch-blue-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  .swatch div:nth-child(3) {
    background-color: #9ed763;
    animation: swatch-green-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  .swatch div:nth-child(4) {
    background-color: #fbd400;
    animation: swatch-yellow-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  .swatch div:nth-child(5) {
    background-color: #ff9000;
    animation: swatch-orange-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  .swatch div:nth-child(6) {
    background-color: #f73f52;
    animation: swatch-red-motion 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  @keyframes swatch-purple-motion {
    0% {
      transform: rotate(0deg);
    }
    30%,
    70% {
      transform: rotate(-65deg);
    }
    90%,
    10% {
      transform: rotate(0deg);
    }
  }
  @keyframes swatch-blue-motion {
    0% {
      transform: rotate(0deg);
    }
    30%,
    70% {
      transform: rotate(-40deg);
    }
    90%,
    10% {
      transform: rotate(0deg);
    }
  }
  @keyframes swatch-green-motion {
    0% {
      transform: rotate(0deg);
    }
    30%,
    70% {
      transform: rotate(-15deg);
    }
    90%,
    10% {
      transform: rotate(0deg);
    }
  }
  @keyframes swatch-yellow-motion {
    0% {
      transform: rotate(0deg);
    }
    30%,
    70% {
      transform: rotate(15deg);
    }
    90%,
    10% {
      transform: rotate(0deg);
    }
  }
  @keyframes swatch-orange-motion {
    0% {
      transform: rotate(0deg);
    }
    30%,
    70% {
      transform: rotate(40deg);
    }
    90%,
    10% {
      transform: rotate(0deg);
    }
  }
  @keyframes swatch-red-motion {
    0% {
      transform: rotate(0deg);
    }
    30%,
    70% {
      transform: rotate(65deg);
    }
    90%,
    10% {
      transform: rotate(0deg);
    }
  }
`;

export const Cat = styled.div`
  background: black;
  height: 200px;
  padding: 10%;
  .cat {
    position: relative;
    height: 170px;
    width: 192.1px;
  }

  .ear {
    position: absolute;
    top: -30%;
    height: 60%;
    width: 25%;
    background: #fff;
  }
  .ear::before,
  .ear::after {
    content: "";
    position: absolute;
    bottom: 24%;
    height: 10%;
    width: 5%;
    border-radius: 50%;
    background: #161616;
  }
  .ear::after {
    transform-origin: 50% 100%;
  }

  .ear--left {
    left: -7%;
    border-radius: 70% 30% 0% 0%/100% 100% 0% 0%;
    transform: rotate(-15deg);
  }
  .ear--left::before,
  .ear--left::after {
    right: 10%;
  }
  .ear--left::after {
    transform: rotate(-45deg);
  }

  .ear--right {
    right: -7%;
    border-radius: 30% 70% 0% 0%/100% 100% 0% 0%;
    transform: rotate(15deg);
  }
  .ear--right::before,
  .ear--right::after {
    left: 10%;
  }
  .ear--right::after {
    transform: rotate(45deg);
  }

  .face {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #161616;
    border-radius: 50%;
  }

  .eye {
    position: absolute;
    top: 35%;
    height: 30%;
    width: 31%;
    background: #fff;
    border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  }
  .eye::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 100%;
    border-radius: 0 0 50% 50%/0 0 40% 40%;
    background: #161616;
    -webkit-animation: blink 4s infinite ease-in;
    animation: blink 4s infinite ease-in;
  }
  @-webkit-keyframes blink {
    0% {
      height: 0;
    }
    90% {
      height: 0;
    }
    92.5% {
      height: 100%;
    }
    95% {
      height: 0;
    }
    97.5% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
  @keyframes blink {
    0% {
      height: 0;
    }
    90% {
      height: 0;
    }
    92.5% {
      height: 100%;
    }
    95% {
      height: 0;
    }
    97.5% {
      height: 100%;
    }
    100% {
      height: 0;
    }
  }
  .eye::before {
    content: "";
    position: absolute;
    top: 60%;
    height: 10%;
    width: 15%;
    background: #fff;
    border-radius: 50%;
  }

  .eye--left {
    left: 0;
  }
  .eye--left::before {
    right: -5%;
  }

  .eye--right {
    right: 0;
  }
  .eye--right::before {
    left: -5%;
  }

  .eye-pupil {
    position: absolute;
    top: 25%;
    height: 50%;
    width: 20%;
    background: #161616;
    border-radius: 50%;
    -webkit-animation: look-around 4s infinite;
    animation: look-around 4s infinite;
  }
  @-webkit-keyframes look-around {
    0% {
      transform: translate(0);
    }
    5% {
      transform: translate(50%, -25%);
    }
    10% {
      transform: translate(50%, -25%);
    }
    15% {
      transform: translate(-100%, -25%);
    }
    20% {
      transform: translate(-100%, -25%);
    }
    25% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  @keyframes look-around {
    0% {
      transform: translate(0);
    }
    5% {
      transform: translate(50%, -25%);
    }
    10% {
      transform: translate(50%, -25%);
    }
    15% {
      transform: translate(-100%, -25%);
    }
    20% {
      transform: translate(-100%, -25%);
    }
    25% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .eye--left .eye-pupil {
    right: 30%;
  }
  .eye--right .eye-pupil {
    left: 30%;
  }
  .eye-pupil::after {
    content: "";
    position: absolute;
    top: 30%;
    right: -5%;
    height: 20%;
    width: 35%;
    border-radius: 50%;
    background: #fff;
  }

  .muzzle {
    position: absolute;
    top: 60%;
    left: 50%;
    height: 6%;
    width: 10%;
    background: #fff;
    transform: translateX(-50%);
    border-radius: 50% 50% 50% 50%/30% 30% 70% 70%;
  }

  /* General page styling */
  html {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #161616;
  }
`;

export const Truck = styled.div`
  background: #009688;
  overflow: hidden;
  height: 400px;
  .loop-wrapper {
    margin: 0 auto;
    position: relative;
    display: block;
    width: 600px;
    height: 250px;
    overflow: hidden;
    border-bottom: 3px solid #fff;
    color: #fff;
  }
  .mountain {
    position: absolute;
    right: -900px;
    bottom: -20px;
    width: 2px;
    height: 2px;
    box-shadow: 0 0 0 50px #4db6ac, 60px 50px 0 70px #4db6ac,
      90px 90px 0 50px #4db6ac, 250px 250px 0 50px #4db6ac,
      290px 320px 0 50px #4db6ac, 320px 400px 0 50px #4db6ac;
    transform: rotate(130deg);
    animation: mtn 20s linear infinite;
  }
  .hill {
    position: absolute;
    right: -900px;
    bottom: -50px;
    width: 400px;
    border-radius: 50%;
    height: 20px;
    box-shadow: 0 0 0 50px #4db6ac, -20px 0 0 20px #4db6ac,
      -90px 0 0 50px #4db6ac, 250px 0 0 50px #4db6ac, 290px 0 0 50px #4db6ac,
      620px 0 0 50px #4db6ac;
    animation: hill 4s 2s linear infinite;
  }
  .tree,
  .tree:nth-child(2),
  .tree:nth-child(3) {
    position: absolute;
    height: 100px;
    width: 35px;
    bottom: 0;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/tree.svg)
      no-repeat;
  }
  .rock {
    margin-top: -17%;
    height: 2%;
    width: 2%;
    bottom: -2px;
    border-radius: 20px;
    position: absolute;
    background: #ddd;
  }
  .truck,
  .wheels {
    transition: all ease;
    width: 85px;
    margin-right: -60px;
    bottom: 0px;
    right: 50%;
    position: absolute;
    background: #eee;
  }
  .truck {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/truck.svg)
      no-repeat;
    background-size: contain;
    height: 60px;
  }
  .truck:before {
    content: " ";
    position: absolute;
    width: 25px;
    box-shadow: -30px 28px 0 1.5px #fff, -35px 18px 0 1.5px #fff;
  }
  .wheels {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130015/wheels.svg)
      no-repeat;
    height: 15px;
    margin-bottom: 0;
  }

  .tree {
    animation: tree 3s 0s linear infinite;
  }
  .tree:nth-child(2) {
    animation: tree2 2s 0.15s linear infinite;
  }
  .tree:nth-child(3) {
    animation: tree3 8s 0.05s linear infinite;
  }
  .rock {
    animation: rock 4s -0.53s linear infinite;
  }
  .truck {
    animation: truck 4s 0.08s ease infinite;
  }
  .wheels {
    animation: truck 4s 0.001s ease infinite;
  }
  .truck:before {
    animation: wind 1.5s 0s ease infinite;
  }

  @keyframes tree {
    0% {
      transform: translate(1350px);
    }
    50% {
    }
    100% {
      transform: translate(-50px);
    }
  }
  @keyframes tree2 {
    0% {
      transform: translate(650px);
    }
    50% {
    }
    100% {
      transform: translate(-50px);
    }
  }
  @keyframes tree3 {
    0% {
      transform: translate(2750px);
    }
    50% {
    }
    100% {
      transform: translate(-50px);
    }
  }

  @keyframes rock {
    0% {
      right: -200px;
    }
    100% {
      right: 2000px;
    }
  }
  @keyframes truck {
    0% {
    }
    6% {
      transform: translateY(0px);
    }
    7% {
      transform: translateY(-6px);
    }
    9% {
      transform: translateY(0px);
    }
    10% {
      transform: translateY(-1px);
    }
    11% {
      transform: translateY(0px);
    }
    100% {
    }
  }
  @keyframes wind {
    0% {
    }
    50% {
      transform: translateY(3px);
    }
    100% {
    }
  }
  @keyframes mtn {
    100% {
      transform: translateX(-2000px) rotate(130deg);
    }
  }
  @keyframes hill {
    100% {
      transform: translateX(-2000px);
    }
  }
`;
