import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";
import qs from "querystringify";

const BlogPosts = ({ blogPosts }) => {
  const { entry_id, tag, author } = useParams();

  let { search } = useLocation();

  const searchQuery = qs.parse(search).searchField;

  return blogPosts
    ?.filter((post) => {
      //if the user searched for a word in the seaarch abr then we filter the articles with body or title containing the word
      if (searchQuery)
        return (
          post.fields.body.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.fields.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

      //if we have the entry_id in the url params then we filter the articles with the id equal to the param
      if (entry_id) return entry_id === post.sys.id;

      //if we have the tag in the url params then we filter the articles with the tag equal to the param
      if (tag) return tag === post.metadata.tags[0].sys.id;

      //if we have the author in the url params then we filter the articles with the author equal to the param
      if (author) return author === post.fields.postAuthor;

      //else we return all the post without any filtering
      return post;
    })
    .map((post) => (
      <IndividualPost
        key={post.sys.id}
        {...post}
        detailedView={entry_id ? true : false}
      />
    ));
};

export default BlogPosts;
