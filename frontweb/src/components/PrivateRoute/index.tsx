import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from 'util/requests';

type Props = {
  children: React.ReactNode;
  path: string;
};

const PrivateRoute = ({ children, path }: Props) => {
  return (
    <Route
      path={path}
      render={({ location }) =>
        !isAuthenticated() ? (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        ) : (
          <>{children}</>
        )
      }
    />
  );
};

export default PrivateRoute;
