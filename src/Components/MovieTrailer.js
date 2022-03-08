import React from 'react';
import { Button } from "@mui/material";
import {Link,useParams} from "react-router-dom";
import YouTube from "react-youtube";
import "../App.css";
 
const MovieTrailer = ({movies}) => {
    const {id} = useParams();
    let idmovie = Number (id);
    const movie = movies.find ( (elem) => elem.id === idmovie);
    const options ={
        height : "450",
        width: "800",
    };

  return (
    <div className="movies_container">
     <div style={{margin : "1rem auto"}} >
         <Button className="addbutton" variant="outlined">
          <Link to="/">
              go back to home page</Link>
        </Button>
        </div>
        <div className="trailer_container">
            <div className="trailer_img_video">
                <img className="trailer_img" src={movie.posterURL} alt= "poster"/>
                <YouTube videoId= {movie.videoURL} opts={options}/>
                </div>
                <div className="trailer_description">
                    <h3>overview:</h3>
                   <p>{movie.description}</p> 
                    </div>
                
              </div>
        
        
        
        </div>
  );
  };


export default MovieTrailer;