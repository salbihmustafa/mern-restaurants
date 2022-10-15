import {useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navigation/Navbar";
import AddReview from "./components/add-review";
import RestaurantsList from "./components/restaurants-list";
import Restaurant from "./components/restaurant";
import Login from "./components/login";

function App() {
    const [user, setUser] = useState(null);

    const login = async (user = null) => {
        setUser(user);
    }

    const logout = async () => {
        setUser(null);
    }

    return (
        <div className="App">
            <Router>
                <Navbar logout={logout} user={user}/>

                <div className="container mt-3">
                    <Routes>
                        <Route exact path={'/restaurants'} element={<RestaurantsList />}/>
                        <Route exact path='/restaurants/:id/review'
                               render={(props) => <AddReview {...props} user={user}/>}/>
                        <Route exact path='/restaurants/:id'
                               render={(props) => <Restaurant {...props} user={user}/>}/>
                        <Route exact path='/login'
                               render={(props) => <Login {...props} login={login}/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
