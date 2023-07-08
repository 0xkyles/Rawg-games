import { useEffect, useState } from "react";
import genreService, { Genre } from "../services/genreService";
import { CanceledError } from "axios";

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const { req, cancel } = genreService.getAll();
        req.then((data) => {
            setGenres(data.results);
            setIsLoading(false);
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false);
        });

        return () => cancel();
    }, []);

    return { genres, error, isLoading };
};

export default useGenres;
