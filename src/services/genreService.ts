import api from "./api";

export interface Genre {
    id: number;
    name: string;
}

interface APIGenresResponse {
    count: number;
    results: Genre[];
}

class GenreService {
    getAll() {
        const controller = new AbortController();
        const req = api
            .get<APIGenresResponse>("/genres", { signal: controller.signal })
            .then((res) => res.data);

        return { req, cancel: () => controller.abort() };
    }
}

export default new GenreService();
