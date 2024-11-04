import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const data = {
  labels: ["12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: () => `rgba(30, 111, 199, 1)`,
      strokeWidth: 2
    }
  ],
  legend: ["Altura del mar"]
};

const chartConfig = {
  backgroundGradientFrom: "rgba(53,53,53,1.000)",
  backgroundGradientTo: "rgba(53,53,53,1.000)",
  color: (opacity = 1) => `rgba(30, 111, 199, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "white"
  }
};

const App = () => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false, value: 0 });

  const handleDataPointClick = (data) => {
    setTooltipPos({
      x: data.x,
      y: data.y,
      visible: true,
      value: `${data.value} M`
    });
  };

  return (
    <View style={styles.container}>
      <LineChart
        fromZero
        data={data}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginTop: '20%',
    
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
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
  }
});

export default App;
