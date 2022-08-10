import { useParams, useLocation } from "react-router-dom";
import IndividualPost from "./IndividualPost";

const BlogPosts = ({ blogPosts, detailedView }) => {
  const { entry_id, tag, author } = useParams();

  return (
    <div className="row mt-5">
      {tag && <h3>Articles about category: {tag}</h3>}
      {author && <h3>Articles by: {author}</h3>}

      {blogPosts
        ?.filter((post) => {
          //if the user searched for a word in the seaarch abr then we filter the articles with body or title containing the word
          // if (searchQuery)
          //   return (
          //     post.fields.body
          //       .toLowerCase()
          //       .includes(searchQuery.toLowerCase()) ||
          //     post.fields.title
          //       .toLowerCase()
          //       .includes(searchQuery.toLowerCase())
          //   );

          //if we have the entry_id in the url params then we filter the articles with the id equal to the param
          if (entry_id) return entry_id === post.sys.id;

          //if we have the tag in the url params then we filter the articles with the tag equal to the param
          if (tag) return tag === post.metadata.tags[0]?.sys.id;

          //if we have the author in the url params then we filter the articles with the author equal to the param
          if (author) return author === post.fields.postAuthor;

          //else we return all the post without any filtering
          return post;
        })
        .map((post) => {
          return (
            <div
              className={`IndividualPost  col-lg-4 col-md-6 col-sm-6 col-xs-12 ${
                detailedView && "col-lg-10"
              } m-5 d-flex flex-column mx-auto`}
            >
              <IndividualPost
                key={post.sys.id}
                {...post}
                tag={tag}
                detailedView={detailedView}
              />
            </div>
          );
        })}
    </div>
  );
};

export default BlogPosts;
