import express from "express";
import RestaurantsCtrl from "./restaurants.controller.js"

const router = express.Router();

router.route("/").get(RestaurantsCtrl.apiGetRestaurants); //demonstration route

export default router;