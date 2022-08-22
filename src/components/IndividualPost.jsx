import "./IndividualPost.css";
import Markdown from "markdown-to-jsx";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";

const IndividualPost = ({ post, blogPosts, detailedView }) => {
  const { entry_id } = useParams();

  // if the post prop is not defined then it means that we are retunrning this component at /article:entry_id hence we find the post that maches the param
  const postToDisplay =
    post ?? blogPosts?.find((post) => post.sys.id === entry_id);

  if (postToDisplay) {
    //destructure all the props from the postToDisplay only when postToDisplay is defined/truthy
    const {
      sys: { id },
      fields: { title, body, titleMedia, publishingDate, postAuthor, source },
    } = postToDisplay;

    //trimm the body if we are not in detailed view
    const trimmedBlogPostBody = body.slice(0, 300) + `...`;

    return (
      <Card bg="bg" className={`${detailedView && "mt-5"}`}>
        <Card.Header className="heightHeader d-flex">
          <h4 className="mx-auto">{title}</h4>
        </Card.Header>
        <Card.Body className="d-flex flex-column mb-5">
          <Image
            src={titleMedia.fields?.file.url}
            alt="Article cover"
            className="img-fluid mx-auto objectFit m-4"
          />
          {/* if we aren't in detailed view show the trimmed article body else the full article*/}
          <Markdown className="pb-1">
            {detailedView ? body : trimmedBlogPostBody}
          </Markdown>
          {/* if we aren't in detailed view show the button*/}
          {!detailedView && (
            <Link to={`/articles/${id}`} className="mb-3 pb-2">
              Read More
            </Link>
          )}
        </Card.Body>
        <Card.Footer className="text-muted py-1">
          <p className="text-muted">
            <a href={source} target="_blank" rel="noreferrer">
              News Source
            </a>
            | published on
            <span> {moment(publishingDate).format("MMM Do YYYY")} </span>
            by
            <Link to={`author/${postAuthor}`}> {postAuthor} </Link>
          </p>{" "}
        </Card.Footer>
      </Card>
    );
  }
};

export default IndividualPost;
