import React from "react";
import {
  InputTwo,
  InputThree,
  InputOne,
  InputFour,
  InputFive,
  InputSix,
} from "./style";

interface InputProps {
  Switch?: "Type1" | "Type2" | "Type3" | "Type4" | "Type5" | "Type6";
}

export const Input = ({ Switch }: InputProps) => {
  return (
    <div>
      {Switch === "Type1" && (
        <>
          <InputOne>
            <input
              type="text"
              className="input"
              placeholder="Please Enter Text"
            />
            <span className="underline"></span>
          </InputOne>{" "}
        </>
      )}
      {Switch === "Type2" && (
        <InputTwo className="body">
          <div className="search">
            <input type="checkbox" id="trigger" className="search__checkbox" />
            <label className="search__label-init" htmlFor="trigger"></label>
            <label className="search__label-active" htmlFor="trigger"></label>
            <div className="search__border"></div>
            <input type="text" className="search__input" />
            <div className="search__close"></div>
          </div>
        </InputTwo>
      )}
      {Switch === "Type3" && (
        <InputThree className="main">
          <input type="text" className="lz-input" placeholder=""></input>
          <label className="lz-label">Username</label>
          <span className="focus-border"></span>
        </InputThree>
      )}
      {Switch === "Type4" && (
        <>
          <InputFour>
            <input type="text" name="name" required autoComplete="off" />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Name</span>
            </label>
          </InputFour>
          <InputFour>
            <input
              type="password"
              name="password"
              required
              autoComplete="off"
            />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Password</span>
            </label>
          </InputFour>{" "}
        </>
      )}
      {Switch === "Type5" && (
        <InputFive>
          <div className="label-float">
            <input type="text" placeholder=" " />
            <label>Phone</label>
          </div>
          <br />
          <div className="label-float">
            <input type="text" placeholder=" " required />
            <label>Username</label>
          </div>
        </InputFive>
      )}
      {Switch === "Type6" && (
        <InputSix>
          <form action="">
            <div className="form-group">
              <input type="text"  required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label >Name</label>
            </div>

            <div className="form-group">
              <input type="text" name="email" required />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label htmlFor="email">Email</label>
            </div>
          </form>
        </InputSix>
      )}
    </div>
  );
};
