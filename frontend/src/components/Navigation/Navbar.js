import {Link} from "react-router-dom";

const Navbar = ({logout, user}) => {
    return (
        <>
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
        </>
    )
}

export default Navbar;