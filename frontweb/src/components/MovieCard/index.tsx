import './styles.css';

import MovieImg from 'assets/images/movie.png';

const MovieCard = () => {
  return (
   
      <div className="base-card movie-card">
        <div className="card-top-container"> 
          <img src={MovieImg} alt="Nome do Filme" />
        </div>
        <div className="card-bottom-container">
          <h6>Titulo do Filme</h6>
          <h3>2013</h3>
          <p>Descriçaõ do Filme</p>
        </div>
      </div>
    
  );
};

export default MovieCard;
