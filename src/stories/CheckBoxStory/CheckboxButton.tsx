import React, { useState } from 'react';
import {
  CheckboxButtonStyle,
  SimpleCheckBoxStyle,
} from './checkboxButtonStyle';
// import { SimpleCheckBoxStyle } from './checkBoxWithLabelStyle';

interface CheckboxButtonProps {
  label?: string;
  checked?: boolean;
  btnStatus?: 'primary' | 'secondary';
}

const CheckBoxButton = ({ label, checked, btnStatus }: CheckboxButtonProps) => {
  const [isCheckedState, setIsCheckedState] = useState(false);

  return (
    <>
      {btnStatus === 'primary' && (
        <CheckboxButtonStyle isCheckedProps={checked || isCheckedState}>
          <input
            id='one'
            checked={isCheckedState || checked}
            type='checkbox'
            onChange={(e) => setIsCheckedState(e.target.checked)}
          />
          <label htmlFor='one'>
            <span></span>

            {label}
            <ins>
              <i>{label}</i>
            </ins>
          </label>
        </CheckboxButtonStyle>
      )}
      {btnStatus === 'secondary' && (
        <SimpleCheckBoxStyle>
          <input
            className='inp-cbx'
            id='morning'
            type='checkbox'
            checked={isCheckedState || checked}
            onChange={(e) => setIsCheckedState(e.target.checked)}
          />
          <label className='cbx' htmlFor='morning'>
            <span>
              <svg width='12' height='10'>
                <use xlinkHref='#check'></use>
              </svg>
            </span>
            <span>{label}</span>
          </label>
        </SimpleCheckBoxStyle>
      )}
    </>
  );
};

export default CheckBoxButton;
