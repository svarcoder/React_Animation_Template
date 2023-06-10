import React, { useEffect, useState } from 'react';
import {
  GradientStyleText,
  HeaderSlideUpText,
  WavyTextStyle,
} from './styledTextStyle';
// import { WavyTextStyle } from '../../wavyTextStyle';

interface WavyTextProps {
  label?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  textStyle?: 'wavy' | 'gradient' | 'headerText';
  shadow?: boolean;
}

const delay = 200;

let first = true;

const StyledText = ({
  label,
  size,
  color,
  textStyle,
  shadow,
}: WavyTextProps) => {
  const [text, setText] = useState<string>('');
  const [spanText, setSpanText] = useState<any>();

  const addClass = () => {
    const span = document.querySelectorAll('#wavyspan');

    const spanArray = Array.from(span);

    spanArray?.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('wavy');
      }, index * 60 + delay);
    });
  };

  useEffect(() => {
    if (first) {
      first = false;
    } else {
      addClass();
    }

    function updateText(label: any) {
      const indiSpan = label
        .split('')
        .map((letter: string) => {
          return letter;
        })
        .join('');

      setSpanText(indiSpan);
    }

    updateText(label);
  }, [spanText, label]);

  return (
    <>
      {textStyle === 'wavy' && (
        <WavyTextStyle fontSize={size} shadow={shadow}>
          <input
            type='text'
            id='textField'
            value={text || label}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          {spanText?.split('').map((_: any, index: any) => (
            <span
              key={_ + index}
              id='wavyspan'
              className='waviy'
              style={{ color: color }}>
              {_}
            </span>
          ))}
        </WavyTextStyle>
      )}
      {textStyle === 'gradient' && (
        <GradientStyleText fontSize={size}>{label}</GradientStyleText>
      )}
      {textStyle === 'headerText' && (
        <HeaderSlideUpText fontSize={size} style={{ color: color }}>
          {label}
        </HeaderSlideUpText>
      )}
    </>
  );
};

export default StyledText;
