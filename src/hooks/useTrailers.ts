import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

const useTrailers = (gameId: number) => {
    return useQuery({
        queryKey: ["trailers", gameId],
        queryFn: () => gameService.getTrailer(gameId),
    });
};

export default useTrailers;
