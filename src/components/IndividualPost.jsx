import "./IndividualPost.css";
import Markdown from "markdown-to-jsx";
import { Link } from "react-router-dom";
import moment from "moment";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";

export default function IndividualPost({
  sys: { id },
  fields: { publishingDate, postAuthor, source, body, title, titleMedia },
  detailedView,
}) {
  const trimmedBlogPostBody = body.slice(0, 300) + `...`;

  return (
    // apply bootstrap's grid layout if we are not in detailed view

    <Card bg="bg">
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
          <Link to={`articles/${id}`} className="mb-3 pb-2">
            Read More
          </Link>
        )}
      </Card.Body>
      <Card.Footer className="text-muted py-1">
        <p className="text-muted">
          <a href={source} target="_blank">
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
