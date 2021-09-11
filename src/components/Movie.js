import React from "react";
import { useParams } from "react-router";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid";
import Spinner from "./Spinner";
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";

//hook
import { useMovieFetch } from "../hooks/useMovieFetch";

//Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  console.log(movie);
  if (loading) return <Spinner />;
  if (error) return <div>Somthing Went Wrong</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie}/>
    </>
  );
};

export default Movie;
