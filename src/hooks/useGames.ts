import gameService, { APIGamesResponse } from "../services/gameService";
import useData from "./useData";

const useGames = () =>
    useData<APIGamesResponse>({
        requestFunction: gameService.getAll,
    });

export default useGames;
