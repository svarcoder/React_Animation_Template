import styled from 'styled-components';
interface IProps {
  disabled?: boolean | undefined;

  toggleId?: string;
}

export const ToggleButtonWrap = styled.div`
  position: relative;
  width: 200px;
  height: 140px;
  box-sizing: border-box;
`;

export const ButtonCover = styled.div<IProps>`
  height: 100px;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 10px 20px -8px #c5d6d6;
  border-radius: 4px;

  .knobs,
  .layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .toggleButton {
    position: relative;
    top: 30%;
    width: 74px;
    height: 36px;
    margin: -20px auto 0 auto;
    overflow: hidden;

    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disabled ? 'none' : null)};
  }

  .toggleButton.r,
  .toggleButton.r .layer {
    border-radius: 100px;
  }

  .toggleButton.b2 {
    border-radius: 2px;
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .knobs {
    z-index: 2;
  }

  .layer {
    width: 100%;
    background-color: #ebf7fc;
    transition: 0.3s ease all;
    z-index: 1;
  }

  /* Button 1 */
  #toggleButton-1 .knobs:before {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #toggleButton-1 .checkbox:checked + .knobs:before {
    content: 'NO';
    left: 42px;
    background-color: #f44336;
  }

  #toggleButton-1 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  #toggleButton-1 .knobs,
  #toggleButton-1 .knobs:before,
  #toggleButton-1 .layer {
    transition: 0.3s ease all;
  }

  /* Button 2 */
  #toggleButton-2 .knobs:before,
  #toggleButton-2 .knobs:after {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease all;
  }

  #toggleButton-2 .knobs:before {
    content: 'YES';
  }

  #toggleButton-2 .knobs:after {
    content: 'NO';
  }

  #toggleButton-2 .knobs:after {
    right: -30px;
    left: auto;
    background-color: #f44336;
  }

  #toggleButton-2 .checkbox:checked + .knobs:before {
    left: -30px;
  }

  #toggleButton-2 .checkbox:checked + .knobs:after {
    right: 4px;
  }

  #toggleButton-2 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 3 */
  #toggleButton-3 .knobs:before {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  #toggleButton-3 .checkbox:active + .knobs:before {
    width: 46px;
    border-radius: 100px;
  }

  #toggleButton-3 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  #toggleButton-3 .checkbox:checked + .knobs:before {
    content: 'NO';
    left: 42px;
    background-color: #f44336;
  }

  #toggleButton-3 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 4 */
  #toggleButton-4 .knobs:before,
  #toggleButton-4 .knobs:after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #toggleButton-4 .knobs:before {
    content: 'YES';
  }

  #toggleButton-4 .knobs:after {
    content: 'NO';
  }

  #toggleButton-4 .knobs:after {
    top: -30px;
    right: 4px;
    left: auto;
    background-color: #f44336;
  }

  #toggleButton-4 .checkbox:checked + .knobs:before {
    top: -30px;
  }

  #toggleButton-4 .checkbox:checked + .knobs:after {
    top: 4px;
  }

  #toggleButton-4 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 5 */
  #toggleButton-5 {
    perspective: 60px;
    overflow: visible;
  }

  #toggleButton-5 .knobs:before,
  #toggleButton-5 .knobs span {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #toggleButton-5 .knobs:before {
    background-color: #03a9f4;
  }

  #toggleButton-5 .knobs span:before {
    content: 'YES';
  }

  #toggleButton-5 .knobs:before,
  #toggleButton-5 .layer {
    transform: rotateY(0);
    transform-origin: center;
  }

  #toggleButton-5 .checkbox:checked + .knobs:before,
  #toggleButton-5 .checkbox:checked + .knobs span {
    left: 42px;
  }

  #toggleButton-5 .checkbox:checked + .knobs:before {
    transform: rotateY(180deg);
    background-color: #f44336;
  }

  #toggleButton-5 .checkbox:checked + .knobs span:before {
    content: 'NO';
    left: 42px;
  }

  #toggleButton-5 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
    transform: rotateY(-180deg);
  }

  #toggleButton-5 .knobs,
  #toggleButton-5 .knobs:before,
  #toggleButton-5 .layer {
    transition: 0.3s ease all;
  }

  /* Button 6 */
  #toggleButton-6 {
    overflow: visible;
  }

  #toggleButton-6 .knobs:before {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 50%;
  }

  #toggleButton-6 .layer,
  #toggleButton-6 .knobs,
  #toggleButton-6 .knobs:before {
    transform: rotateZ(0);
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #toggleButton-6 .checkbox:checked + .knobs {
    transform: rotateZ(-180deg);
  }

  #toggleButton-6 .checkbox:checked + .knobs:before {
    content: 'NO';
    background-color: #f44336;
    transform: rotateZ(180deg);
  }

  #toggleButton-6 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
    transform: rotateZ(180deg);
  }

  /* Button 7 */
  #toggleButton-7 .knobs:before,
  #toggleButton-7 .knobs:after,
  #toggleButton-7 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
  }

  #toggleButton-7 .knobs:before {
    content: 'YES';
    left: 4px;
    color: #fff;
    opacity: 1;
  }

  #toggleButton-7 .knobs:after {
    content: 'NO';
    left: 42px;
    color: #fff;
    width: 20px;
    text-align: left;
    padding: 9px 7px;
    background-color: #f44336;
    opacity: 0;
  }

  #toggleButton-7 .knobs:before,
  #toggleButton-7 .knobs:after {
    transition: 0.3s ease all;
    z-index: 2;
  }

  #toggleButton-7 .knobs span {
    left: 4px;
    background-color: #03a9f4;
    transition: 0.2s ease all;
    z-index: 1;
  }

  #toggleButton-7 .checkbox:checked + .knobs:before {
    opacity: 0;
  }

  #toggleButton-7 .checkbox:checked + .knobs:after {
    opacity: 1;
  }

  #toggleButton-7 .checkbox:checked + .knobs span {
    top: 14px;
    left: 76px;
    width: 2px;
    height: 2px;
    padding: 3px;
    background-color: #fff;
    z-index: 3;
  }

  #toggleButton-7 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 8 */
  #toggleButton-8 .knobs:before,
  #toggleButton-8 .knobs:after,
  #toggleButton-8 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.3s ease all;
  }

  #toggleButton-8 .knobs:before {
    content: 'YES';
    color: #fff;
    left: 4px;
  }

  #toggleButton-8 .knobs:after {
    content: 'NO';
    left: 42px;
    color: #fff;
    background-color: #f44336;
    opacity: 0;
  }

  #toggleButton-8 .knobs:before,
  #toggleButton-8 .knobs:after {
    z-index: 2;
  }

  #toggleButton-8 .knobs span {
    left: 4px;
    background-color: #03a9f4;
    z-index: 1;
  }

  #toggleButton-8 .checkbox:checked + .knobs:before {
    opacity: 0;
  }

  #toggleButton-8 .checkbox:checked + .knobs:after {
    opacity: 1;
  }

  #toggleButton-8 .checkbox:checked + .knobs span {
    background-color: #fcebeb;
    transform: scale(4);
  }

  /* Button 9 */
  #toggleButton-9 .knobs:before,
  #toggleButton-9 .knobs:after,
  #toggleButton-9 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #toggleButton-9 .knobs:before {
    content: 'YES';
    left: 4px;
  }

  #toggleButton-9 .knobs:after {
    content: 'NO';
    right: -24px;
  }

  #toggleButton-9 .knobs:before,
  #toggleButton-9 .knobs:after {
    color: #fff;
    z-index: 2;
  }

  #toggleButton-9 .knobs span {
    left: 4px;
    background-color: #03a9f4;
    z-index: 1;
  }

  #toggleButton-9 .checkbox:checked + .knobs:before {
    left: -24px;
  }

  #toggleButton-9 .checkbox:checked + .knobs:after {
    right: 4px;
  }

  #toggleButton-9 .checkbox:checked + .knobs span {
    left: 42px;
    background-color: #f44336;
  }

  #toggleButton-9 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 10 */
  #toggleButton-10 .knobs:before,
  #toggleButton-10 .knobs:after,
  #toggleButton-10 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  #toggleButton-10 .knobs:before {
    content: 'YES';
    left: 4px;
    background-color: #03a9f4;
    color: white;
  }

  #toggleButton-10 .knobs:after {
    content: 'NO';
    right: 4px;
    color: #4e4e4e;
  }

  #toggleButton-10 .knobs span {
    display: inline-block;
    left: 4px;
    color: #fff;
    z-index: 1;
  }

  #toggleButton-10 .checkbox:checked + .knobs span {
    color: #4e4e4e;
    left: 42px;
  }

  #toggleButton-10 .checkbox:checked + .knobs:before {
    color: #4e4e4e;
    background-color: transparent;
  }

  #toggleButton-10 .checkbox:checked + .knobs:after {
    color: #fff;
    background-color: #f44336;
  }

  #toggleButton-10 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 11 */
  #toggleButton-11 {
    overflow: visible;
  }

  #toggleButton-11 .knobs {
    perspective: 70px;
  }

  #toggleButton-11 .knobs:before,
  #toggleButton-11 .knobs:after,
  #toggleButton-11 .knobs span {
    position: absolute;
    top: 4px;
    border-radius: 2px;
  }

  #toggleButton-11 .knobs:before,
  #toggleButton-11 .knobs:after {
    width: 20px;
    height: 10px;
    color: #4e4e4e;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
  }

  #toggleButton-11 .knobs:before {
    content: 'YES';
    left: 4px;
  }

  #toggleButton-11 .knobs:after {
    content: 'NO';
    right: 4px;
  }

  #toggleButton-11 .knobs span {
    right: 4px;
    width: 33px;
    height: 28px;
    background-color: #03a9f4;
    transform: rotateY(0);
    transform-origin: 0% 50%;
    transition: 0.6s ease all;
    z-index: 1;
  }

  #toggleButton-11 .checkbox:checked + .knobs span {
    transform: rotateY(-180deg);
    background-color: #f44336;
  }

  #toggleButton-11 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 12 */
  #toggleButton-12 .knobs:before,
  #toggleButton-12 .knobs:after,
  #toggleButton-12 .knobs span,
  #toggleButton-12 .knobs span:before,
  #toggleButton-12 .knobs span:after {
    position: absolute;
    top: 4px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  #toggleButton-12 .knobs:before {
    content: 'YES';
    left: 4px;
  }

  #toggleButton-12 .knobs:after {
    content: 'NO';
    right: 4px;
  }

  #toggleButton-12 .knobs:before,
  #toggleButton-12 .knobs:after {
    width: 27px;
    height: 10px;
    color: #4e4e4e;
    padding: 9px 3px;
    z-index: 1;
  }

  #toggleButton-12 .knobs span {
    display: inline-block;
    z-index: 2;
  }

  #toggleButton-12 .knobs span,
  #toggleButton-12 .knobs span:before,
  #toggleButton-12 .knobs span:after {
    width: 20px;
    height: 10px;
    padding: 9px 4px;
  }

  #toggleButton-12 .knobs span:before,
  #toggleButton-12 .knobs span:after {
    content: '';
    top: 0;
  }

  #toggleButton-12 .knobs span:before {
    left: -30px;
    background-color: #f44336;
  }

  #toggleButton-12 .knobs span:after {
    right: -42px;
    background-color: #03a9f4;
  }

  #toggleButton-12 .checkbox:checked + .knobs span:before {
    left: 4px;
  }

  #toggleButton-12 .checkbox:checked + .knobs span:after {
    right: -74px;
  }

  #toggleButton-12 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 13 */
  #toggleButton-13 .knobs:before,
  #toggleButton-13 .knobs:after,
  #toggleButton-13 .knobs span {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  #toggleButton-13 .knobs:before,
  #toggleButton-13 .knobs:after {
    color: #4e4e4e;
    z-index: 1;
  }

  #toggleButton-13 .knobs:before {
    content: 'YES';
    left: 4px;
  }

  #toggleButton-13 .knobs:after {
    content: 'NO';
    right: 4px;
  }

  #toggleButton-13 .knobs span {
    width: 20px;
    left: 37px;
    background-color: #03a9f4;
    z-index: 2;
  }

  #toggleButton-13 .checkbox:checked + .knobs span {
    left: 4px;
    background-color: #f44336;
  }

  #toggleButton-13 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 14 */
  #toggleButton-14 .knobs:before,
  #toggleButton-14 .knobs:after,
  #toggleButton-14 .knobs span:before,
  #toggleButton-14 .knobs span:after {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
  }

  #toggleButton-14 .knobs:before,
  #toggleButton-14 .knobs:after {
    color: #4e4e4e;
    z-index: 1;
  }

  #toggleButton-14 .knobs:before {
    content: 'YES';
    left: 4px;
  }

  #toggleButton-14 .knobs:after {
    content: 'NO';
    right: 4px;
  }

  #toggleButton-14 .knobs span {
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }

  #toggleButton-14 .knobs span:before {
    left: 4px;
    top: -30px;
    background-color: #f44336;
  }

  #toggleButton-14 .knobs span:after {
    top: 4px;
    left: 39px;
    background-color: #03a9f4;
  }

  #toggleButton-14 .knobs span:before,
  #toggleButton-14 .knobs span:after {
    content: '';
    width: 20px;
    z-index: 2;
  }

  #toggleButton-14 .checkbox:checked + .knobs span:before {
    top: 4px;
  }

  #toggleButton-14 .checkbox:checked + .knobs span:after {
    top: -30px;
  }

  #toggleButton-14 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 15 */
  #toggleButton-15 .knobs:before,
  #toggleButton-15 .knobs:after {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    opacity: 1;
    border-radius: 2px;
    transform: scale(1);
    transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
  }

  #toggleButton-15 .knobs:before {
    content: 'YES';
    left: 4px;
    background-color: #03a9f4;
  }

  #toggleButton-15 .knobs:after {
    content: 'NO';
    right: 4px;
    opacity: 0;
    transform: scale(4);
    background-color: #f44336;
  }

  #toggleButton-15 .checkbox:checked + .knobs:before {
    opacity: 0;
    transform: scale(4);
  }

  #toggleButton-15 .checkbox:checked + .knobs:after {
    opacity: 1;
    transform: scale(1);
  }

  #toggleButton-15 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 16 */
  #toggleButton-16 .knobs:before {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    background-color: #03a9f4;
    border-radius: 2px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }

  #toggleButton-16 .checkbox:active + .knobs:before {
    width: 46px;
  }

  #toggleButton-16 .checkbox:checked:active + .knobs:before {
    margin-left: -26px;
  }

  #toggleButton-16 .checkbox:checked + .knobs:before {
    content: 'NO';
    left: 42px;
    background-color: #f44336;
  }

  #toggleButton-16 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 17 */
  #toggleButton-17 .knobs:before,
  #toggleButton-17 .knobs span {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 20px;
    height: 10px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
  }

  #toggleButton-17 .knobs:before {
    transition: 0.3s ease all, left 0.5s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    z-index: 2;
  }

  #toggleButton-17 .knobs span {
    background-color: #03a9f4;
    border-radius: 2px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    z-index: 1;
  }

  #toggleButton-17 .checkbox:checked + .knobs:before {
    content: 'NO';
    left: 42px;
  }

  #toggleButton-17 .checkbox:checked + .knobs span {
    left: 42px;
    background-color: #f44336;
  }

  #toggleButton-17 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }

  /* Button 18 */
  #toggleButton-18 .knobs:before,
  #toggleButton-18 .knobs span {
    content: 'YES';
    position: absolute;
    top: 4px;
    left: 4px;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    background-color: #03a9f4;
    border-radius: 2px;
  }

  #toggleButton-18 .knobs:before {
    top: 50%;
    left: 8px;
    width: 20px;
    height: 10px;
    margin-top: -5px;
    background-color: transparent;
    z-index: 2;
  }

  #toggleButton-18 .knobs span {
    width: 20px;
    height: 10px;
    padding: 9px 4px;
    transition: 0.3s ease all, left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
    z-index: 1;
  }

  #toggleButton-18 .checkbox:active + .knobs:before {
    left: 10px;
    width: 46px;
    height: 4px;
    color: transparent;
    margin-top: -2px;
    background-color: #0095d8;
    transition: 0.3s ease all;
    overflow: hidden;
  }

  #toggleButton-18 .checkbox:active + .knobs span {
    width: 58px;
  }

  #toggleButton-18 .checkbox:checked:active + .knobs:before {
    left: auto;
    right: 10px;
    background-color: #d80000;
  }

  #toggleButton-18 .checkbox:checked:active + .knobs span {
    margin-left: -38px;
  }

  #toggleButton-18 .checkbox:checked + .knobs:before {
    content: 'NO';
    left: 46px;
  }

  #toggleButton-18 .checkbox:checked + .knobs span {
    left: 42px;
    background-color: #f44336;
  }

  #toggleButton-18 .checkbox:checked ~ .layer {
    background-color: #fcebeb;
  }
`;
