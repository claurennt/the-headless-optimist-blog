import { useParams } from "react-router-dom";
import IndividualPost from "./IndividualPost";

const BlogPosts = ({ blogPosts, query }) => {
  const { tag, author } = useParams();

  return (
    <div className="row mt-5">
      {tag && <h3>Articles about category: {tag}</h3>}
      {author && <h3>Articles written by author: {author}</h3>}
      {query && <h3>Articles about search word: {query}</h3>}

      {blogPosts
        ?.filter((post) => {
          //if the user searched for a word in the seaarch abr then we filter the articles with body or title containing the word
          if (query)
            return (
              post.fields.body.toLowerCase().includes(query.toLowerCase()) ||
              post.fields.title.toLowerCase().includes(query.toLowerCase())
            );

          //if we have the tag in the url params then we filter the articles with the tag equal to the param
          if (tag) return tag === post.metadata.tags[0]?.sys.id;

          //if we have the author in the url params then we filter the articles with the author equal to the param
          if (author)
            return (
              author.toLowerCase() === post.fields.postAuthor.toLowerCase()
            );

          //else we return all the post without any filtering
          return post;
        })
        .map((post) => (
          <div
            className={`IndividualPost col-lg-4 col-md-6 col-sm-6 col-xs-12 m-5 d-flex flex-column mx-auto`}
            key={post.sys.id}
          >
            <IndividualPost
              key={post.sys.id}
              post={post}
              tag={tag}
              query={query}
            />
          </div>
        ))}
    </div>
  );
};

export default BlogPosts;
