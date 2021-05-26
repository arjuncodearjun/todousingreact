// import React from 'react'
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      {/* <Button color='green' text='Add'/> */}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
  // or we can use title = 'Task Tracker' in App.js itself inside the Header return
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
