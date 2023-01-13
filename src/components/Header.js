import {View, Text} from 'react-native';
import React from 'react';
import {Colors, Metrix} from '../config';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View
      style={{
        height: 80,
        marginVertical: Metrix.VerticalSize(0),
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: Metrix.HorizontalSize(0),
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Entypo name="menu" color={Colors.white} size={30} />
      <FontAwesome name="user-circle" color={Colors.white} size={30} />
    </View>
  );
};

export default Header;
