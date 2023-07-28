/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  RefreshControl,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import JWT from 'jwt-decode';
// import {useDispatch} from 'react-redux';
import {deleteFood} from '../../action/food';

const Index = ({navigation}) => {
  const [data, setData] = useState([]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getData();
  // }, []);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log(value);
      const decode = JWT(value);
      console.log(decode);
      console.log(decode.id);
      const id = decode.id;

      const res = await axios.get(`http://10.0.2.2:4000/foodByUserId/${id}`);
      console.log(res.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const deleteClick = async id => {
    try {
      // const res = await axios.delete(
      //   // `http://10.0.2.2:4000//food_delete/${user_id}`,
      // );
      // console.log(res);
      deleteFood(id);
      Alert.alert('hapus data berhasil', ' ', [
        {text: 'OK', onPress: () => console.log('hapus data berhasil')},
      ]);
    } catch (error) {
      // console.log(res);
      console.log(error);
    }
  };
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
          My Recipe
        </Text>
      </SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {data.map(item => {
          return (
            <SafeAreaView
              style={{
                flexDirection: 'row',
                alignSelf: 'flex-start',
                marginTop: 30,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 20,
                  // onPress={() => deleteClick(ite)}
                  // onPress={}
                }}
                onPress={() =>
                  navigation.navigate('detailRecipe', {
                    foodId: item.id,
                  })
                }>
                <View>
                  <Image
                    source={{uri: `${item.image}`}}
                    style={{
                      marginLeft: 23,
                      borderRadius: 20,
                      width: 88,
                      height: 88,
                    }}
                  />
                </View>
                <View style={{marginLeft: 20, marginTop: 3, width: 150}}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#18172B',
                      marginBottom: 6,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: '#6E80B0',
                      marginBottom: 6,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: 500, color: '#18172B'}}>
                    Recipe
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteClick(item.id)}
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 20,
                  // onPress={() => deleteClick(ite)}
                  // onPress={}
                }}>
                <Image
                  source={require('../../asset/garbage.png')}
                  style={{margin: 3, width: 40, height: 40}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate('editRecipe', {
                    foodId: item.id,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 20,
                }}>
                <Image
                  source={require('../../asset/pencil_199295.png')}
                  style={{margin: 3, width: 40, height: 40}}
                />
              </TouchableOpacity>
            </SafeAreaView>
          );
        })}
      </ScrollView>

      {/* <SafeAreaView
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
      </SafeAreaView> */}
    </View>
  );
};

export default Index;
