import api from "./api";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface APIPlatformsResponse {
    count: number;
    results: Platform[];
}

class PlatformService {
    getAll() {
        const controller = new AbortController();
        const req = api
            .get<APIPlatformsResponse>("/platforms/lists/parents", {
                signal: controller.signal,
            })
            .then((res) => res.data);

        return { req, cancel: () => controller.abort() };
    }
}

export default new PlatformService();
