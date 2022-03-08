import { useState } from "react";
import List from "./List";
import Add from "./Add";

const listItems = [
  {
    _id: "c2hvcHBpbmcuaXRlbTox",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Pineapple", de: "Ananas" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbToy",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Apples", de: "Äpfel" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbToz",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Apricots", de: "Aprikosen" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo0",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Artichokes", de: "Artischocken" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo1",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Aubergine", de: "Aubergine" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo2",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Oyster mushrooms", de: "Austernpilze" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo3",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Avocado", de: "Avocado" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo4",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Baby spinach", de: "Babyspinat" },
  },
  {
    _id: "c2hvcHBpbmcuaXRlbTo5",
    _type: "shopping.item",
    category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
    name: { en: "Bananas", de: "Bananen" },
  },
];

export default function Main() {
  const [shoppingListItem, setShoppingListItem] = useState(listItems);

  function handleAddItem(name) {
    setShoppingListItem([
      ...shoppingListItem,
      {
        _id: name._id,
        _type: name._type,
        category: { _type: name.category._type, _ref: name.category._ref },
        name: { en: name.name.en, de: name.name.de },
      },
    ]);
  }

  return (
    <main>
      <h2 class>Your shopping list</h2>
      <Add onAddItem={handleAddItem} />
      <List />
    </main>
  );
}
