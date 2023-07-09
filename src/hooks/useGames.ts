import { GameQuery } from "../App";
import gameService, { APIGamesResponse } from "../services/gameService";
import useData from "./useData";

const useGames = (gameQuery: GameQuery) =>
    useData<APIGamesResponse>({
        requestFunction: () =>
            gameService.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                },
            }),
        dependancies: [gameQuery.genre?.id, gameQuery.platform?.id],
    });

export default useGames;
