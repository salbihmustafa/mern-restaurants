import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

app.use(cors()); //use middleware
app.use(express.json()); //server can accept json in a body of a request

app.use("/api/v1/restaurants", restaurants); //url people will go to
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); //if user goes to a different url

export default app;