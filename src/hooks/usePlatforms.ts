import { useQuery } from "@tanstack/react-query";
import platformService, {
    CACHE_KEY_PLATFORM,
} from "../services/platformService";
import platforms from "../data/platforms";

const usePlatforms = () =>
    useQuery({
        queryKey: CACHE_KEY_PLATFORM,
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: platforms,
    });

export default usePlatforms;
