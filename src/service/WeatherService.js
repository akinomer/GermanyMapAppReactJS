import axios from 'axios';

const WEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const WEATHER_API_KEY = '';

const apiClient = axios.create({
    baseURL: WEATHER_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    }
});

export const fetchDataFromWeatherApi = (props) => apiClient.get(`forecast?lat=${props.lat}&lon=${props.lng}&units=metric&cnt=7&appid=${WEATHER_API_KEY}`)
