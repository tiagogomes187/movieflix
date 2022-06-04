import { ReactComponent as BannerImage } from 'assets/images/banner.svg';
import { hasAnyRoles } from 'util/requests';
import Login from './Auth/Login';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">

      <h1>Resultado = {hasAnyRoles(['ROLE_MEMBER'])? 'SIM':'NÃO'}</h1>

      <div className="home-card">
        <div className="home-content-container">
          <h1>Avalie Filmes</h1>
          <p>Diga o que você achou do seu filme favorito</p>
        </div>
        <div className="home-image-container">
          <BannerImage />
        </div>
      </div>
      <div className="card-login">
        <Login />
      </div>
    </div>
  );
};

export default Home;
