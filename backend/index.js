import app from "./server.js"; //import the module
import mongodb from "mongodb"; //because we will access mongodb
import dotenv from "dotenv"; //allows us to access our .env variables
import RestaurantsDAO from "./dao/restaurantsDAO.js";

dotenv.config(); 
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000; //access from .env

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
    app.listen(port, () => { //how we start our web server
        console.log(`listening on port ${port}`)
    }) //app.listen is how you start web server
});