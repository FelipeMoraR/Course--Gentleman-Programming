import axios from "axios";
import { Character, UseApiCall } from "../models/character.mode";
import { loadAbort } from "../utilities/loadAbortUtility";

const BASE_URL = "https://rickandmortyapi.com/api";


export const getCharacter = (id: number): UseApiCall<Character> => {
    const controller = loadAbort();
    
    return { 
        call: axios.get<Character>(`${BASE_URL}/character/${id}`, {signal: controller.signal}),  //Why signaly
        controller
    }
}


export const getCharacter3 = (): UseApiCall<Character> => {
    const controller = loadAbort();

    return { 
        call: axios.get<Character>(`${BASE_URL}/character/4`, {signal: controller.signal}),  //Why signaly
        controller
    }
}


