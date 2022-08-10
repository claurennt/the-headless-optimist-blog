import "./Home.css";

import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import BlogPosts from "./BlogPosts";
import qs from "querystringify";

const Home = ({ blogPosts }) => {
  return (
    <div className="mx-5">
      <div className="row">
        <h1 className="mt-4 fs-2">Welcome!</h1>
        <h2 className=" fs-4">
          On this website you will find a collection of very positive,
          optimistic news from around the world!
        </h2>
        <BlogPosts blogPosts={blogPosts} />
      </div>
    </div>
  );
};

export default Home;
