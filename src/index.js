import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import reducer from "./reducers";
import setupEnzyme from "./setupEnzyme";

const store = createStore(reducer);

const render = () => {
  console.log("render is invoked. store.getState() is ", store.getState());
  return ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        console.log(
          'Counter => onIncrement invoked and store.dispatch({ type: "INCREMENT" })'
        );
        store.dispatch({ type: "INCREMENT" });
      }}
      onDecrement={() => {
        console.log(
          'Counter => onDecrement invoked and store.dispatch({ type: "DECREMENT" })'
        );
        store.dispatch({ type: "DECREMENT" });
      }}
    />,
    document.getElementById("root")
  );
};

render();

store.subscribe(render);
