import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { BASE_URL } from 'util/requests';
import './styles.css';

const MovieDetails = () => {

  const [ movie, setMovie] = useState<Movie>();


  useEffect(() => {
     axios.get(BASE_URL + "/movies/2")
   .then(response => {
     setMovie(response.data);
   });

  }, []);
 
    return (    
        <div className="movie-details-container">
          <div className="base-card movie-details-card">
            <div className="row">
              <div className="col-xl-6">
                <div className="img-container">
                  <img
                    src={movie?.imgUrl}
                    alt={movie?.title}
                   
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="title-subtitle-container">
                  <h1>{movie?.title}</h1>
                  <h6>{movie?.year}</h6>
                  <p>{movie?.subTitle}</p>
                </div>
                <div className="sinopse-container">
                  <p>{movie?.synopsis}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    );
}

export default MovieDetails;