import api from "./api";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

export const CACHE_KEY_GENRE = ["genres"];

export interface APIGenresResponse {
    count: number;
    results: Genre[];
}

class GenreService {
    getAll = () => {
        return api.get<APIGenresResponse>("/genres").then((res) => res.data);
    };
}

export default new GenreService();
