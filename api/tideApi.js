import axios from 'axios';

export const fetchTideData = async () => {
  try {
    const apiKey = 'e3ca4788ae9a4b04b5a170108241810';  
    const location = 'Buenos Aires';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    const response = await axios.get(url);
    
    console.log(response.data);

    const tideData = response.data.tideData ? response.data.tideData.map(entry => ({
      time: entry.tide_time,
      height: entry.tide_height_mt
    })) : [];

    if (tideData.length === 0) {
      console.error('Datos de marea no encontrados en la respuesta.');
    }

    return tideData;
  } catch (error) {
    console.error("Error obteniendo datos de la marea:", error);
    return [];
  }
};
