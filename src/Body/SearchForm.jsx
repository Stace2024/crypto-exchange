import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { periods } from "./CoinInfo/constants";

function SearchForm({ closeSideBar }) {
  const [searchData, setSearchData] = React.useState({});

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const coin = event.target.coin.value;
    const from = event.target.from.value;
    const to = event.target.to.value;

    setSearchData({ coin, from, to });

    closeSideBar();
  };

  console.log(searchData);

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="coin">
        <Form.Label>Coin</Form.Label>
        <Form.Control type="text" name="coin" placeholder="Enter coin" />
        <Form.Text className="text-muted">Example "BTC"</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="interval">
        <Form.Label>Interval</Form.Label>
        {periods.map((period) => (
          <option key={period.interval} value={period.ninterval}>
            {period.label}
          </option>
        ))}
        <Form.Select name="interval"></Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Search
      </Button>
    </Form>
  );
}

export default SearchForm;
