import React from 'react';
import css from './Feedback.module.css';

const Feedback = ({ options, updateState }) => {
  return (
    <ul className={css.listButton}>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button" onClick={() => updateState(option)}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Feedback;
