import { useEffect, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Data from "./components/data.json";
const storageData = localStorage.getItem("data");
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [animeData, setAnimeData] = useState(Data);
  const [watchList, setWatchList] = useState(JSON.parse(storageData));

  useEffect(() => {
    if (searchValue) {
      const newArr = Data.filter((i) =>
        i.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setAnimeData(newArr);
    } else {
      setAnimeData(Data);
    }
  }, [searchValue]);

  const SearchFunction = (value) => {
    setSearchValue(value);
  };

  const AddItemtoWatchList = (value) => {
    if (!watchList.includes(value)) {
      const arr = [value, ...watchList];
      localStorage.setItem("data", JSON.stringify(arr));
      setWatchList(arr);
    }
  };

  const removeItemFromWatchList = (id) => {
    const arr = localStorage.getItem("data");
    console.log(JSON.parse(arr));
    const newArr = JSON.parse(arr).filter((i) => i.mal_id !== id);
    localStorage.setItem("data", JSON.stringify(newArr));
    setWatchList(newArr);
  };

  return (
    <>
      <Header func={SearchFunction} />
      <h2 style={{ padding: "20px" }}>Anime videos</h2>
      {animeData.length === 0 && <h3>Loading...</h3>}
      {animeData.length > 0 && (
        <Container data={animeData} func={AddItemtoWatchList} />
      )}
      <h2 style={{ padding: "20px" }}>Watchlist</h2>
      {watchList.length === 0 && <h2>No items in watchList</h2>}
      {watchList.length > 0 && (
        <WatchList data={watchList} func={removeItemFromWatchList} />
      )}
    </>
  );
}

export default App;
