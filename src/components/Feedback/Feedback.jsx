import React from 'react';

const Feedback = ({ options }) => {
  console.log(options);

  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option}>
            <button type="button">{option}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Feedback;
