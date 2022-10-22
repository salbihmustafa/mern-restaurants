import {Dropdown, DropdownButton, Form, Button} from "react-bootstrap";

const RestaurantListSearchBar = () => {
    const handleDropdownSelect = (evt) => {
        console.log(evt);
    }

    return (
        <>
            <Form className="d-flex searchbar-form-container">
                <DropdownButton className="searchbar-dropdown-toggle" title="" onSelect={handleDropdownSelect}>
                    <Dropdown.Item eventKey='Action'>Action</Dropdown.Item>
                    <Dropdown.Item eventKey='Another Action'>Another action</Dropdown.Item>
                    <Dropdown.Item eventKey='Something else'>Something else</Dropdown.Item>
                </DropdownButton>
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