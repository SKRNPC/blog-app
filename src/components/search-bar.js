import { useState } from "react";
import { Form, FormControl } from "react-bootstrap";

function SearchBar({ users, setUsers }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(e.target.value);
    const filtered = users.filter((user) =>
      user.blog_name.toLowerCase().includes(value)
    );
    setUsers(filtered);
  };
  return (
    <div className="d-flex justify-content-center p-3 bg-light">
      <Form className=" d-flex justify-content-center w-50">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 d-flex justify-content-center w-50"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
}

export default SearchBar;
