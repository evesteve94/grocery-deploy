import { useContext } from "react";
import DataContext from "./context/DataContext";
import ItemList from "./ItemList";

const Content = ({ search }) => {
  const { items } = useContext(DataContext);
  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main>
      {filteredItems.length ? (
        <ItemList items={filteredItems} />
      ) : (
        <p style={{ marginTop: "2rem", textAlign: "center" }}>
          Your list is empty.
        </p>
      )}
    </main>
  );
};

export default Content;
