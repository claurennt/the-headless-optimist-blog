import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = ({ handleSearchWord, myForm }) => {
  return (
    <Form className="headerForm" onSubmit={handleSearchWord} ref={myForm}>
      <Form.Group className="mb-3 w-25 d-flex mx-auto ">
        <Form.Control
          placeholder="Find Title or Article"
          size="sm"
          aria-label="Search"
          name="query"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
