import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = () => {
  //the useSearchParams hook returns an array with a variable containing the query string and a function to update it
  const [searchParams, setSearchParams] = useSearchParams();

  // because the url params is a URLSearchParam type of object we can only return the value with the .get method
  const query = searchParams.get("query");

  return { query, setSearchParams };
};

export default useCustomSearchParams;
