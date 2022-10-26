import {Dropdown, DropdownButton, Form, Button} from "react-bootstrap";

const RestaurantListSearchBar = () => {
    const handleDropdownSelect = (evt) => {
        console.log(evt);
    }

    return (
        <>
            <Form className="d-flex">
                <DropdownButton className="searchbar-dropdown-toggle" title="" onSelect={handleDropdownSelect}>
                    <Dropdown.Item eventKey='name'>Name</Dropdown.Item>
                    <Dropdown.Item eventKey='zip'>Zip</Dropdown.Item>
                    <Dropdown.Item eventKey='cuisine'>Cuisine</Dropdown.Item>
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