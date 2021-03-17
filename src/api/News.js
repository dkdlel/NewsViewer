import axios from 'axios';

const APIKEY = "da8b2e5b50cc41edb679702807761afd";
const URL = "https://newsapi.org/v2/top-headlines?country=kr";

export const requestGetArticles = async (props) => {
    const category = props === 'all' ? '' : `&category=${props}`;
    const query = `${URL + category}&apiKey=${APIKEY}`;

    const response = await axios.get(query);
    return response.data;
};