import { AxiosRequestConfig } from "axios";
import api from "./api";
import { Platform } from "./platformService";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export interface APIGamesResponse {
    count: number;
    results: Game[];
}

class GameService {
    getAll(requestConfig?: AxiosRequestConfig) {
        const controller = new AbortController();
        const req = api
            .get<APIGamesResponse>("/games", {
                signal: controller.signal,
                ...requestConfig,
            })
            .then((res) => res.data);

        return { req, cancel: () => controller.abort() };
    }
}

export default new GameService();
