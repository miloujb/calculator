import React from "react";

const resultScreen = props => {
  console.log(props);
  return <div className="result-screen">{props.children}</div>;
};
export default resultScreen;
