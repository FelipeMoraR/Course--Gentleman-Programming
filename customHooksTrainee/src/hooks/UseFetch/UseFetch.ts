import { useEffect, useState } from "react";


//Objetivo: Hook que reciba una URL y devuelva data, loading, error.
type Param = string;

type DataParam<T> = T | null;
type ErrorParam = Error | null;
type AutoFetchParam = boolean;

interface ReturnParam<T> {
    data: DataParam<T>;
    loading: boolean;
    error: ErrorParam;
    fetchCall: () => void;
}

export const useFetch = <T>(url: Param, autoFetch? : AutoFetchParam): ReturnParam<T> => {
    const [ data, setData ] = useState<DataParam<T>>(null);
    const [ loading, setLoading ] = useState<boolean>(false);
    const [ error, setError ] = useState<ErrorParam>(null);

    const fetchCall = async () => {
        try{
            setLoading(true);
            
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await fetch(url);
            
            if(!response.ok) throw new Error('Error in the fetch');

            const json: T = await response.json();

            setError(null);
            setData(json);
        } 
        catch(err) {
            setError(err as Error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(autoFetch) fetchCall();
    }, [url])

    return {
        data,
        loading,
        error,
        fetchCall
    }
} ;