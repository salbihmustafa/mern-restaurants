import {Dropdown, DropdownButton, Form, Button} from "react-bootstrap";
import {useState, useEffect} from "react";
import dropDownValues from "../../DropDown/dropDownValues";

const RestaurantListSearchBar = () => {
    const {restSearchPlaceholder} = dropDownValues();
    const [searchPlaceHolder, setSearchPlaceHolder] = useState(restSearchPlaceholder.name);

    const handleDropdownSelect = (value) => {
        if(value === "name"){
            setSearchPlaceHolder(restSearchPlaceholder.name);
        }else if(value === "zip"){
            setSearchPlaceHolder(restSearchPlaceholder.zip);
        }
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
                    placeholder={searchPlaceHolder}
                    className="me-2 search-bar"
                    aria-label="Search"
                />
                <Button>Search</Button>
            </Form>
        </>
    )
}

export default RestaurantListSearchBar;