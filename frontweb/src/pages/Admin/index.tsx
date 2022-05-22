import Navbar from "components/Navbar"
import Users from "pages/Home/Auth/User"
import { Route, Switch } from "react-router-dom"

const Admin = () =>{
    return (
        <div className="admin-container">
            
            <div className="admin-content">
                <Switch>
                    <Route path="/admin/users">
                        <Users/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Admin;