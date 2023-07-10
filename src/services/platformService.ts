import api from "./api";

export const CACHE_KEY_PLATFORM = ["platforms"];

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface APIPlatformsResponse {
    count: number;
    results: Platform[];
}

class PlatformService {
    getAll = () => {
        return api
            .get<APIPlatformsResponse>("/platforms/lists/parents")
            .then((res) => res.data);
    };
}

export default new PlatformService();
