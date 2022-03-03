import { useState } from "react";

export default function Add({ onAddItem }) {
  const { text, setText } = useState("");
  return (
    <>
      <input
        placeholder="Add an item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText("");
          onAddItem(text);
        }}
      >
        Add
      </button>
    </>
  );
}
