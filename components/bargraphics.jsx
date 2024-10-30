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
  labelColor: (opacity = 11) => `rgba(255, 255, 255, ${opacity})`,
  propsForLabels: {
    fontSize: '12',
  },
  propsForHorizontalLabels: {
    opacity: 0, 
  },
  barPercentage: 0.1, 
};

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#1e6fc7' }]} />
          <Text style={[{ color: '#0000' }]}>Agua</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: '#868686' }]} />
          <Text style={styles.legendText}>Aire</Text>
        </View>
      </View>

      <StackedBarChart
        data={data}
        width={400}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
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
  legendContainer: {
    flexDirection: 'row',
    marginBottom: 10, 
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  colorBox: {
    borderRadius:100,
    width: 7,
    height: 7,
    marginRight: 5,
  },
  legendText: {
    color: '#0000',
    fontSize:12,
  },
  chart: {
    marginVertical: 10,
    borderRadius: 16,
  },
});

export default App;
