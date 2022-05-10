import './styles.css';

const MovieDetails = () => {
    return (
    
        <div className="movie-details-container">
          <div className="base-card movie-details-card">
            <div className="row">
              <div className="col-xl-6">
                <div className="img-container">
                  <img
                    src="https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg"
                    alt="O Retorno do Rei"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="title-subtitle-container">
                  <h1>O Retorno do Rei</h1>
                  <h6>2013</h6>
                  <p>O olho do inimigo está se movendo.</p>
                </div>
                <div className="sinopse-container">
                  <p>O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    );
}

export default MovieDetails;