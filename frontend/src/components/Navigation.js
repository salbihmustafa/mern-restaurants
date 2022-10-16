import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Navigation = ({logout, user}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/restaurants">Restaurant Reviews</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to={"/restaurants"}>
                            <Nav.Link>Restaurants</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        {user ? (
                            <Nav.Link onClick={logout}>
                                Logout {user.name}
                            </Nav.Link>
                        ) : (
                            <LinkContainer to={"/login"}>
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation;