import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { APIGamesResponse } from "../services/gameService";

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<APIGamesResponse, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam }) =>
            gameService.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                    page: pageParam,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });

export default useGames;
