import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    let newItem = { name, quantity, checked: false, id: Date.now() };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
  };

  const quantityNum = [...Array(15)].map((_, i) => {
    let index = i + 1;
    return (
      <option value={index} key={index}>
        {index}
      </option>
    );
  });

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}>
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
