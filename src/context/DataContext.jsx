import { createContext, useEffect, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  // const [newItem, setNewItem] = useState("");

  console.log("before useEffect");

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  console.log("after useEffect");

  // const addItem = (item) => {
  //   const id = items.length ? items[items.length - 1].id + 1 : 1;
  //   const myNewItem = { id, checked: false, item };
  //   const listItems = [...items, myNewItem];
  //   setItems(listItems);
  // };

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
    <DataContext.Provider
      value={{
        items,
        setItems,
        handleCheck,
        handleDelete,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
