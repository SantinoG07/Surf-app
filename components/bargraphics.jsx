import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackedBarChart } from 'react-native-chart-kit';

const data = {
  labels: ["12:00", "13:00", "14:00", "15:00"],
  data: [
    [60, 40], 
    [30, 70],
    [60, 40], 
    [60, 40], 
    [60, 40], 
    [60, 40], 
    [60, 40], 
    [60, 40], 
    [60, 40], 
    [60, 40], 
    [60, 40], 
  ],
  barColors: ["#1e6fc7", "#868686"]
};

const chartConfig = {
  backgroundGradientFrom: "rgba(129, 129, 129, 0.5)",
  backgroundGradientTo: "rgba(129, 129, 129, 0.5)",
  color: (opacity = 1) => `rgba(30, 111, 199, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForLabels: {
    // Establecer el tamaño de fuente a 0 para ocultar las etiquetas de datos
    fontSize: '0', // Oculta las etiquetas de datos
  },
  propsForHorizontalLabels: {
    fontSize:'12',
    opacity: 1,
  },
  propsForVerticalLabels: {
    fontSize:'12',
    opacity: 1,
  },
  barPercentage: 0.1,
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <StackedBarChart
          data={data}
          width={400}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#1e6fc7' }]} />
            <Text style={styles.legendText}>Agua</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.colorBox, { backgroundColor: '#868686' }]} />
            <Text style={styles.legendText}>Aire</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    paddingTop: 100,
  },
  chartContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 5,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginRight: 10,
  },
  colorBox: {
    width: 7,
    height: 7,
    borderRadius: 100,
    marginRight: 5,
    marginTop: 1,
  },
  legendText: {
    color: 'white',
    fontSize: 12,
    lineHeight: 12,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
});

export default App;