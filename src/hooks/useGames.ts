import { useInfiniteQuery } from "@tanstack/react-query";
import gameService, {
    CACHE_GAME_KEY,
    Game,
} from "../services/gameService";
import { GameQuery } from "../stores/gameQueryStore";
import APIResponse from "../entites/APIResponse";

const useGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<APIResponse<Game>, Error>({
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
