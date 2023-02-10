import axios from 'axios';
//BASE DA URL:https://api.themoviedb.org/3/
//URL DA API  /movie/now_playing?api_key=bb4cc8da8fc0fa00443c0d118aaf2a4d&language=pt-BR


const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;