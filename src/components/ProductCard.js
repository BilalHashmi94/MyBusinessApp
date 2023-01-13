import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {Colors, CommonStyles, Metrix} from '../config';

const ProductCard = ({item}) => {
  return (
    <TouchableOpacity
      style={{
        width: Metrix.HorizontalSize(150),
        height: Metrix.VerticalSize(220),
        backgroundColor: 'transparent',
        marginVertical: 10,
        marginHorizontal: 10
      }}>
      <View
        style={{
          width: '100%',
          height: '80%',
          backgroundColor: Colors.white,
          borderRadius: 20
        }}></View>
      <View style={{marginTop: Metrix.VerticalSize(5)}}>
        <Text style={{...CommonStyles.textStyles.textInputText}}>
          {item.item.title}
        </Text>
        <Text style={{...CommonStyles.textStyles.textInputText}}>
          Price: {item.item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
