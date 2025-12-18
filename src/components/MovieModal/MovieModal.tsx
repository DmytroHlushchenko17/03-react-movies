import type { Movie } from "../types/movie";
import css from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ onClose, movie }: MovieModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <img
          src={
            movie.backdrop_path
              ? `image.tmdb.org{movie.backdrop_path}`
              : `image.tmdb.org{movie.poster_path}`
          }
          alt={movie.title}
          className={css.image}
        />

        <div className={css.content}>
          <h2 className={css.title}>{movie.title}</h2>
          <p className={css.overview}>{movie.overview}</p>
          <div className={css.details}>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
