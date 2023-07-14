import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

const useScreenshots = (gameId: number) => {
    return useQuery({
        queryKey: ["screenshots", gameId],
        queryFn: () => gameService.getScreenShots(gameId),
        staleTime: 1000 * 60 * 60,
    });
};

export default useScreenshots;
