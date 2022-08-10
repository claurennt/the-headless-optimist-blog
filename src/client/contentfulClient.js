import { createClient } from "contentful";

const { REACT_APP_CONTENTFUL_SPACEID, REACT_APP_CONTENTFUL_ACCESS_TOKEN } =
  process.env;

//create client and connect it to the relevant space_id and access token for the Content Delivery API
const client = createClient({
  space: REACT_APP_CONTENTFUL_SPACEID,

  accessToken: REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export default client;
