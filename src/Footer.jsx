import { useContext } from "react";
import DataContext from "./context/DataContext";

const Footer = () => {
  const { items } = useContext(DataContext);
  return (
    <footer>
      <p>
        {items.length} List {items.length === 1 ? "Item" : "Items"}
      </p>
    </footer>
  );
};

export default Footer;
