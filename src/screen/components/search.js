/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setActive] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        boxSizing: 'border-box',
        width: 300,
        height: 50,
        marginBottom: 3,
        marginTop: 20,
        borderRadius: 15,
        backgroundColor: '#f5f5f5',
        borderWidth: isActive ? 1 : 0,
        borderColor: isActive ? '#EFC81A' : 'grey',
      }}>
      <Icon
        name="search1"
        size={20}
        color={isActive ? '#EFC81A' : 'grey'}
        padding={15}
      />
      <TextInput
        placeholderTextColor={isActive ? '#EFC81A' : 'grey'}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        placeholder="Search Pasta, Bread, etc"
      />
    </View>
  );
};

export default search;
