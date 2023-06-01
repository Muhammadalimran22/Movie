import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { AiOutlineArrowRight } from "react-icons/ai";
import MovieCard from "../components/Card/MovieCard";
import Header from "../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../redux/actions/movieActions";

function Home() {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Row className="mx-4 py-3">
          <Col xs={12} md={8}>
            <div className="">
              <h1 style={{ color: "red" }}>Populer Movie</h1>
            </div>
          </Col>
        </Row>

        <div className="d-flex flex-wrap justify-content-center">
          {movies &&
            movies?.length > 0 &&
            movies.map((movie, i) => (
              <MovieCard
                key={i}
                title={movie.title}
                poster={movie.poster_path}
                to={`/users/detail/${movie.id}`}
              />
            ))}
        </div>
      </Container>
    </>
  );
}

export default Home;
