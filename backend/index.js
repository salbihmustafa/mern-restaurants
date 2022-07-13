import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000; //access from .env

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
    await RestaurantsDAO.injectDB(client);
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    }) //app.listen is how you start web server
});