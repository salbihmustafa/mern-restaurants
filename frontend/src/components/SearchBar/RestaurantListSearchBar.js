import {Dropdown, Form, Button} from "react-bootstrap";

const RestaurantListSearchBar = () => {
    return (
        <>
            <Form className="d-flex">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className="searchbar-dropdown-toggle">
                        Actions
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 search-bar"
                    aria-label="Search"
                />
                <Button>Search</Button>
            </Form>
        </>
    )
}

export default RestaurantListSearchBar;