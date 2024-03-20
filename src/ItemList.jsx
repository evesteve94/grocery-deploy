import LineItem from "./LineItem";

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
