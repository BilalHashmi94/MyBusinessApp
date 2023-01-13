import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors, Metrix} from '../config';

const MyRevenue = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.secondary,
        paddingHorizontal: Metrix.HorizontalSize(20),
      }}>
      <Text>MyRevenue</Text>
    </ScrollView>
  );
};

export default MyRevenue;
