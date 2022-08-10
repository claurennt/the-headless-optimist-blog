import "./Header.css";
import logo from "./logo.jpg";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = () => {
  return (
    <>
      <div className="Header py-5 ">
        <img src={logo} alt="logo" className="img-fluid" />
        <Form>
          <Form.Group className="mb-3 w-25 d-flex mx-auto">
            <Form.Control
              placeholder="Find Title or Article"
              size="sm"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Header;
