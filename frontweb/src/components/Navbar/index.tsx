import './styles.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <a href="/" className="nav-logo-text">
            <h4>MovieFlix</h4>
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <a href="link">Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
