/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Submit, Loader, Swatch, Cat, Truck } from "./style";

interface ButtonProps {
  Switch?: "Type1" | "Type2" | "Type3" | "Type4" | "Type5";
}

export const Animation = ({ Switch }: ButtonProps) => {
  return (
    <>
      {Switch === "Type1" && (
        <Submit>
          <div className="cont">
            <button className="btn">
              <span>Submit</span>
              <img
                src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
                height="62"
                width="62"
              />
            </button>
          </div>
        </Submit>
      )}
      {Switch === "Type2" && (
        <Loader>
          <div className="loader">
            <span className="loader__element"></span>
            <span className="loader__element"></span>
            <span className="loader__element"></span>
          </div>
        </Loader>
      )}
      {Switch === "Type3" && (
        <Swatch>
          <div className="swatch">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Swatch>
      )}
      {Switch === "Type4" && (
        <Cat>
          <div className="cat">
            <div className="ear ear--left"></div>
            <div className="ear ear--right"></div>
            <div className="face">
              <div className="eye eye--left">
                <div className="eye-pupil"></div>
              </div>
              <div className="eye eye--right">
                <div className="eye-pupil"></div>
              </div>
              <div className="muzzle"></div>
            </div>
          </div>
        </Cat>
      )}
      {Switch === "Type5" && (
        <Truck>
          <div className="loop-wrapper">
            <div className="mountain"></div>
            <div className="hill"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="tree"></div>
            <div className="rock"></div>
            <div className="truck"></div>
            <div className="wheels"></div>
          </div>{" "}
        </Truck>
      )}
    </>
  );
};
