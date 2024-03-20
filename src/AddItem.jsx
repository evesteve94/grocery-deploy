import { useContext, useState } from "react";
import DataContext from "./context/DataContext";
import { FaPlus } from "react-icons/fa";

const AddItem = () => {
  const [newItem, setNewItem] = useState("");

  const { items, setItems } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    // addItem senare
    addItem(newItem);
    setNewItem("");
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem"></label>
      <input
        type="text"
        autoFocus
        id="addItem"
        placeholder="Add Item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
