import { useState, useEffect } from "react";
import client from "./client/contentfulClient";

//custom hook that uses the Content Delivery API to fetch articles from Contentful's space and returns the data
const useContentful = () => {
  const [blogPosts, setBlogPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      (async () => {
        const response = await client.getEntries();

        setIsLoading(false);

        setBlogPosts(response.items);
      })();
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      console.log(err);
    }
  }, []);

  return { blogPosts, isLoading, isError };
};

export default useContentful;
