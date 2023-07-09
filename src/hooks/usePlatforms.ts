import platformService, {
    APIPlatformsResponse,
} from "../services/platformService";
import useData from "./useData";

const usePlatforms = () =>
    useData<APIPlatformsResponse>({
        requestFunction: () => platformService.getAll(),
    });

export default usePlatforms;
