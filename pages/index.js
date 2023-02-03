import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider, useSelector } from "react-redux";

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = configureStore({
  reducer: counter,
});

const Counter = ({ onIncrement, onDecrement }) => {
  const value = useSelector((state) => state);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default function Home() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vw",
          width: "100vh",
          backgroundColor: "gray",
          color: "black",
        }}
      >
        <Counter
          onIncrement={() =>
            store.dispatch({
              type: "INCREMENT",
            })
          }
          onDecrement={() =>
            store.dispatch({
              type: "DECREMENT",
            })
          }
        />
      </div>
    </Provider>
  );
}
