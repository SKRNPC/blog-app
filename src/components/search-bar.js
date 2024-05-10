import { Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/features/searchSlice";

function SearchBar() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <>
      <Form className=" d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className=""
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </Form>
    </>
  );
}

export default SearchBar;
