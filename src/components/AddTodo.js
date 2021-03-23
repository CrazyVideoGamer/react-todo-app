import { useState } from "react";

function AddTodo() {
  let [value, setValue] = useState("");

  function handleSubmit(e) {
    e.target.value;
  }
  return (
    <form onSubmit={handleSubmit}>
      <input value="" type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
