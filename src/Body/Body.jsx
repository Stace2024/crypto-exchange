import CoinList from "./CoinList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";
import { Routes, Route } from "react-router-dom";

function Body(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinList {...props} />} />
        <Route path="/coin/:id" element={<CoinInfo {...props} />} />
      </Routes>
      <SearchSideBar {...props} />
    </>
  );
}

export default Body;
