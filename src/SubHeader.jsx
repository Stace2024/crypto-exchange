import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SubHeader() {
  return (
    <Container>
      <Row>
        <Col>MARKET CAP</Col>
        <Col>EXCHANGE VOL</Col>
        <Col>ASSETS</Col>
        <Col>EXCHANGES</Col>
        <Col>MARKETS</Col>
        <Col>BTC DOM INDEX</Col>
      </Row>
    </Container>
  );
}

export default SubHeader;
