import http from "../HttpCommon";

const RestaurantDataService = () => {
    const getAll = (page = 0) => {
        return http.get(`?page=${page}`);
    }

    const get = (id) => {
        return http.get(`/id/${id}`);
    }

    const find = (query, by = "name", page = 0) => {
        return http.get(`?${by}=${query}&page=${page}`);
    }

    const createReview = (data) => {
        return http.post("/review", data);
    }

    const updateReview = (data) => {
        return http.put("/review", data)
    }

    const deleteReview = (id) => {
        return http.delete(`/review?id=${id}`);
    }

    const getCuisines = () => {
        return http.get(`/cuisines`);
    }
}

export default new RestaurantDataService();