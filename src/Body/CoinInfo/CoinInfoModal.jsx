import Modal from "react-bootstrap/Modal";
import CoinInfo from "./CoinInfo";
import Button from "react-bootstrap/Button";

function CoinInfoModal({ show, setShow, coinData, setPage }) {
  const handleonClick = () => {
    setPage("page");
    setShow(false);
  };

  return (
    <Modal
      size="lg"
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CoinInfo coinData={coinData} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" className="mx-auto" onClick={handleonClick}>
          More Info
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CoinInfoModal;
