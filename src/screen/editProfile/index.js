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
// const createFormData = (image, body = {}) => {
//   const data = new FormData();

//   data.append('image', {
//     name: image.fileName,
//     type: image.type,
//     uri:
//       Platform.OS === 'android' ? image.uri.replace('file://', '') : image.uri,
//   });

//   Object.keys(body).forEach(key => {
//     data.append(key, body[key]);
//   });

//   return data;
// };

const Index = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
      }}>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.loginText}
          onPress={() => navigation.navigate('editProfileName')}>
          Edit Nama Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Edit Foto Profile</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  loginBtn: {
    width: 250,
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
