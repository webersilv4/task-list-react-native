import axios from 'axios'; 

export const Api = axios.create({
    baseURL : 'https://task-list-mauve-pi.vercel.app',
});