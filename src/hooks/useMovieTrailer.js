import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

//Fetch Trailer Video && update the store with trailer video data
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  //Memoization to save API calls
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //Fetch Trailer
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    //Filter out the trailers
    const filterData = json.results.filter((video) => video.type === "Trailer");

    //Considering the first one as the trailer video
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);

    //Update the store
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
