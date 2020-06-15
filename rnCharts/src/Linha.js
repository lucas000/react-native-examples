import React from 'react';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {SafeAreaView, View} from 'react-native';

export default function Linha() {
  const data = [80, -10, 45, 98, -45, 99, 88, 24, 76];

  return (
    <SafeAreaView style={{flexDirection: 'row'}}>
      <YAxis
        style={{marginBottom: 30}}
        data={data}
        contentInset={{top: 10, bottom: 10}}
      />
      <View style={{flex: 1}}>
        <LineChart
          style={{height: 300}}
          data={data}
          svg={{stroke: '#7159c1'}}
          contentInset={{top: 20, bottom: 20}}>
          <Grid />
        </LineChart>
        <XAxis
          style={{marginHorizontal: -10, height: 30}}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{top: 10, bottom: 10}}
        />
      </View>
    </SafeAreaView>
  );
}
