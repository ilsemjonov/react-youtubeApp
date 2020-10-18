import axios from 'axios';

const KEY = 'AIzaSyAhJno4KmTs2yE_BuSAmu0xa_jqJUWoKVU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})