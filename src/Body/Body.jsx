import CoinList from "./CoinList";
import SearchSideBar from "./SearchSideBar";
import CoinInfo from "./CoinInfo/CoinInfo";
import { Routes, Route } from "react-router-dom";
import About from "./Body/About.jsx";

function Body(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoinList {...props} />} />
        <Route path="/coin/:id" element={<CoinInfo {...props} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <SearchSideBar {...props} />
      
    </>
  );
}

export default Body;
