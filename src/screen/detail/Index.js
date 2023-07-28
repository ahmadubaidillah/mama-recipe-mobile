/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
} from 'react-native';
// import Video from 'react-native-video';
// import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Icons from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
// import myRecipe from '../myRecipe/Index';
import Detail from '../components/detailRecipe';

const Index = ({navigation, route}) => {
  const {foodId} = route.params;
  console.log(foodId);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(`http://10.0.2.2:4000/food/${foodId}`);
      console.log(res.data.data[0].name);
      setData(res.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <Detail name={data.name} img={data.image} />
      <ScrollView
        style={{
          backgroundColor: '#FFFFFF',
          height: 50,
          width: 395,
          borderRadius: 30,
        }}>
        <SafeAreaView style={styles.loginBtn}>
          <Text style={styles.loginText}>Edit Profile</Text>
        </SafeAreaView>
        <Text style={styles.text}>{data.ingredients}</Text>
        <SafeAreaView style={styles.loginBtn}>
          <Text style={styles.loginText}>Video Step</Text>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBtn: {
    flexDirection: 'row',
    width: 300,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 13,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 500,
    width: 120,
    color: '#000000B2',
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  },
  viewStyle: {height: 250},
  text: {
    fontSize: 15,
    fontWeight: 500,
    width: 200,
    marginLeft: 20,
    color: '#00000',
  },
  icon: {
    fontSize: 25,
    marginRight: 20,
    marginLeft: 5,
    color: '#EFC81A',
  },
});

export default Index;
