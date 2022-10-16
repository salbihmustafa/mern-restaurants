import {Container, Row} from "react-bootstrap";
import RestaurantCard from "../components/Cards/RestaurantCard";

const RestaurantList = () => {

    return (
        <>
            <Container className="pb-5 pt-5">
                <Row>Search Bar</Row>
            </Container>
            <Container>
                <Row>
                    <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American" addressText="2780 Stillwell Avenue, 11224"/>
                </Row>
            </Container>
        </>
    )
}

export default RestaurantList;