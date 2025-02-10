import axios from 'axios'

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';


 
export const fetchCampersWithTopic = async topic => {
    const response = await axios.get(`/search?query=${topic}`);
    return response.data.hits;
}