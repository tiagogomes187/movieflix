import { AxiosRequestConfig } from 'axios';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';
import MovieDetailsLoader from './MovieDetailsLoader';
import MovieInfoLoader from './MovieInfoLoader';
import './styles.css';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    setIsLoading(true);
    requestBackend(params)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url:`/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config)
    .then((response) => {
      setReviews(response.data);
    });
  },[movieId]);


  const handleonInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  }


  return (
    <div className="movie-details-container">
      <div className="base-card movie-details-card">
        <div className="row">
          <div className="col-xl-6">
            {isLoading ? (
              <MovieInfoLoader />
            ) : (
              <div className="img-container">
                <img src={movie?.imgUrl} alt={movie?.title} />
              </div>
            )}
          </div>

          <div className="col-xl-6">
            {isLoading ? (
              <MovieDetailsLoader />
            ) : (
              <>
                <div className="title-subtitle-container">
                  <h1>{movie?.title}</h1>
                  <h6>{movie?.year}</h6>
                  <p>{movie?.subTitle}</p>
                </div>
                <div className="sinopse-container">
                  <p>{movie?.synopsis}</p>
                </div>
              </>
            )}
          </div>
        </div>

  
      </div>
      <div>
          {hasAnyRoles(['ROLE_MEMBER']) && (
            <ReviewForm movieId={movieId} onInsertReview={handleonInsertReview}/>
          )}

          <ReviewListing reviews={reviews}/>
        </div>
    </div>
  );
};

export default MovieDetails;
