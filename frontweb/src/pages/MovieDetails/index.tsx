import  { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {

  const { movieId } = useParams<UrlParams>();

  const [ movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const params : AxiosRequestConfig ={
      url: `/movies/${movieId}`,
      withCredentials: true,
      params: {
        page: 0, 
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

 
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