import { useInfiniteQuery } from "@tanstack/react-query";
import gameService, {
    APIGamesResponse,
    CACHE_GAME_KEY,
} from "../services/gameService";
import { GameQuery } from "../stores/gameQueryStore";

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<APIGamesResponse, Error>({
        queryKey: [...CACHE_GAME_KEY, gameQuery],
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
