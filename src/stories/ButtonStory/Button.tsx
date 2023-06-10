import React from "react";
import { ButtonGroup, PrimaryButton, Title } from "./style";

interface ButtonProps {
  backgroundColor?: string;
  animationType1?:
    | "none"
    | "fill"
    | "pulse"
    | "close"
    | "raise"
    | "up"
    | "slide"
    | "offset";
  label: string;
  onClick?: () => void;
  Switch?: "Type1" | "Type2";
}

export const Button = ({
  backgroundColor,
  label,
  animationType1,
  Switch,
}: ButtonProps) => {
  return (
    <div>
      {Switch === "Type1" && (
        <PrimaryButton animation={animationType1} style={{ backgroundColor }}>
          {label}
        </PrimaryButton>
      )}
      {Switch === "Type2" && (
        <>
          <ButtonGroup>
            <Title>Winona</Title>
            <div className="box bg-1">
              <button
                className="button button--winona button--border-thin button--round-s"
                data-text={label}
              >
                <span>{label}</span>
              </button>
            </div>
            <Title>Ujarak</Title>
            <div className="box bg-2">
              <button className="button button--ujarak button--border-medium button--round-s button--text-thick">
                {label}
              </button>
            </div>{" "}
            <Title>Tamaya</Title>
            <div className="box bg-3">
              <button
                className="button button--tamaya button--round-s button--text-thick button--border-thin"
                data-text={label}
              >
                <span>{label}</span>
              </button>
            </div>
            <Title>Wayra</Title>
            <div className="box bg-1">
              <button className="button button--wayra button--border-thick button--text-upper button--size-s">
                {label}
              </button>
            </div>
            <Title>Rayen</Title>
            <div className="box bg-2">
              <button
                className="button button--rayen button--border-medium button--text-thin button--size-l button--inverted"
                data-text={label}
              >
                <span> {label}</span>
              </button>
            </div>
            <Title>Pipaluk</Title>
            <div className="box bg-3">
              <button className="button button--pipaluk button--inverted  button--round-s button--text-thick">
                {label}
              </button>
            </div>
            <Title>Moema</Title>
            <div className="box bg-1">
              <button className="button button--moema button--text-thick button--text-upper button--size-s">
                {label}
              </button>
            </div>
            <Title>Isi</Title>
            <div className="box bg-2">
              <button className="button button--isi button--border-thin button--size-s button--round-s">
                <i className="button__icon icon icon-box"></i>
                <span> {label}</span>
              </button>
            </div>
            <Title>Aylen</Title>
            <div className="box bg-3">
              <button className="button button--aylen button--border-thick button--inverted button--text-upper button--size-s">
                {label}
              </button>
            </div>
            <Title>Wapasha</Title>
            <div className="box bg-1">
              <button className="button button--wapasha button--round-s">
                {label}
              </button>
            </div>
            <Title>Nina</Title>
            <div className="box bg-2">
              <button
                className="button button--nina button--round-l button--text-thick button--inverted"
                data-text={label}
              >
                <span>F</span>
                <span>i</span>
                <span>l</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
              </button>
            </div>
            <Title>Nanuk</Title>
            <div className="box bg-3">
              <button className="button button--nanuk button--border-thin button--round-s">
                <span>F</span>
                <span>i</span>
                <span>l</span>
                <span>t</span>
                <span>e</span>
                <span>r</span>
              </button>
            </div>
            <Title>Nuka</Title>
            <div className="box bg-1">
              <button className="button button--nuka button--round-s button--text-thick">
                {label}
              </button>
            </div>
            <Title>Antiman</Title>
            <div className="box bg-2">
              <button className="button button--antiman button--text-thick button--text-upper button--size-s button--inverted-alt button--round-s button--border-thick">
                <span> {label}</span>
              </button>
            </div>
            <Title>Itzel</Title>
            <div className="box bg-3">
              <button className="button button--itzel button--size-l button--border-thin button--text-thin">
                <span> {label}</span>
              </button>
            </div>
            <Title>Naira</Title>
            <div className="box bg-1">
              <button className="button button--naira button--round-s button--border-thin">
                <span> {label}</span>
              </button>
            </div>
            <Title>Quidel</Title>
            <div className="box bg-2">
              <button className="button button--quidel button--inverted button--text-thick button--text-upper button--size-s">
                <span> {label}</span>
              </button>
            </div>
            <Title>Sacnite</Title>
            <div className="box bg-3">
              <button className="button button--sacnite button--round-s button--inverted">
                <span>{label}</span>
              </button>
            </div>
            <Title>Shikoba</Title>
            <div className="box bg-1">
              <button className="button button--shikoba button--round-s button--border-thin">
                <span> {label}</span>
              </button>
            </div>
          </ButtonGroup>
        </>
      )}
    </div>
  );
};
