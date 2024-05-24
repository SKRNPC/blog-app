import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/features/searchSlice";
import { ReactComponent as SearchIcon } from "../images/icons/search-icon.svg";
function SearchBar() {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  return (
    <>
      <form className="d-flex" role="search">
        <input
          type="search"
          className="form-control me-2 rounded-3"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="btn" type="submit">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
