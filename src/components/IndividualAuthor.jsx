import Card from "react-bootstrap/Card";

import Image from "react-bootstrap/Image";
import claurennt from "../assets/claurennt.jpg";
import niwolos from "../assets/niwolos.jpg";
import Jugesh from "../assets/Jugesh.jpg";

import { Link } from "react-router-dom";

const IndividualAuthor = ({ author }) => (
  <Card className="w-25 h-50">
    <Card.Header>
      <h4 className="mx-auto">{author}</h4>
    </Card.Header>
    <Card.Body className="d-flex flex-column">
      <Image
        src={
          (author === "claurennt" && claurennt) ||
          (author === "niwolos" && niwolos) ||
          (author === "Jugesh" && Jugesh)
        }
        alt={author}
        className="objectFit"
      />

      <Link to={`/authors/${author}`} className="mb-3 pb-2">
        See all articles written by {author}
      </Link>
    </Card.Body>
  </Card>
);

export default IndividualAuthor;
