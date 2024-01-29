import axios from "axios";
import { API_KEY, API_URL } from "../../utils/env";

export const getQuotes = async () => {
    return await axios.get(API_URL, {
      headers: {
        'X-Api-Key': API_KEY,
      },
    });
};