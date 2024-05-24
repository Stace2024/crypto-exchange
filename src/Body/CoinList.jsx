import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfoModal";

function CoinList() {
  const [showInfoModal, setShowInfoModal] = React.useState(false);

  const [coinData, setCoinData] = React.useState({});

  const handleonClick = (name) => {
    setShowInfoModal(true);
    setCoinData({ name });
  };

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
          <tr onClick={() => handleonClick("Bitcoin")}>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
      <CoinInfoModal show={showInfoModal} setShow={setShowInfoModal} coinData={coinData} />
    </>
  );
}

export default CoinList;
