import { useState } from "react";

export default function Add({ onAddItem }) {
  const { name, setName } = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd(event) {
    event.preventDefault();
    onAddItem(name);
    setName("");
  }

  return (
    <>
      <form onSubmit={handleAdd}>
        <label htmlFor="add-item">What do you want to buy?:</label>
        <input
          id="add-item"
          type="text"
          placeholder="Add Item..."
          value={name}
          onChange={handleChange}
        />
        <button type="button">Add</button>
      </form>
    </>
  );
}
