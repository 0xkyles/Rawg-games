import genreService, { APIGenresResponse } from "../services/genreService";
import useData from "./useData";

const useGenres = () =>
    useData<APIGenresResponse>({
        requestFunction: genreService.getAll,
    });

export default useGenres;
