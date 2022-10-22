import {Row} from "react-bootstrap";
import RestaurantCard from "../components/Cards/RestaurantCard";
import RestaurantListSearchBar from "../components/SearchBar/RestaurantListSearchBar";

const RestaurantList = () => {

    return (
        <>
            <Row>
                <RestaurantListSearchBar />
            </Row>
            <Row className="rest-list-container">
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
                <RestaurantCard restaurantTitle="Riviera Caterer" cuisineText="American"
                                addressText="2780 Stillwell Avenue, 11224"/>
            </Row>
        </>
    )
}

export default RestaurantList;