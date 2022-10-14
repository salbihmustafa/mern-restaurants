import {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/add-review";
import RestaurantsList from "./components/restaurants-list";
import Restaurant from "./components/restaurant";
import Login from "./components/login";

function App() {
    const [user, setUser] = useState(null);

    const login = async (user = null) => {
        setUser(user);
    }

    const logout = async (user = null) => {
        setUser(null);
    }

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/restaurants">Restaurant Reviews</a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/restaurants"} className="nav-link">
                                Restaurants
                            </Link>
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <a onClick={logout} className="nav-link">
                                    Logout {user.name}
                                </a>
                            ) : (
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            )}
                        </li>
                    </div>
                </div>
            </nav>

            <div className="container mt-3">
                <Routes>
                    <Route exact path={["/", "/restaurants"]} component={RestaurantsList}/>
                    <Route exact path="/restaurants/:id/review"
                           component={(props) => <AddReview {...props} user={user}/>}/>
                    <Route exact path="/restaurants/:id"
                           component={(props) => <Restaurant {...props} user={user}/>}/>
                    <Route exact path="/login"
                           component={(props) => <Login {...props} login={login}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
