import "./Home.css";

import BlogPosts from "./BlogPosts";

const Home = ({ blogPosts }) => {
  return (
    <>
      <h1 className="mt-4 fs-2">Welcome!</h1>
      <h2 className=" fs-4">
        On this website you will find a collection of very positive, optimistic
        news from around the world!
      </h2>

      <BlogPosts blogPosts={blogPosts} />
    </>
  );
};

export default Home;
