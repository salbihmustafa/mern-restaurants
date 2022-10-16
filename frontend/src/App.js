import './App.scss';
import {useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom";

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
            <Navbar logout={logout} user={user}/>
            <Routes>
                <Route path='*' element={<Navigate to='/restaurants' replace/>}/>
                <Route exact path={'/restaurants'} element={<RestaurantsList/>}/>
                <Route exact path='/restaurants/:id/review'
                       element={<AddReview user={user}/>}/>
                <Route exact path='/restaurants/:id'
                       element={<Restaurant user={user}/>}/>
                <Route exact path='/login'
                       element={<Login login={login}/>}/>
            </Routes>
        </div>
    );
}

export default App;
