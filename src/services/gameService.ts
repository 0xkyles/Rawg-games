import api from "./api";

export interface Game {
    id: number;
    name: string;
}

interface APIGamesResponse {
    count: number;
    results: Game[];
}

class GameService {
    getAll() {
        const controller = new AbortController();
        const req = api
            .get<APIGamesResponse>("/games", { signal: controller.signal })
            .then((res) => res.data);

        return { req, cancel: () => controller.abort() };
    }
}

export default new GameService();
