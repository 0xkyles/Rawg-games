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

interface Screenshot {
    id: number;
    image: string;
    width: number;
    height: number;
}

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
    private url = "/games";

    getAll(requestConfig?: AxiosRequestConfig) {
        return api
            .get<APIResponse<Game>>(this.url, requestConfig)
            .then((res) => res.data);
    }

    get = (gameId: number | string) => {
        return api.get<GameDetails>(this.url + "/" + gameId).then((res) => res.data);
    };

    getTrailer = (gameId: number | string) => {
        return api
            .get<APIResponse<Trailer>>(this.url + "/" + gameId + "/movies")
            .then((res) => res.data);
    };

    getScreenShots = (gameId: number) => {
        return api
            .get<APIResponse<Screenshot>>(this.url + "/" + gameId + "/screenshots")
            .then((res) => res.data);
    };
}

export default new GameService();
