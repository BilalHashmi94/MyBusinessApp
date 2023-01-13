import {ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {Colors, CommonStyles, Metrix} from '../config';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const Home = () => {
  let data = [
    {
      img: 'img',
      title: 'Hello',
      price: '1234',
      category: 'World',
    },
    {
      img: 'img',
      title: 'Hello',
      price: '1234',
      category: 'World',
    },
    {
      img: 'img',
      title: 'Hello',
      price: '1234',
      category: 'World',
    },
    {
      img: 'img',
      title: 'Hello',
      price: '1234',
      category: 'World',
    },
    {
      img: 'img',
      title: 'Hello',
      price: '1234',
      category: 'World',
    },
  ];

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.secondary,
        paddingHorizontal: Metrix.HorizontalSize(20),
      }}>
      <Header />
      <View style={{marginTop: Metrix.VerticalSize(30)}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              ...CommonStyles.textStyles.semiHeading,
              fontSize: Metrix.customFontSize(21),
            }}>
            New Collection
          </Text>
          <Text
            style={{...CommonStyles.textStyles.heading, fontWeight: 'bold'}}>
            with{' '}
            <Text
              style={{
                ...CommonStyles.textStyles.heading,
                fontWeight: 'bold',
                color: Colors.primary,
              }}>
              15%
            </Text>{' '}
            discount
          </Text>
        </View>
        <View
          style={{
            marginVertical: Metrix.VerticalSize(30),
            width: '100%',
            height: Metrix.VerticalSize(350),
            backgroundColor: Colors.white,
            borderRadius: 20,
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                height: Metrix.VerticalSize(60),
                width: Metrix.HorizontalSize(180),
                backgroundColor: Colors.primary,
                borderRadius: 50,
                position: 'absolute',
                bottom: -30,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  ...CommonStyles.textStyles.buttonText,
                  color: Colors.black,
                  fontWeight: 'bold',
                }}>
                Show Item
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginVertical: Metrix.VerticalSize(20)}}>
          <Text
            style={{
              ...CommonStyles.textStyles.semiHeading,
              fontSize: Metrix.customFontSize(21),
              fontWeight: 'bold',
            }}>
            Recent Sales
          </Text>
          <FlatList
            data={data}
            // horizontal
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={item => {
              return <ProductCard item={item} />;
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
