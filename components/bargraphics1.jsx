import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const data = [20, 45, 28, 80, 99, 43];
const maxValue = Math.max(...data);

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        {data.map((value, index) => (
          <View key={index} style={styles.barContainer}>
            <View style={styles.labelContainer}>
              <LinearGradient
                colors={['#6d6d6d', '#4c4c4c']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.label}
              >
                <Text style={styles.labelText}>{data[index]}</Text>
              </LinearGradient>
            </View>

            <View
              style={[
                styles.bar,
                {
                  height: `${(value / maxValue) * 100}%`,
                },
              ]}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#353535',
  },
  chartContainer: {

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width - 20,
    height: 220,
    paddingTop:70,
    padding: 10,
    backgroundColor: '#353535',
    borderRadius: 16,
    marginTop: 300,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  labelContainer: {
    marginBottom: 8,
  },
  bar: {
    width: 55,
    backgroundColor: '#494949',
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  label: {
    borderRadius: 15,
    paddingTop:10,
    paddingHorizontal: 10,
    paddingVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 12,
  },
});

export default App;
