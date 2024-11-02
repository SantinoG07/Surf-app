import axios from 'axios';

const apiKey = 'e3ca4788ae9a4b04b5a170108241810';
const getWeather = async (city) => {
    try {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );
        return response.data;
    } catch (error) {
        console.error("Error obteniendo datos del clima:", error);
        return null;
    }
};

export default getWeather;
