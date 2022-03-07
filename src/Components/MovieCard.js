import { Rating } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";


const MovieCard = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: "15rem", height: "30rem" }}>
        <Card.Img  variant="top" src={movie.posterURL} />
        <Card.Body >
          <Card.Title>{movie.title}</Card.Title>
          <Rating
            name="read-only"
            value={movie.rating}
            readOnly
            
          />
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;