import { useEffect, useState } from "react";


type Data<T> = T | null; //T is a parameter
type ErrorType = string | null;

interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T> | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<ErrorType>(null);
    
    

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => { 
            
            try {
                const response = await fetch(url, controller);
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const result: T = await response.json();
                setData(result);
                setError(null);
            } 
            catch (err) {
                setError('Error fetching data');   
                console.error(err);
            } 
            finally {
                setLoading(false);
            }
        }

        fetchData();

        return () => {
            console.log('cleaning up...');
            controller.abort(); //This will cancel the request if the component unmounts before the request is finished

        }
        
    }, [url]);

    return {data, loading, error}
}



