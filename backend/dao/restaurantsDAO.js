let restaurants; //use to store a reference to the database

export default class RestaurantsDAO {
  //when server gets started, injectDB will get called
  static async injectDB(conn) {
    if (restaurants) {
      return; //if instance of restaurants is already filled, then return
    }
    try {
      //if not filled, then fill it here
      restaurants = await conn
        .db(process.env.RESTREVIEWS_NS)
        .collection("restaurants"); //grab the collection of restaurants in the database
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in restaurantsDAO: ${e}`
      );
    }
  }

  static async getRestaurants({
    filters = null, //this is made up option
    page = 0, //this is made up option (first page)
    restaurantsPerPage = 20, //this is made up option (20 restaurants per page)
  } = {}) {
    let query;
    if (filters) {
      //search query - $eq is equals - $text - anywhere in the text, search for it.
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } }; //search by name (text search will need to be set up in mongodb)
      } else if ("cuisine" in filters) {
        query = { "cuisine": { $eq: filters["cuisine"] } }; //search by cuisine
      } else if ("zipcode" in filters) {
        query = { "address.zipcode": { $eq: filters["zipcode"] } }; //search by zipcode
      }
    }

    let cursor;

    try {
      cursor = await restaurants.find(query); //this will find all the restaurants from the database with the query, if no query it will return all restaurants
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }

    const displayCursor = cursor
      .limit(restaurantsPerPage)
      .skip(restaurantsPerPage * page); //the skip will show us the page number

    try {
      const restaurantsList = await displayCursor.toArray(); //return the array or the list
      const totalNumRestaurants = await restaurants.countDocuments(query); //count the number of documents in query and return total number of restaurants

      return { restaurantsList, totalNumRestaurants };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { restaurantsList: [], totalNumRestaurants: 0 };
    }
  }
}
