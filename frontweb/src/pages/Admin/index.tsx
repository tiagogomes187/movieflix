import PrivateRoute from "components/PrivateRoute";
import Users from "pages/Home/Auth/User"
import { Switch } from "react-router-dom"

const Admin = () =>{
    return (
        <div className="admin-container">
            
            <div className="admin-content">
                <div>
                <Switch>
                    <PrivateRoute path="/admin/users" roles={["ROLE_MEMBER"]}>
                        <Users/>
                    </PrivateRoute>
                </Switch>
                </div>

            </div>

            
        </div>
    )
}

export default Admin;