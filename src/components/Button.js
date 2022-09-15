import React from 'react';

function Button(props) {
    return (
      <button 
        className='bg-secondary py-3 px-8 rounded-full font-semibold uppercase'
      >
        {props.buttonText}
      </button>
    )
}

export default Button;