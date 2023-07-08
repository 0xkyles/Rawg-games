import { useEffect, useState } from "react";
import gameService, { Game } from "../services/gameService";

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        const { req, cancel } = gameService.getAll();
        req.then((data) => {
            setGames(data.results);
            setIsLoading(false);
        }).catch((err) => {
            setError(err.message);
            setIsLoading(false);
        });

        return () => cancel();
    });

    return { games, error, isLoading, setGames, setError };
};

export default useGames;