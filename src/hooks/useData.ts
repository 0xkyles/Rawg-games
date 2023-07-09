import { useEffect, useState } from "react";
import { CanceledError } from "axios";

interface Params<APIResponse> {
    requestFunction: () => { req: Promise<APIResponse>; cancel: () => void };
    dependancies?: any[];
}

const useData = <APIResponse>({
    requestFunction,
    dependancies,
}: Params<APIResponse>) => {
    const [data, setData] = useState<APIResponse>();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        () => {
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
        },
        dependancies ? [...dependancies] : []
    );

    return { data, error, isLoading };
};

export default useData;
