import APIResponse from "../entites/APIResponse";
import api from "./api";

export const CACHE_KEY_PLATFORM = ["platforms"];

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface APIPlatformsResponse  extends APIResponse<Platform> {}

class PlatformService {
    private url = "platforms";

    getAll = () => {
        return api
            .get<APIPlatformsResponse>(this.url + "/lists/parents")
            .then((res) => res.data);
    };

    get = (genreId: number) => {
        return api
            .get<Platform>(this.url + "/" + genreId)
            .then((res) => res.data);
    };
}

export default new PlatformService();
