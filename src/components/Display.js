import React from "react";

export default function Display(props) {
  return (
    <div>
      Hello
      <p> {props.n1}</p>
      <p> {props.e1}</p>
      <p> {props.p1}</p>
    </div>
  );
}
