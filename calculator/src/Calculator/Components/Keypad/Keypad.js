import React from "react";
import Row from "./Row/Row";
import Button from "../Button/Button";

const Keypad = () => {
  return (
    <section className="keys">
      <Row>
        <Button>C</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button>+</Button>
      </Row>
      <Row>
        <Button>9</Button>
        <Button>8</Button>
        <Button>7</Button>
        <Button>*</Button>
      </Row>
      <Row>
        <Button>6</Button>
        <Button>5</Button>
        <Button>4</Button>
        <Button>-</Button>
      </Row>
      <Row>
        <Button>3</Button>
        <Button>2</Button>
        <Button>1</Button>
        <Button>+</Button>
      </Row>
      <Row>
        <Button>0</Button>
        <Button>.</Button>
        <Button type="large">=</Button>
      </Row>
    </section>
  );
};

export default Keypad;
