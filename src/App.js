import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import BlogPosts from "./components/BlogPosts";
import Home from "./components/Home";
import Header from "./components/Header";
import useContentful from "./useContentful";

const App = () => {
  const { blogPosts, isLoading } = useContentful();

  return (
    <div className="App">
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home blogPosts={blogPosts} />} />
          <Route
            path="articles/:entry_id"
            element={<BlogPosts blogPosts={blogPosts} />}
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
