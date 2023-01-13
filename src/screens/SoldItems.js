import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Colors, Metrix} from '../config';

const SoldItems = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.secondary,
        paddingHorizontal: Metrix.HorizontalSize(20),
      }}>
      <Text>SoldItems</Text>
    </ScrollView>
  );
};

export default SoldItems;
