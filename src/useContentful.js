import { useState, useEffect } from "react";
import client from "./client/contentfulClient";

//custom hook that uses the Content Delivery API to fetch articles from Contentful's space and returns the data
const useContentful = () => {
  const [blogPosts, setBlogPosts] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const response = await client.getEntries();

      setIsLoading(false);

      setBlogPosts(response.items);
    })();
  }, []);

  return { blogPosts, isLoading };
};

export default useContentful;
