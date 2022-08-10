import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = ({ handleSearchWord, searchParams }) => (
  <Form className="headerForm" onSubmit={handleSearchWord}>
    <Form.Group className="mb-3 w-25 d-flex mx-auto ">
      <Form.Control
        placeholder="Find Title or Article"
        size="sm"
        aria-label="Search"
        defaultValue=""
        value={searchParams.get("query")}
        name="query"
      />
      <Button variant="outline-success">Search</Button>
    </Form.Group>
  </Form>
);

export default SearchForm;
