import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js";
import ReviewsCtrl from "./reviews.controller.js";

const router = express.Router(); //so people can go to multiple routes which will be added

router.route("/").get(RestaurantsCtrl.apiGetRestaurants); //all restaurants
router.route("/id/:id").get(RestaurantsCtrl.apiGetRestaurantById); //will show all restaurants and with reviews
router.route("/cuisines").get(RestaurantsCtrl.apiGetRestaurantCuisines);

router
  .route("/review")
  .post(ReviewsCtrl.apiPostReview)
  .put(ReviewsCtrl.apiUpdateReview)
  .delete(ReviewsCtrl.apiDeleteReview);

export default router;
