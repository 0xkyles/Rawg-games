import gameService, { CACHE_GAME_KEY } from "../services/gameService";
import { useQuery } from "@tanstack/react-query";

const useGame = (gameId: number) =>
    useQuery({
        queryKey: [...CACHE_GAME_KEY, gameId],
        queryFn: () => gameService.get(gameId),
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
    });

export default useGame;
