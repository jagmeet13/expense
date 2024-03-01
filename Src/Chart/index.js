import React from 'react';
import {View, Text} from 'react-native';
import {PieChart} from 'react-native-svg-charts';

const colors = ['#FF5733', '#33FF57'];

const SimplePieChart = ({expenses}) => {
  const pieData = expenses.map((item, index) => ({
    value: parseFloat(item.amount),
    svg: {fill: colors[index]},
    key: `pie-${index}`,
  }));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PieChart
        style={{height: 200, width: 200}}
        data={pieData}
        innerRadius={'30%'}
        outerRadius={'70%'}
        padAngle={0.05}
        valueAccessor={({item}) => item.value}
      />
      <View style={{flexDirection: 'row', marginTop: 10}}>
        {pieData.map((item, index) => (
          <View
            key={`legend-${index}`}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: item.svg.fill,
                marginRight: 5,
              }}
            />
            <Text>{expenses[index].title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SimplePieChart;
