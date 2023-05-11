import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { key } from "../../common/apis/movieApiKey";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey = ${key}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      console.log("response from api", response);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchMovies = async();
  });
  return (
    <div>
      <div className="banner"></div>;
      <MovieListing />
    </div>
  );
};

export default Home;
