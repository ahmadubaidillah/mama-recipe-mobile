/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import filter from 'lodash.filter';

const API = 'http://10.0.2.2:4000/food';

const Index = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setData] = useState();
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetchData(API);
  }, []);

  const fetchData = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.data);
      console.log(json.data);
      console.log(json.data.id);
      console.log(datas);
      setFullData(json.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleSearch = query => {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();
    const filteredData = filter(fullData, data => {
      return contains(data, formattedQuery);
    });
    setData(filteredData);
  };

  const contains = ({name}, query) => {
    if (name.includes(query)) {
      return true;
    }
    return false;
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color="#5500dc" />
      </View>
    );
  }
  if (error) {
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Error in fetching data</Text>
    </View>;
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <TextInput
        placeholder="Search"
        clearButtonMode="always"
        autoCorrect={false}
        value={searchQuery}
        onChangeText={query => handleSearch(query)}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderWidth: 1,
          borderRadius: 8,
          height: 50,
          width: 375,
          margin: 10,
        }}></TextInput>

      <FlatList
        data={datas}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
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
                <Text style={{fontSize: 14, fontWeight: 500, color: '#18172B'}}>
                  Recipe
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginBottom: 20,
                // onPress={() => deleteClick(ite)}
                // onPress={}
              }}>
              <Image
                source={require('../../asset/Group73.png')}
                style={{margin: 2}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                marginBottom: 20,
              }}>
              <Image
                source={require('../../asset/Group74.png')}
                style={{margin: 2}}
              />
            </TouchableOpacity>
          </SafeAreaView>
        )}
      />
    </View>
  );
};

export default Index;
