import React from 'react';
import {Text} from 'react-native-svg';

import {PieChart} from 'react-native-svg-charts';

export default function Pizza() {
  const data = [80, 10, 45, 98, 45, 99, 88, 24, 76];

  const pieData = data.map((value, index) => ({
    value,
    key: `pie-data-${value}-${index}`,
    svg: {
      fill: (
        '#' +
        ((Math.random() * 0xffffff) << 0).toString(16) +
        '000000'
      ).slice(0, 7),
    },
  }));

  const Labels = ({slices}) => {
    return slices.map((slice, index) => {
      const {pieCentroid, data} = slice;

      return (
        <Text
          key={`pie-label-${index}`}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fontSize={24}
          fill="white"
          textAnchor="middle"
          alignmentBaseline="middle">
          {data.value}
        </Text>
      );
    });
  };

  return (
    <PieChart style={{height: 500, padding: 16}} data={pieData}>
      <Labels />
    </PieChart>
  );
}
