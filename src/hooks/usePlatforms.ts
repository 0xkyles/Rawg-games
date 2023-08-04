import { useQuery } from "@tanstack/react-query";
import platformService, {
    CACHE_KEY_PLATFORM,
    Platform,
} from "../services/platformService";
import platforms from "../data/platforms";
import APIResponse from "../entites/APIResponse";

const usePlatforms = () => {
    return useQuery<APIResponse<Platform>, Error>({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms,
    });
};

export default usePlatforms;
