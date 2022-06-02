import { AuthContext } from 'AuthContext';
import { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import history from 'util/history';
import { getTokenData, isAuthenticated, removeAuthData } from 'util/requests';
import './styles.css';

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

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

          <div className="nav-login-logout">
            {authContextData.authenticated ? (
              <>
                <span className="nav-username">
                  {authContextData.tokenData?.user_name}
                </span>
                <a href="#logout" onClick={handleLogoutClick}>
                  SAIR
                </a>
              </>
            ) : (
              <Link to="/auth/login">LOGIN</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
