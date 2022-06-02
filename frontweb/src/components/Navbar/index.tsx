import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import history from 'util/history';
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
  TokenData,
} from 'util/requests';
import './styles.css';

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
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

          <div>
            {authData.authenticated ? (
              <>
                <span>{authData.tokenData?.user_name}</span>
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
