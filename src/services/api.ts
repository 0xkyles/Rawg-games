import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "0e0dc67c38924654bc38be5eafe23e0c",
    },
});
