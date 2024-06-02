import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfo/CoinInfoModal";
import { getAssets } from "../api/assets";

function CoinList({ setPage }) {
  const [showInfoModal, setShowInfoModal] = React.useState(false);

  const [coinData, setCoinData] = React.useState({});
  const [coinList, setCoinList] = React.useState([]);

  const handleonClick = (coin) => {
    setShowInfoModal(true);
    setCoinData(coin);
  };

  React.useEffect(() => {
    getAssets().then((json) => {
      setCoinList(json.data);
    });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP (24H)</th>
            <th>Supply</th>
            <th>Volume (24H)</th>
            <th>Change (24H)</th>
          </tr>
        </thead>
        <tbody>
          {coinList.length &&
            coinList.map((coin) => (
              <tr onClick={() => handleonClick("coin")}>
                <td>{coin.rank}</td>
                <td>{coin.name}</td>
                <td>{coin.priceUsd}</td>
                <td>{coin.marketCapUsd}</td>
                <td>{coin.vwap24Hr}</td>
                <td>{coin.supply}</td>
                <td>{coin.volumeUsd24Hr}</td>
                <td>{coin.changePercent24Hr}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <CoinInfoModal
        show={showInfoModal}
        setShow={setShowInfoModal}
        coinData={coinData}
        setPage={setPage}
      />
    </>
  );
}

export default CoinList;
