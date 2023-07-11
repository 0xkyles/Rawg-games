import { useQuery } from "@tanstack/react-query";
import platformService, {
    APIPlatformsResponse,
    CACHE_KEY_PLATFORM,
} from "../services/platformService";
import platforms from "../data/platforms";

const usePlatforms = () => {
    return useQuery<APIPlatformsResponse, Error>({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms,
    });
};

export default usePlatforms;
