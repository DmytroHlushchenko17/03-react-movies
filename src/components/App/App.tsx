import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

export default function App() {
  return (
    <>
      <SearchBar onSubmit={} />
      <Loader />
      <MovieGrid onSelect={} />
      <ErrorMessage />
    </>
  );
}
