import RestaurantsDAO from "../dao/restaurantsDAO.js";

export default class RestaurantsController {
    static async apiGetRestaurants(req, res, next) {
        const restaurantsPerPage = req.query.restaurantsPerPage ? parseInt(req.query.restaurantsPerPage, 10) : 20; // convert to int otherwise default to 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0; // convert to int otherwise default page to 0

        let filters = {}
        if (req.query.cuisine) {
            filters.cuisine = req.query.cuisine
        } else if (req.query.zipcode) {
            filters.zipcode = req.query.zipcode
        } else if (req.query.name) {
            filters.name = req.query.name
        }

        //get what we created in restaurantsDAO.js by passing in filters, page, and restaurantsPerPage
        const { restaurantsList, totalNumRestaurants } = await RestaurantsDAO.getRestaurants({
            filters,
            page,
            restaurantsPerPage,
        })

        //create response to send back to whomever sent the info to the URL
        let response = {
            restaurants: restaurantsList,
            page: page,
            filters: filters,
            entries_per_page: restaurantsPerPage,
            total_results: totalNumRestaurants,
        }

        res.json(response); //send response
    }

    static async apiGetRestaurantById(req, res, next) {
        try{
            let id = req.params.id || {};
            let restaurant = await RestaurantsDAO.getRestaurantByID(id);
            if(!restaurant) {
                res.status(404).json({error: "Not found"});
                return;
            }
            res.json(restaurant);
        } catch(e) {
            console.log(`api ${e}`);
            res.status(500).json({error:e});
        }
    }

    static async apiGetRestaurantCuisines(req, res, next) {
        try {
            let cuisines = await RestaurantsDAO.getCuisines();
            res.json(cuisines);
        } catch (e) {
            console.log(`api ${e}`);
            res.status(500).json({ error: e });
        }
    }
}