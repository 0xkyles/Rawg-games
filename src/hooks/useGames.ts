import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { APIGamesResponse } from "../services/gameService";

const useGames = (gameQuery: GameQuery) =>
    useQuery<APIGamesResponse, Error>({
        queryKey: ["games", gameQuery],
        queryFn: () =>
            gameService.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                },
            }),
    });

export default useGames;
