import { useState, useEffect } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     checked: false,
  //     item: "Ett kilo äpplen",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "kakor",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Kalles Kaviar",
  //   },
  // ]);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  console.log("before useEffect");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  console.log("after useEffect");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    // addItem senare
    addItem(newItem);

    setNewItem("");
  };

  return (
    <>
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
