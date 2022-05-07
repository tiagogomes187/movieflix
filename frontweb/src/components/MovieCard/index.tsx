import './styles.css';

import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
}

const MovieCard = ({ movie } : Props) => {
  return (
   
      <div className="base-card movie-card">
        <div className="card-top-container"> 
          <img src={movie.imgUrl} alt={movie.title} />
        </div>
        <div className="card-bottom-container">
          <h6>{movie.title}</h6>
          <h3>{movie.year}</h3>
          <p>{movie.subTitle}</p>
        </div>
      </div>
    
  );
};

export default MovieCard;
