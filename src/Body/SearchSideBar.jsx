import Offcanvas from "react-bootstrap/Offcanvas";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function SearchSideBar({ showSideBar, setShowSideBar }) {
  const handleClose = () => setShowSideBar(false);
  const closeButton = () => setShowSideBar(false);

  return (
    <Offcanvas show={showSideBar} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form inline>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Coin</InputGroup.Text>
            <Form.Control
              placeholder="Enter your Coin"
              aria-label="Enter your Coin"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Date From</InputGroup.Text>
            <Form.Control
              placeholder="Enter your Date from"
              aria-label="Enter your Date from"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Date End</InputGroup.Text>
            <Form.Control
              placeholder="Date end of Search"
              aria-label="Date end of Search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>
        <Navbar.Text className="justify-content-end">
          <Button onClick={() => setShowSideBar(true)} variant="primary">
            Search
          </Button>
        </Navbar.Text>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SearchSideBar;
