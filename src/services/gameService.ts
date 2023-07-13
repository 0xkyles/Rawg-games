import { AxiosRequestConfig } from "axios";
import api from "./api";
import { Platform } from "./platformService";

export const CACHE_GAME_KEY = ["games"];

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    slug: string;
}

export interface APIGamesResponse {
    count: number;
    next: string | null;
    results: Game[];
}

interface APIGameResponse {
    name: string;
    slug: string;
    description_raw: string;
    metacritic: number;
}

class GameService {
    getAll(requestConfig?: AxiosRequestConfig) {
        return api
            .get<APIGamesResponse>("/games", requestConfig)
            .then((res) => res.data);
    }

    get = (gameId: number) => {
        return api
            .get<APIGameResponse>("/games/" + gameId)
            .then((res) => res.data);
    };
}

export default new GameService();
