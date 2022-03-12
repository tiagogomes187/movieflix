import { ReactComponent as BannerImage } from 'assets/images/banner.svg';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
          <div className="home-image-container">
            <BannerImage />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
