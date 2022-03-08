import "./list.css";

export default function List({ shoppingListItem }) {
  return (
    <>
      <ul className="shopping__list">
        {shoppingListItem.map((item) => (
          <li key={item._id} className="shopping__items">
            {item.name.en}
          </li>
        ))}
      </ul>
    </>
  );
}
