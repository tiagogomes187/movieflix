import { Route, Switch } from "react-router-dom";
import Login from "./Login";

const Auth = () => {
    return(
        <div className="auth-form-container">
            <Switch>
                <Route path="/auth/login">
                    <Login/>
                </Route>
            </Switch>
        </div>
    );
}

export default Auth;