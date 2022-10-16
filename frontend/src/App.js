import './App.scss';
import {useState} from "react";
import {Route, Routes, Navigate} from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import AddReview from "./components/AddReview";
import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import Login from "./components/Login";

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
                <Route exact path={'/restaurants'} element={<RestaurantList/>}/>
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
