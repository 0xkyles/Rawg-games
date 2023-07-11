import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gameService, { APIGamesResponse } from "../services/gameService";

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<APIGamesResponse, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({ pageParam }) =>
            gameService.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.search,
                    page: pageParam,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 60 * 60 * 1000,
    });

export default useGames;
