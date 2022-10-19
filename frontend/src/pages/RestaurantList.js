import {Row} from "react-bootstrap";
import RestaurantCard from "../components/Cards/RestaurantCard";

const RestaurantList = () => {

    return (
        <>
            <Row>
                <div>Search Bar</div>
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