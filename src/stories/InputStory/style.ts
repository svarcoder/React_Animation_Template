import styled from "styled-components";

export const InputOne = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0px 2px 1px 0px #ddd;
  box-sizing: border-box;
  height: 300px;
  left: 50%;
  margin: 150px 0px 0 -150px;
  position: absolute;
  top: 10px;
  width: 300px;
  box-shadow: 0 20px 60px 0 rgba(241, 149, 155);

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #ccc;
    color: #555;
    box-sizing: border-box;
    font-family: "Arvo";
    font-size: 18px;
    height: 50px;
    left: 50%;
    margin: -25px 0 0 -100px;
    padding: 10px 0px;
    position: relative;
    top: 50%;
    width: 200px;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #aaa;
  }

  input:focus::-webkit-input-placeholder {
    color: dodgerblue;
  }

  .input:focus + .underline {
    transform: scale(1);
  }

  .underline {
    background-color: dodgerblue;
    display: inline-block;
    height: 2px;
    left: 50px;
    margin-top: -4px;
    position: absolute;
    top: 185px;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
    -webkit-transition: all 0.5s linear;
    transition: all 0.5s linear;
    width: 202px;
  }
`;

export const InputTwo = styled.div`
  background: #e62878;
  height: 100vh;

  .search {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -16rem;
    margin-top: -3rem;
    width: 32rem;
    height: 6rem;
  }
  .search__border {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6rem;
    height: 100%;
    border: 0.6rem solid #fff;
    border-radius: 10rem;
    transform: translate(-50%, -50%);
    transition: width 0.4s 0.4s;
  }
  #trigger:checked ~ .search__border {
    transition: width 0.4s 0.2s;
    width: 100%;
  }
  #trigger:checked ~ .search__border:after {
    width: 0;
    transition: width 0.2s cubic-bezier(0.42, -0.7, 0.62, 1.25);
  }
  .search__border:after {
    content: "";
    position: absolute;
    bottom: -1.6rem;
    right: -1.6rem;
    width: 3rem;
    height: 0.6rem;
    background: #fff;
    border-radius: 0.6rem;
    transform-origin: 100% 50%;
    transform: rotate(225deg) translateX(3rem);
    transition: width 0.2s 0.8s;
  }
  .search__input {
    position: relative;
    width: 26rem;
    height: 6rem;
    padding: 0.9rem 0 0.9rem 2.4rem;
    background: transparent;
    outline: none;
    border: none;
    font-size: 2.4rem;
    color: #fff;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s;
  }
  #trigger:checked ~ .search__input {
    opacity: 1;
    z-index: auto;
    transition: opacity 0.2s 0.6s;
  }
  .search__checkbox {
    position: absolute;
    top: -9999px;
    left: -9999px;
    opacity: 0;
    z-index: -10;
  }
  .search__label-init {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 13.12rem;
    width: 6.8rem;
    height: 6.4rem;
    cursor: pointer;
  }
  #trigger:checked ~ .search__label-init {
    transform: scale(0);
  }
  .search__label-active {
    z-index: 3;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    transform: scale(0);
  }
  #trigger:checked ~ .search__label-active {
    tranition: transform 0 0.6s;
    transform: scale(1);
  }
  .search__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    z-index: -1;
  }
  #trigger:checked ~ .search__close {
    z-index: auto;
  }
  #trigger:checked ~ .search__close:before {
    transform: rotate(-45deg);
    opacity: 1;
    transition: transform 0.2s 0.6s cubic-bezier(0.73, 0.14, 0.4, 1.58),
      opacity 0.1s 0.6s;
  }
  #trigger:checked ~ .search__close:after {
    transform: rotate(45deg);
    opacity: 1;
    transition: transform 0.2s 0.8s cubic-bezier(0.73, 0.14, 0.4, 1.58),
      opacity 0.1s 0.8s;
  }
  .search__close:before,
  .search__close:after {
    content: " ";
    position: absolute;
    top: 1.2rem;
    left: 0;
    width: 100%;
    height: 0.6rem;
    background: #fff;
    border-radius: 0.5rem;
    opacity: 0;
  }
  .search__close:before {
    transform: rotate(-45deg) translateX(2rem);
    transition: transform 0.2s, opacity 0.1s 0.1s;
  }
  .search__close:after {
    transform: rotate(45deg) translateX(2rem);
    transition: transform 0.2s 0.2s, opacity 0.1s 0.3s;
  }
`;

export const InputThree = styled.div`
  position: relative;
  margin: 100px 0 0 250px;
  box-shadow: 0 20px 60px 0 rgba(191, 191, 255);
  width: 600px;

  .lz-label {
    position: absolute;
    left: 45%;
    top: 10px;
    font-size: 18px;
    font-weight: 200;
    color: #cecece;
    transition: all 0.5s ease;
    pointer-events: none;
  }

  input[type="text"]:focus ~ .lz-label {
    display: block;
    color: Orange;
    top: -20px;
    font-size: 14px;
  }

  textarea,
  input {
    outline: none;
    border: 0;
    border-bottom: 1px solid #cecece;
    height: 45px;
    width: 100%;
  }
`;

export const InputFour = styled.div`
  width: 50%;
  height: 50px;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  input {
    width: 100%;
    height: 100%;
    color: #5fa8d3;
    padding-top: 25px;
    border: none;
    outline: none;
  }
  label {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 25px;
    left: 0%;
    pointer-events: none;
    border-bottom: 1px solid black;
  }
  label::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid #5fa8d3;
    bottom: -1px;
    left: 0px;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }
  .content-name {
    position: absolute;
    bottom: 5px;
    left: 0px;
    transition: all 0.3s ease;
  }
  input:focus + .label-name .content-name,
  input:valid + .label-name .content-name {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }
  input:focus + .label-name::after,
  input:valid + .label-name::after {
    transform: translateX(0%);
  }
`;

export const InputFive = styled.div`
  .label-float {
    position: relative;
    padding-top: 13px;
  }

  .label-float input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    min-width: 250px;
    padding: 15px 20px;
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }

  .label-float input:focus {
    border: 2px solid #3951b2;
  }

  .label-float input::placeholder {
    color: transparent;
  }

  .label-float label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 8px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: white;
    padding: 5px;
    box-sizing: border-box;
    color:#3951b2;
  }

  .label-float input:required:invalid + label {
    color: red;
  }
  .label-float input:focus:required:invalid {
    border: 2px solid red;
  }
  .label-float input:required:invalid + label:before {
    content: "*";
  }
  .label-float input:focus + label,
  .label-float input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: #3951b2;
  }
`;

export const InputSix = styled.div`
  form {
    width: 500px;
    margin: 50px 100px;
  }

  .form-group {
    position: relative;
    margin-bottom: 45px;
  }

  input {
    display: block;
    width: 300px;
    font-size: 14pt;
    padding: 10px;
    border: none;
    border-bottom: 1px solid #ccc;
  }

  input:focus {
    outline: none;
  }

  label {
    position: absolute;
    top: 10px;
    left: 5px;
    color: #999;
    font-size: 14pt;
    font-weight: normal;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 10pt;
    color: #5264ae;
  }

  .bar {
    display: block;
    position: relative;
    width: 320px;
  }

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: all 0.2s ease;
  }

  .bar:before {
    left: 50%;
  }

  .bar:after {
    right: 50%;
  }

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }
`;
