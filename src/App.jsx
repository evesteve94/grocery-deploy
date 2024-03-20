import { useState, useContext } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { DataProvider } from "./context/DataContext";
import DataContext from "./context/DataContext";

function App() {
  const { items } = useContext(DataContext);
  const [search, setSearch] = useState("");

  return (
    <>
      <DataProvider>
        <Header title="Grocery List" />
        <AddItem />
        <SearchItem search={search} setSearch={setSearch} />
        <Content search={search} />
        <Footer search={search} />
      </DataProvider>
    </>
  );
}

export default App;
