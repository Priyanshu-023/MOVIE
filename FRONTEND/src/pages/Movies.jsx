import { dummyShowsData } from "../assets/assets";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";

const Movies = () => {
  return (
    <div className="relative px-36 pt-30 pb-20 min-h-[80vh]">
      <BlurCircle top="150px" left="0px" />
      <BlurCircle bottom="50px" right="50px" />

      <h1 className="text-lg font-medium mb-8">Now Showing</h1>

      {dummyShowsData.length === 0 ? (
        <p className="text-center text-gray-400 mt-20">No movies available.</p>
      ) : (
        <div className="grid grid-cols-4 gap-6">
          {dummyShowsData.map((movie) => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
