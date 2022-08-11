import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import Spinner from "react-bootstrap/Spinner";

import BlogPosts from "./components/BlogPosts";
import IndividualPost from "./components/IndividualPost";
import Home from "./components/Home";
import Header from "./components/Header";
import useContentful from "./useContentful";
import useCustomSearchParams from "./useCustomSearchParams";

const App = () => {
  const myForm = useRef(null);

  const { blogPosts, isLoading } = useContentful();

  const { query, setSearchParams } = useCustomSearchParams();

  //functions that handles the query string on form submit and resets the form at the end
  const handleSearchWord = (event) => {
    event.preventDefault();

    setSearchParams({ query: event.target.query.value });

    myForm.current.reset();
  };

  return (
    <div className="App">
      <Header
        handleSearchWord={handleSearchWord}
        query={query}
        myForm={myForm}
      />

      {isLoading && <Spinner animation="border" size="lg" />}

      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={<Home blogPosts={blogPosts} query={query} />}
          />
          <Route
            path="articles/:entry_id"
            element={<IndividualPost blogPosts={blogPosts} detailedView />}
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
