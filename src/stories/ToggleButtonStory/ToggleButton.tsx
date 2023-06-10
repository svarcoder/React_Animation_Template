import { useState } from 'react';
import { ButtonCover, ToggleButtonWrap } from './toggleButtonStyle';

interface ToggleTypeProps {
  checked?: boolean;
  isDisable?: boolean;
  toggleEffect?:
    | 'toggleButton-1'
    | 'toggleButton-2'
    | 'toggleButton-3'
    | 'toggleButton-4'
    | 'toggleButton-5'
    | 'toggleButton-6'
    | 'toggleButton-7'
    | 'toggleButton-8'
    | 'toggleButton-9'
    | 'toggleButton-10'
    | 'toggleButton-11'
    | 'toggleButton-12'
    | 'toggleButton-13'
    | 'toggleButton-14'
    | 'toggleButton-15'
    | 'toggleButton-16'
    | 'toggleButton-17'
    | 'toggleButton-18';
}

const ToggleButton = ({
  checked,
  isDisable,
  toggleEffect,
}: ToggleTypeProps) => {
  const [isCheckedState, setIsCheckedState] = useState(false);
  const toggleEffectNumber = toggleEffect?.split('-')[1];

  return (
    <ToggleButtonWrap>
      <ButtonCover disabled={isDisable}>
        <div
          className={
            Number(toggleEffectNumber) <= 9
              ? 'toggleButton r'
              : 'toggleButton b2'
          }
          id={toggleEffect}>
          <input
            type='checkbox'
            disabled={isDisable}
            className='checkbox'
            checked={isCheckedState || checked}
            onChange={(e) => setIsCheckedState(e.target.checked)}
          />
          <div className='knobs'>
            <span></span>
          </div>
          <div className='layer'></div>
        </div>
      </ButtonCover>
    </ToggleButtonWrap>
  );
};

export default ToggleButton;
