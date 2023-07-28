/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useCallback} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Button,
  Alert,
  RefreshControl,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import Add from '../components/addFile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import JWT from 'jwt-decode';
import {useNavigation} from '@react-navigation/native';

const Index = ({navigation}) => {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  const [nama, setNama] = useState('');

  const [loading, setLoading] = React.useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const handleUpload = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      console.log(value);
      const decode = JWT(value);
      console.log(decode);
      console.log(decode.id);
      const id = decode.id;
      console.log(nama);
      const form = new FormData();
      form.append('name', nama);
      const res = await axios.put(
        `http://10.0.2.2:4000/user_edit/${id}`,
        form,
        // {
        //   headers: {
        //     // Multer only parses "multipart/form-data" requests
        //     'Content-Type': 'application/json',
        //   },
        // },
      );

      if (res.status === 200) {
        // Alert.alert('Add Data Succes', ' ', [
        //   {text: 'OK', onPress: () => console.log('ok')},
        // ]);
        navigation.push('Profile');
      } else {
        console.log('Edit Gagal');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={{flex: 1, alignItems: 'center', backgroundColor: '#E5E5E5'}}>
      <Loader visible={loading} />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: '#EFC81A',
          marginTop: 80,
          marginBottom: 30,
        }}>
        Add Your New Name
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          width: 300,
          height: 50,
          marginBottom: 10,
          marginTop: 20,
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          borderWidth: isActive ? 1 : 0,
          borderColor: isActive ? '#EFC81A' : 'grey',
        }}>
        <TextInput
          placeholderTextColor={isActive ? '#EFC81A' : 'grey'}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Your New Name"
          onChangeText={setNama}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleUpload}>
        <Text style={styles.loginText}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBtn: {
    width: 150,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#EFC81A',
  },
  loginText: {color: 'white'},
});
export default Index;
