import {Dropdown, Form, Button} from "react-bootstrap";

const RestaurantListSearchBar = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" className="searchbar-dropdown-toggle">
                    Actions
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button>Search</Button>
            </Form>
        </>
    )
}

export default RestaurantListSearchBar;