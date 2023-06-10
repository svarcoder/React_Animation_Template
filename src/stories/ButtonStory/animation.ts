import { css } from "styled-components";

export const pulseAnimation = (color: string) => css`
  &:hover,
  &:focus {
    animation: pulse 1s;
    box-shadow: 0 0 0 2em transparent;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${color};
    }
  }
`;

export const fillAnimation = (color: string) => css`
  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 2em ${color};
  }
`;

export const closeAnimation = (color: string) => css`
  &:hover,
  &:focus {
    box-shadow: inset -3.5em 0 0 0 ${color}, inset 3.5em 0 0 0 ${color};
  }
`;

export const raiseAnimation = (color: string) => css`
  &:hover,
  &:focus {
    box-shadow: 0 0.5em 0.5em -0.4em ${color};
    transform: translateY(-0.25em);
  }
`;

export const upAnimation = (color: string) => css`
  &:hover,
  &:focus {
    box-shadow: inset 0 -3.25em 0 0 ${color};
  }
`;

export const slideAnimation = (color: string) => css`
  &:hover,
  &:focus {
    box-shadow: inset 6.5em 0 0 0 ${color};
  }
`;

export const offsetAnimation = (color: string) => css`
  box-shadow: 0.3em 0.3em 0 0 #19bc8b, inset 0.3em 0.3em 0 0 #19bc8b;

  &:hover,
  &:focus {
    box-shadow: 0 0 0 0 ${color}, inset 6em 3.5em 0 0 ${color};
  }
`;
