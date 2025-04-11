import { useCallback, useEffect, useState } from "react";
import { UseApiCall } from "../models/character.mode";


// type UseApiOptions<P> = {
//     autoFetch?: boolean;

// } & (P extends null ? { params?: P} : { params: P }) //& means integration

type UseApiOptions<P> = {
    autoFetch: boolean;
    params: P
} 

type Data<T> = T | null;
type CustomError = Error | null; //Type is like an alias


interface UseApiResult<T, P> {
    loading: boolean;
    data: Data<T>;
    error: CustomError;
    fetch: (param: P) => void;
}

export const useApi = <T, P>(apiCall: (param: P) => UseApiCall<T>, options?: UseApiOptions<P>): UseApiResult<T, P> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Data<T>>(null);
    const [error, setError] = useState<CustomError>(null);

    const fetch = useCallback((param: P ) => {
        const {call, controller} = apiCall(param);

        setLoading(true);
        
        call.then((response) => {
            setData(response.data);
            setError(null);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));

        return () => controller.abort(); //This helps to abort the request when the component is loading and the user has unmounted it
    }, [apiCall]);


    useEffect(() => {
        if(options?.autoFetch) {
            return fetch(options.params);
        }
    }, [fetch, options?.autoFetch, options?.params]);

    return { loading, data, error, fetch };
}