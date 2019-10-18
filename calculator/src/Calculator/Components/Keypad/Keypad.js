import React from "react";
import Row from "./Row/Row";
import Button from "../Button/Button";

const Keypad = props => {
  return (
    <section className="keys">
      <Row>
        <Button onPress={props.onPress}>AC</Button>
        <Button onPress={props.onPress}>+/-</Button>
        <Button onPress={props.onPress}>%</Button>
        <Button onPress={props.onPress}>/</Button>
      </Row>
      <Row>
        <Button onPress={props.onPress}> 9</Button>
        <Button onPress={props.onPress}>8</Button>
        <Button onPress={props.onPress}>7</Button>
        <Button onPress={props.onPress}>*</Button>
      </Row>
      <Row>
        <Button onPress={props.onPress}>6</Button>
        <Button onPress={props.onPress}>5</Button>
        <Button onPress={props.onPress}>4</Button>
        <Button onPress={props.onPress}>-</Button>
      </Row>
      <Row>
        <Button onPress={props.onPress}>3</Button>
        <Button onPress={props.onPress}>2</Button>
        <Button onPress={props.onPress}>1</Button>
        <Button onPress={props.onPress}>+</Button>
      </Row>
      <Row>
        <Button onPress={props.onPress}>0</Button>
        <Button onPress={props.onPress}>.</Button>
        <Button type="large" onPress={props.onPress}>
          =
        </Button>
      </Row>
    </section>
  );
};

export default Keypad;
