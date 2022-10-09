//This file is the main file that connects to the database

import app from "./server.js"; //import the module (inside server.js)
import mongodb from "mongodb"; //because we will access mongodb
import dotenv from "dotenv"; //allows us to access our .env variables
import RestaurantsDAO from "./dao/restaurantsDAO.js"; //data access object
import ReviewsDAO from "./dao/reviewsDAO.js";

dotenv.config(); 
const MongoClient = mongodb.MongoClient; //Access our mongo client from our mongodb

const port = process.env.PORT || 8000; //access from .env - to access env you do "process.env.<whatever is in the env file)"

//connect to the database
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50, //amount of people can connect at one time
        wtimeoutMS: 2500, //time out after this many millisecond
        useNewUrlParser: true 
    }
)
.catch(err => {
    console.error(err.stack);
    process.exit(1);
})
.then(async client => {
    //once we have connected to the database
    await RestaurantsDAO.injectDB(client);
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => { //how we start our web server
        console.log(`listening on port ${port}`)
    }) //app.listen is how you start web server
});