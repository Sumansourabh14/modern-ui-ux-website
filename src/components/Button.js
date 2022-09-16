import React from 'react';

function Button(props) {
    return (
      <button 
        className={'bg-secondary py-3 px-8 rounded-full font-semibold uppercase tracking-wide hover:bg-opacity-60 duration-150 ' + props.customClasses}
      >
        {props.buttonText}
      </button>
    )
}

export default Button;