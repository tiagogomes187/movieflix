import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary main-nav">
        <div className="container-fluid">
          <NavLink
            to="/"
            activeClassName="active"
            exact
            className="nav-logo-text"
          >
            <h4>MovieFlix</h4>
          </NavLink>
          <div className="menu-sair">
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
