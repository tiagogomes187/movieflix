import { ReactComponent as BannerImage } from 'assets/images/banner.svg';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Catálogo de filmes</h1>
            <p>
              Aqui você encotra o seu filme favorito, podendo até avaliar o seu
              filme preferido.
            </p>
          </div>
          <div className="home-image-container">
            <BannerImage />
          </div>
          <div className="btn-busca">
            <Link to="/movies">
              <ButtonIcon text="Inicie agora a sua busca" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
