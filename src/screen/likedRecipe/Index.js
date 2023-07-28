/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';

const Index = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <SafeAreaView
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          marginTop: 30,
          marginBottom: 13,
        }}>
        <Image
          source={require('../../asset/Group5.png')}
          style={{marginLeft: 25}}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginLeft: 70,
            fontSize: 20,
            fontWeight: 500,
            color: '#EEC302',
          }}>
          Liked Recipe
        </Text>
      </SafeAreaView>
      <SafeAreaView
        style={{flexDirection: 'row', alignSelf: 'flex-start', marginTop: 30}}>
        <View>
          <Image
            source={require('../../asset/a.jpg')}
            style={{marginLeft: 23, borderRadius: 20, width: 88, height: 88}}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 3}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: '#18172B',
              marginBottom: 6,
            }}>
            Margherita
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: '#6E80B0',
              marginBottom: 6,
            }}>
            in Veg Pizza
          </Text>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#18172B'}}>
            Spicy
          </Text>
        </View>
      </SafeAreaView>
      <SafeAreaView
        style={{flexDirection: 'row', alignSelf: 'flex-start', marginTop: 30}}>
        <View>
          <Image
            source={require('../../asset/b.jpg')}
            style={{marginLeft: 23, borderRadius: 20, width: 88, height: 88}}
          />
        </View>
        <View style={{marginLeft: 20, marginTop: 3}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: '#18172B',
              marginBottom: 6,
            }}>
            Veg Loaded
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: '#6E80B0',
              marginBottom: 6,
            }}>
            in Veg Pizza
          </Text>
          <Text style={{fontSize: 14, fontWeight: 500, color: '#18172B'}}>
            Spicy
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Index;
