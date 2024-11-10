import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = ({ tideData }) => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        color: () => `rgba(30, 111, 199, 1)`,
        strokeWidth: 2,
      },
    ],
    legend: ["Altura del mar"],
  });

  const API_KEY = 'e3ca4788ae9a4b04b5a170108241810'; 
  const CITY_NAME = 'Buenos Aires'; 

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY_NAME}&days=1&hourly=tide`
        );
        const data = await response.json();
    
        // Verifica la respuesta completa para ver los datos que devuelve
        console.log(data);
    
        // Verifica si los datos están en el formato esperado
        if (data.forecast && data.forecast.forecastday && data.forecast.forecastday[0].hour) {
          const tideData = data.forecast.forecastday[0].hour.map(hour => ({
            time: hour.time.split(' ')[1], // Extrae solo la hora
            height: hour.tide_height || 0, // Agrega un valor por defecto si no existe
          }));
    
          // Limitar el número de puntos en el gráfico para evitar la superposición de etiquetas
          const limitedTideData = tideData.filter((entry, index) => index % 2 === 0); // Muestra solo cada segundo dato
    
          // Verifica si hay datos antes de actualizar el gráfico
          if (limitedTideData.length > 0) {
            setChartData({
              labels: limitedTideData.map(entry => entry.time),
              datasets: [
                {
                  data: limitedTideData.map(entry => entry.height),
                  color: () => `rgba(30, 111, 199, 1)`,
                  strokeWidth: 2,
                },
              ],
              legend: ["Altura del mar"],
            });
          }
        } else {
          console.error("Datos de mareas no encontrados en la respuesta de la API.");
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    
    fetchWeatherData();
  }, []);

  const handleDataPointClick = (data) => {
    setTooltipPos({
      x: data.x,
      y: data.y,
      visible: true,
      value: `${data.value} M`,
    });
  };

  return (
    <View style={styles.container}>
      <LineChart
        fromZero
        data={chartData}
        width={480}
        height={256}
        chartConfig={chartConfig}
        withShadow={false}
        withInnerLines={false}
        withVerticalLabels={true}
        withHorizontalLabels={false}
        bezier
        onDataPointClick={handleDataPointClick}
        style={styles.chart}
      />

      {tooltipPos.visible && (
        <View style={[styles.tooltip, { top: tooltipPos.y - 9, left: tooltipPos.x - 7 }]}>
          <Text style={styles.tooltipText}>{tooltipPos.value}</Text>
        </View>
      )}
    </View>
  );
};

const chartConfig = {
  backgroundGradientFrom: "rgba(53,53,53,1.000)",
  backgroundGradientTo: "rgba(53,53,53,1.000)",
  color: (opacity = 1) => `rgba(30, 111, 199, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "white",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginTop: '20%',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#1e6fc7',
    padding: 5,
    borderRadius: 5,
    zIndex: 1,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ChartComponent;
