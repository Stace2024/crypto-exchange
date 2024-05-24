import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function CoinInfo({ coinData }) {
  return (
    <Row>
      <Col>
        <Row>
          <Col>Logo</Col>;<Col>{coinData.name}</Col>
        </Row>
      </Col>
      <Col>
        <div>High 70000</div>
        <div>Low 67000</div>
      </Col>
      <Col>
        <div>Average 69000</div>
        <div>Change -3%</div>
      </Col>
    </Row>
  );
}

export default CoinInfo;
