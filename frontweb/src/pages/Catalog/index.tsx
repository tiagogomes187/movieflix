import MovieCard from 'components/MovieCard';


const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
