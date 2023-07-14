import { AxiosRequestConfig } from "axios";
import api from "./api";
import { Platform } from "./platformService";
import { Genre } from "./genreService";
import APIResponse from "../entites/APIResponse";

export const CACHE_GAME_KEY = ["games"];

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    slug: string;
}

export interface APIGamesResponse extends APIResponse<Game> {}

interface Trailer {
    id: number;
    name: string;
    preview: string;
    data: {
        480: string;
        max: string;
    };
}

interface Publishers {
    id: number;
    name: string;
}

export interface GameDetails extends Game {
    description_raw: string;
    genres: Genre[];
    publishers: Publishers[];
}

class GameService {
    getAll(requestConfig?: AxiosRequestConfig) {
        return api
            .get<APIGamesResponse>("/games", requestConfig)
            .then((res) => res.data);
    }

    get = (gameId: number | string) => {
        return api.get<GameDetails>("/games/" + gameId).then((res) => res.data);
    };

    getTrailer = (gameId: number | string) => {
        return api
            .get<APIResponse<Trailer>>("/games/" + gameId + "/movies")
            .then((res) => res.data);
    };
}

export default new GameService();
