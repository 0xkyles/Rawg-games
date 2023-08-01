import APIResponse from "../entites/APIResponse";
import api from "./api";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const CACHE_KEY_GENRE = ["genres"];

export interface APIGenresResponse extends APIResponse<Genre> {}

class GenreService {
    private url = "/genres";

    getAll = () => {
        return api.get<APIGenresResponse>(this.url).then((res) => res.data);
    };
}

export default new GenreService();
