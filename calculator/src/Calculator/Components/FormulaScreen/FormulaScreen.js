import React from "react";

const FormulaScreen = props => {
  console.log(props);
  return <div className="formula-screen">{props.children}</div>;
};

export default FormulaScreen;
