import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useSearchParams } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import Spinner from "react-bootstrap/Spinner";

import BlogPosts from "./components/BlogPosts";
import Home from "./components/Home";
import Header from "./components/Header";
import useContentful from "./useContentful";

import qs from "querystringify";

const App = () => {
  const { blogPosts, isLoading } = useContentful();
  const [searchParams, setSearchParams] = useSearchParams({ query: "" });

  function handleSearchWord(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.

    setSearchParams({ query: event.target.query.value });
  }

  return (
    <div className="App">
      <Header handleSearchWord={handleSearchWord} searchParams={searchParams} />

      {isLoading && <Spinner animation="border" size="lg" />}

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home blogPosts={blogPosts} />} />
          <Route
            path="articles/:entry_id"
            element={<BlogPosts blogPosts={blogPosts} detailedView />}
          />
          <Route
            path="category/:tag"
            element={<BlogPosts blogPosts={blogPosts} />}
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
