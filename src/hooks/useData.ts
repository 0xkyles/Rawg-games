import { useEffect, useState } from "react";
import { CanceledError } from "axios";

interface Params<APIResponse> {
    requestFunction: () => { req: Promise<APIResponse>; cancel: () => void };
}

const useData = <APIResponse>({ requestFunction }: Params<APIResponse>) => {
    const [data, setData] = useState<APIResponse>();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const { req, cancel } = requestFunction();
        req.then((data) => {
            setData(data);
            setIsLoading(false);
        }).catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false);
        });

        return () => cancel();
    }, []);

    return { data, error, isLoading };
};

export default useData;
