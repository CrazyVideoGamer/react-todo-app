import { useReducer } from "react";

import "./styles.css";
import TodoElement from "./components/TodoElement";
import Footer from "./components/Footer";

function reducer(state, action, value) {
  switch (action) {
    case "add":
      return [...state, value];
    case "rm":
      if (!state.includes(value)) {
        console.error("Value does not exist iside array when removing item");
        return;
      } else {
        return state.filter((val) => val !== value);
      }
    default:
      console.error("Action does not exist");
      break;
  }
}

export default function App() {
  let [items, itemsDispatcher] = useReducer(reducer, ["A cool task"]);
  return (
    <div className="App">
      <h1>The Only Todo List You Need</h1>
      <p>The list to copy them all</p>
      <h2 className="column-title">TODO</h2>
      <div className="column-items">
        {items.map((taskname) => (
          <TodoElement name={taskname} initialStatus="todo" />
        ))}
      </div>

      {/* <h2 className="column">Progress</h2>
      <hr />
      <h2 className="column">Done</h2>
      <hr /> */}

      <Footer />
    </div>
  );
}
