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
        return api
            .get<APIGamesResponse>("/games", {
                ...requestConfig,
            })
            .then((res) => res.data);
    }
}

export default new GameService();
