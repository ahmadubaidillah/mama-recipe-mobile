/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, SafeAreaView, Text} from 'react-native';

const Profile = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <SafeAreaView
        style={{backgroundColor: '#EEC302', width: 1000, height: 325}}>
        <Image
          source={{uri: `${props.image}`}}
          style={{
            borderRadius: 50,
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginTop: 80,
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            color: '#FFFFFF',
            fontSize: 20,
            fontWeight: 500,
          }}>
          {props.name}
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
