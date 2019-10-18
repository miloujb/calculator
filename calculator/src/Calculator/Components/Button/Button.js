import React from "react";

const button = props => {
  const buttonClass = ["button"];

  if (typeof props !== "undefined" && typeof props.type !== "undefined")
    buttonClass.push("button-" + props.type);

  return (
    <button className={buttonClass.join(" ")} onClick={props.onPress}>
      {props.children}
    </button>
  );
};
export default button;
