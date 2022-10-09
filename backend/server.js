import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js"; //where all the routes will be

const app = express(); //using this to make our server

app.use(cors()); //use middleware
app.use(express.json()); //server can accept json in a body of a request

app.use("/api/v1/restaurants", restaurants); //url people will go to
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); //if user goes to a different url, "*" wild card

export default app; //export as a module, so we can access this from the database