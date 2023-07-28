/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Feather';
import Icons from 'react-native-vector-icons/dist/MaterialIcons';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
// import myRecipe from '../myRecipe/Index';

const Index = props => {
  const image = {
    uri: 'https://s3-alpha-sig.figma.com/img/2ca7/faff/4da51338c06dd21688b82eae3bc9dfa6?Expires=1686528000&Signature=q6Gf8IQQB4M-IM9mHMvXlfcvmhF9kpL8qOcsrNagmoRdsIDTtAu2uMyk4MCfUfRhgO~zPheNBd9~1kjH2lCwnKbKlmi3Dz9WVoE-E0710AdQ-8UqtBG6~1B3uaU8EllAq4wH9KO6L7y42auzELz1zxmPsMp~Kwfi3ZGPl6UxLmWqk4sT4TA37qed1vo5xWT9A01E9v-7JQPdl1DgKLe~gvSZ01moyoOawLAy7u5RqU0yEdYbHfl1OZSZF9PGSFqq26BFHg3UVRiUmpTMadg89g2Ni1eqE2DKDBN~99HcfbEK29sj0mRuUwOCZ1Mlh61bjnc~XPX6aqztmeR3pZuXwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <ImageBackground
        source={{uri: `${props.img}`}}
        resizeMode="cover"
        style={{width: 400}}>
        <SafeAreaView
          style={{flexDirection: 'column', width: 1000, height: 400}}>
          <Text
            style={{
              //   alignSelf: 'flex-start'
              marginTop: 220,
              color: '#FFFFFF',
              fontSize: 30,
              fontWeight: 500,
              marginLeft: 30,
              width: 190,
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              //   alignSelf: 'flex-start'
              marginTop: 0,
              color: '#FFFFFF',
              fontSize: 10,
              fontWeight: 300,
              marginLeft: 30,
              width: 190,
            }}>
            By Chef Ronald Humson
          </Text>
        </SafeAreaView>
      </ImageBackground>
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
