import Table from "react-bootstrap/Table";
import React from "react";
import CoinInfoModal from "./CoinInfoModal";

function CoinList() {
  const [showInfoModal, setShowInfoModal] = React.useState(false);

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
          <tr onClick={() => setShowInfoModal(true)}>
            <td>1</td>
            <td>BTCUSDT</td>
            <td>$67,640.50</td>
            <td>@$1.33t</td>
            <td>@$68,593.59</td>
            <td>@19.70m</td>
            <td>@12.98b</td>
            <td>@-2.10%</td>
          </tr>
        </tbody>
      </Table>
      <CoinInfoModal show={showInfoModal} setShow={setShowInfoModal} />
    </>
  );
}

export default CoinList;
