import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import getWeather from '../api/weatherApi';

const place = 'Londres'

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            const data = await getWeather(place);
            setWeather(data);
        };
        fetchWeather();
    }, []);

    if (!weather) return <Text>Cargando...</Text>;

    return (
        <View>
            <Text>Clima en {weather.location.name}</Text>
            <Text>Temperatura: {weather.current.temp_c} °C</Text>
        </View>
    );
};

export default WeatherComponent;
