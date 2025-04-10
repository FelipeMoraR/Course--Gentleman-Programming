import axios from "axios";
import { Character } from "../models/character.mode";
import { loadAbort } from "../utilities/loadAbortUtility";

const BASE_URL = "https://rickandmortyapi.com/api";


export const getCharacter = (id: number) => {
    const controller = loadAbort();
    return { 
        call: axios.get<Character>(`${BASE_URL}/character/${id}`, {signal: controller.signal}), 
        controller
    }
}
