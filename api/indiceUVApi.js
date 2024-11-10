import axios from 'axios';

export const fetchUVIndex = async () => {
  try {
    const apiKey = 'e3ca4788ae9a4b04b5a170108241810';  
    const location = 'Buenos Aires';  // Cambia la ciudad según necesites
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    const response = await axios.get(url);
    
    // Obtener el índice UV
    const uvIndex = response.data.current.uv;

    console.log("Índice UV:", uvIndex);

    return uvIndex;
  } catch (error) {
    console.error("Error obteniendo índice UV:", error);
    return null;
  }
};
