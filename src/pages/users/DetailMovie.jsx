import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import NavbarComponent from "../../components/Header/NavbarComponent";
import { StarFill } from "react-bootstrap-icons";
import "../../style/Detail.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovieDetails } from "../../redux/actions/movieActions";

function DetailMovie() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movieDetails } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  if (!movieDetails) {
    // Jika movieDetails masih null, tampilkan indikator loading atau pesan lainnya.
    return <div>Loading...</div>;
  }

  const backdropPath = movieDetails.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
    : "";

  return (
    <>
      <NavbarComponent />
      <Carousel controls={false} className="w-100">
        <Carousel.Item>
          <img className="d-block w-100" src={backdropPath} alt="First slide" />
          <Carousel.Caption className="text-start">
            <h1 className="">{movieDetails?.title}</h1>
            <p className="">
              {movieDetails?.genres &&
                movieDetails?.genres?.length > 0 &&
                movieDetails?.genres?.map((genre, i) => {
                  return i === movieDetails?.genres.length - 1
                    ? genre.name
                    : `${genre.name}, `;
                })}
            </p>
            <p className="">{movieDetails?.overview}</p>
            <p className="text-warning fs-4">
              <StarFill className="Icon-star" />
              {movieDetails?.vote_average
                ? movieDetails.vote_average.toFixed(1)
                : "-"}
            </p>
            <Button className="Movie-caption-button mb-5" variant="danger">
              Watch Trailer
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default DetailMovie;
