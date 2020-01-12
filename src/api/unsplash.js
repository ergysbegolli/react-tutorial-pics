import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e5fd361c148313a7aa7c74ba0137c0534e0089bce71ee65e59ddca5f930c6744'
    }
});