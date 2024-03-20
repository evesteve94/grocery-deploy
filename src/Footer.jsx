import { useContext } from "react";
import DataContext from "./context/DataContext";

const Footer = ({ search }) => {
  const { items } = useContext(DataContext);
  const filteredItems = items.filter((item) =>
    item.item.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <footer>
      <p>
        {items.length > filteredItems.length
          ? `${filteredItems.length} ${
              filteredItems.length === 1 ? "result" : "results"
            }`
          : `${items.length} ${items.length === 1 ? "item" : "items"}`}
      </p>
    </footer>
  );
};

export default Footer;
