import gameService, { APIGamesResponse } from "../services/gameService";
import { Genre } from "../services/genreService";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
    useData<APIGamesResponse>({
        requestFunction: () =>
            gameService.getAll({ params: { genres: selectedGenre?.id } }),
        dependancies: [selectedGenre?.id],
    });

export default useGames;
