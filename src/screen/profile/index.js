/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import JWT from 'jwt-decode';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Profile from '../components/profile';
import Icon from 'react-native-vector-icons/dist/Feather';
import Icons from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import myRecipe from '../myRecipe/Index';

const Index = ({navigation}) => {
  const [data, setData] = useState([]);

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

      const res = await axios.get(`http://10.0.2.2:4000/getuser/${id}`);
      console.log(res.data);
      setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data.name);
  console.log(data);
  return (
    <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
      <Profile name={data[0].name} image={data[0].image} />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          height: 400,
          width: 365,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
        }}>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('editProfile')}>
          <Icon name="user" style={styles.icon} />
          <Text style={styles.loginText}>Edit Profile</Text>
          <Icons
            name="keyboard-arrow-right"
            style={{fontSize: 30, marginLeft: 100}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('myRecipe')}>
          <Icon name="award" style={styles.icon} />
          <Text style={styles.loginText}>My Recipe</Text>
          <Icons
            name="keyboard-arrow-right"
            style={{fontSize: 30, marginLeft: 100}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('savedRecipe')}>
          <Icon name="bookmark" style={styles.icon} />
          <Text style={styles.loginText}>Saved Recipe</Text>
          <Icons
            name="keyboard-arrow-right"
            style={{fontSize: 30, marginLeft: 100}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate('likedRecipe')}>
          <Icon2 name="like2" style={styles.icon} />
          <Text style={styles.loginText}>Liked Recipe</Text>
          <Icons
            name="keyboard-arrow-right"
            style={{fontSize: 30, marginLeft: 100}}
          />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#FFFFFF',
  },
  loginText: {
    fontSize: 18,
    fontWeight: 500,
    width: 120,
    color: '#000000B2',
  },
  icon: {
    fontSize: 25,
    marginRight: 20,
    marginLeft: 5,
    color: '#EFC81A',
  },
});

export default Index;
