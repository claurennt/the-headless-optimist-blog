import IndividualAuthor from "./IndividualAuthor";

const Authors = ({ blogPosts }) => {
  const allAuthorValues = blogPosts?.map((post) => post.fields.postAuthor);

  // creates a set of unique author values and onverst it back to an array
  const postAuthors = [...new Set(allAuthorValues)];

  return (
    <div className="d-flex justify-content-md-between m-3">
      {postAuthors?.map((author) => (
        <IndividualAuthor author={author} />
      ))}
    </div>
  );
};

export default Authors;
