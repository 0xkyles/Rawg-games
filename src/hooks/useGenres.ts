import { genres } from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import genreService, {
    CACHE_KEY_GENRE,
    Genre,
} from "../services/genreService";
import APIResponse from "../entites/APIResponse";

const useGenres = () =>
    useQuery<APIResponse<Genre>, Error>({
        queryFn: genreService.getAll,
        queryKey: CACHE_KEY_GENRE,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: genres,
    });

export default useGenres;
