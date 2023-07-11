import { genres } from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import genreService, {
    APIGenresResponse,
    CACHE_KEY_GENRE,
} from "../services/genreService";

const useGenres = () =>
    useQuery<APIGenresResponse, Error>({
        queryFn: genreService.getAll,
        queryKey: CACHE_KEY_GENRE,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: genres,
    });

export default useGenres;
