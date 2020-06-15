import React from 'react';
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
  return <PieChart style={{height: 500, padding: 16}} data={pieData} />;
}
