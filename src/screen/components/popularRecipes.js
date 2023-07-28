/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const popularRecipes = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 17,
            fontWeight: 500,
            color: '#222222',
            marginLeft: 10,
          }}>
          Popular Recipes
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('popularMenu')}>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: 15,
              fontWeight: 500,
              color: '#6D61F2',
              marginLeft: 100,
            }}>
            More Info
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.item}>
          <Image source={require('../../asset/Group48.png')} />
          <Text style={{fontSize: 15, fontWeight: 500, color: '#18172B'}}>
            Soup
          </Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../../asset/Group49.png')} />
          <Text style={{fontSize: 15, fontWeight: 500, color: '#18172B'}}>
            Chicken
          </Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../../asset/Group50.png')} />
          <Text style={{fontSize: 15, fontWeight: 500, color: '#18172B'}}>
            Seafood
          </Text>
        </View>
        <View style={styles.item}>
          <Image source={require('../../asset/Group49.png')} />
          <Text style={{fontSize: 15, fontWeight: 500, color: '#18172B'}}>
            Dessert
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    marginTop: -5,
  },
  item: {
    alignItems: 'center',
    margin: 8,
  },
});

export default popularRecipes;
