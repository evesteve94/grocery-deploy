import { useContext } from "react";
import DataContext from "./context/DataContext";
import ItemList from "./ItemList";

const Content = () => {
  const { items } = useContext(DataContext);
  return (
    <main>
      {items.length ? (
        <ItemList items={items} />
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          Your list is empty.
        </p>
      )}
    </main>
  );
};

export default Content;
