import APIResponse from "../entites/APIResponse";

import api from "./api";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const CACHE_KEY_GENRE = ["genres"];

class GenreService {
    private url = "/genres";

    getAll = () => {
        return api.get<APIResponse<Genre>>(this.url).then((res) => res.data);
    };
}

export default new GenreService();
