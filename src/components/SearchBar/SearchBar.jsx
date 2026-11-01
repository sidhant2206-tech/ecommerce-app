import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { setSearchTerm } from "../../store/productSlice";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const searchTerm = useSelector((state) => state.products.searchTerm);

  const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    if (pathname !== "/products") navigate("/products");
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}