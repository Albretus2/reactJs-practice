import { useState } from "react";

export default function GroceryList({
  items,
  onDeleteItem,
  onChekedItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItem;
  if (sortBy === "input") sortedItem = items;
  if (sortBy === "name")
    sortedItem = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked")
    sortedItem = items.slice().sort((a, b) => a.checked - b.checked);

  return (
    <>
      <div className="list">
        <ul>
          {sortedItem.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onChekedItem={onChekedItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
    </>
  );
}

const Item = ({ item, onDeleteItem, onChekedItem }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => onChekedItem(item.id)}
      />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>&times;</button>
    </li>
  );
};
