import React from 'react';
import {BarChart, XAxis, YAxis, Grid} from 'react-native-svg-charts';
import {SafeAreaView, View} from 'react-native';
import * as scale from 'd3-scale';

export default function Barra() {
  const data = [80, 45, 98, 88, 24, 76];

  return (
    <SafeAreaView style={{height: 500, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <YAxis
          data={data}
          style={{marginBottom: 30}}
          contentInset={{top: 10, bottom: 10}}
        />
        <BarChart
          style={{flex: 1}}
          data={data}
          gridMin={0}
          svg={{fill: '#7159c1'}}>
          <Grid />
        </BarChart>
        <XAxis
          style={{marginHorizontal: -10}}
          data={data}
          scale={scale.scaleBand}
          formatLabel={(value, index) => index}
          contentInset={{top: 10, bottom: 10}}
        />
      </View>
    </SafeAreaView>
  );
}
