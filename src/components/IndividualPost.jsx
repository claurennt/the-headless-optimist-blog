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
}) {
  const trimmedBlogPostBody = body.slice(0, 300) + `...`;

  return (
    <div className="IndividualPost col-lg-4 col-md-6 col-xs-12 m-5 d-flex flex-column mx-auto ">
      <Card bg="bg" className="h-auto">
        <Card.Header className="heightHeader d-flex">
          <h4 className="mx-auto">{title}</h4>
        </Card.Header>
        <Card.Body className="d-flex flex-column mb-5">
          <Image
            src={titleMedia.fields?.file.url}
            alt="Article cover"
            className="img-fluid mx-auto objectFit m-4"
          />
          <Markdown className="pb-1">{trimmedBlogPostBody}</Markdown>

          <Link to={`articles/${id}`} className="mb-5">
            Read More
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted py-1 ">
          <p>
            <a className="source-link" href={source} target="_blank">
              News Source
            </a>
            | published on
            <span> {moment(publishingDate).format("MMM Do YYYY")} </span>
            by
            <Link to={`author/${postAuthor}`}> {postAuthor} </Link>
          </p>{" "}
        </Card.Footer>
      </Card>
    </div>
  );
}
