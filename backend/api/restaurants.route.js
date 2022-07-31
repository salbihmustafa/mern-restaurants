import express from "express";
//import RestaurantsCtrl from "./restaurants.controller.js"

const router = express.Router(); //so people can go to multiple routes which will be added

router.route("/").get((req, res) => res.send("hello world")); //demonstration route

export default router;