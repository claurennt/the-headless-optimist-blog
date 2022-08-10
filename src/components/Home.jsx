import "./Home.css";

import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import BlogPosts from "./BlogPosts";
import qs from "querystringify";

const Home = ({ blogPosts }) => {
  return (
    <div className="mx-5">
      <div className="row">
        <BlogPosts blogPosts={blogPosts} />
      </div>
    </div>
  );
};

export default Home;
