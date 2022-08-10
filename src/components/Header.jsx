import "./Header.css";
import logo from "./logo.jpg";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

const Header = ({ handleSearchWord, searchParams }) => (
  <div className="Header py-3 ">
    <img src={logo} alt="logo" className="logo" />

    <SearchForm
      handleSearchWord={handleSearchWord}
      searchParams={searchParams}
    />
    <Navigation />
  </div>
);

export default Header;
