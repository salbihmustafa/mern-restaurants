import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let reviews;

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return; //if instance of restaurants is already filled, then return
    }

    try {
      //if reviews collection doesn't exist, this will create it.
      reviews = await conn.db(process.env.RESTREVIEWS_NS).collection("reviews");
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`);
    }
  }

  static async addReview(restaurantId, userInfo, review, date) {
    try {
      const reviewDoc = {
        name: userInfo.name,
        user_id: userInfo._id,
        date: date,
        text: review,
        restaurant_id: ObjectId(restaurantId), //mongodb object id
      };

      return await reviews.insertOne(reviewDoc); //inserted into database
    } catch (e) {
      console.error(`Unable to post review: ${e}`);
      return { error: e };
    }
  }

  static async updateReview(reviewId, userId, text, date) {
    try {
      const updateResponse = await reviews.updateOne(
        { user_id: userId, _id: ObjectId(reviewId) }, //look for the review with userid and object id
        { $set: { text: text, date: date } } //then set the text and date
      );

      return updateResponse;
    } catch (e) {
      console.error(`Unable to update review: ${e}`);
      return { error: e };
    }
  }

  static async deleteReview(reviewId, userId) {
    try {
      const deleteResponse = await reviews.deleteOne({
        _id: ObjectId(reviewId),
        user_id: userId,
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
      return { error: e };
    }
  }
}
