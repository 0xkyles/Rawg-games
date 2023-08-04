import APIResponse from "../entites/APIResponse";
import api from "./api";

export const CACHE_KEY_PLATFORM = ["platforms"];

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

class PlatformService {
    private url = "platforms";

    getAll = () => {
        return api
            .get<APIResponse<Platform>>(this.url + "/lists/parents")
            .then((res) => res.data);
    };

    get = (genreId: number) => {
        return api
            .get<Platform>(this.url + "/" + genreId)
            .then((res) => res.data);
    };
}

export default new PlatformService();
