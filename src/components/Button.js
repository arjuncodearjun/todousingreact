import React from "react";
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {

// const onClick =(e) => {
    
// }

  return (
    <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

// Button.defaultProps = {
//     color: 'steelblue',
//     text: 'Add me'
// }

// used to ensure if the component is using a correct data type
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button;
