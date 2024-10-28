const baseURL1 = 'https://jsonplaceholder.typicode.com';
const baseURL2 = 'https://api.openweathermap.org/data/2.5';
const baseURL3 = 'https://thedogapi.com/v1';
const baseURL4 = 'https://api.spacexdata.com/v4';

export default {
    async getPosts() {
        const response = await fetch(`${baseURL1}/posts`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },
    async getWeather(city) {
        const response = await fetch(`${baseURL2}/weather?q=${city}&appid=YOUR_API_KEY`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },
    async getDogImages() {
        const response = await fetch(`${baseURL3}/images/search`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },
    async getSpaceXLaunches() {
        const response = await fetch(`${baseURL4}/launches`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    },
};