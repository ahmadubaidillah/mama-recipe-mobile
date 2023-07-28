/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
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

const Index = ({route}) => {
  const navigation = useNavigation();

  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const [isActive3, setActive3] = useState(false);

  const [response, setResponse] = useState(null);
  const [title, setTitle] = useState('');
  const [Ingredients, setIngredients] = useState('');
  const [Video, setVideo] = useState('');
  const [Images, setImage] = useState(null);

  const {foodId} = route.params;
  console.log(foodId);

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, res => {
      console.log('response camera=', res);
      if (res.didCancel) {
        console.log('user cancle image');
      } else if (res.errorMessage) {
        console.log('gallery picker error');
      } else {
        // console.log(res);
        console.log(res.assets[0]);
        setResponse(res.assets[0]);
        setImage(res.assets[0]);
      }
    });
  };
  // const nn =
  //  JSON.stringify(Images.path).substring(
  //   JSON.stringify(Images.path).lastIndexOf('/') + 1,
  // );
  // const image = {
  //   name: Images.fileName,
  //   uri: Images.path,
  //   type: Images.mime,
  //   size: Images.size,
  //   lastModifiedDate: JSON.parse(Images.modificationDate),
  //   uid: Images.modificationDate,
  // };
  const [loading, setLoading] = React.useState(false);

  const handleUpload = async () => {
    // const data = {
    //   name: title,
    //   ingredients: Ingredients,
    //   video: Video,
    //   image: Images,
    // };
    // const image = {
    //   name: Images.original_filename,
    //   uri: Images.url,
    //   type: Images.format,
    //   size: Images.byte,
    //   // lastModifiedDate: JSON.parse(Images.modificationDate),
    //   // uid: Images.modificationDate,
    // };
    //     const formData = new FormData();

    // // Append all properties of the `user` object to the form
    // for (const [key, value] of Object.entries(user)) {
    //   formData.append(key, value);
    // }

    try {
      const value = await AsyncStorage.getItem('token');
      console.log(value);
      const decode = JWT(value);
      console.log(decode);
      console.log(decode.id);
      const id = decode.id;

      const form = new FormData();
      form.append('user_id', id);
      form.append('name', title);
      form.append('ingredients', Ingredients);
      form.append('video', Video);
      form.append('image', {
        uri: Images.uri,
        type: Images.type,
        name: Images.fileName,
      });
      // {
      //   uri: Images,
      //   name: Images.fileName,
      //   type: Images.type,
      // },
      // Images,
      // {
      //   uri: Images.uri,
      //   type: Images.type,
      //   name: Images.fileName,
      // },

      const res = await axios.put(
        `http://10.0.2.2:4000/food_edit/${foodId}`,
        form,
        {
          headers: {
            // Multer only parses "multipart/form-data" requests
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      // res.json();
      // console.log(res.status);
      if (res.status === 200) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          // console.log(response.data);
          // Alert.alert('Add Data Succes', ' ', [
          //   {text: 'OK', onPress: () => navigation.navigate('Home')},
          // ]);
        }, 2000);
        navigation.navigate('myRecipe');
      } else {
        console.log('Edit Gagal');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#E5E5E5'}}>
      <Loader visible={loading} />

      <Text
        style={{
          fontSize: 24,
          fontWeight: 500,
          color: '#EFC81A',
          marginTop: 80,
          marginBottom: 30,
        }}>
        Add Your Recipe
      </Text>

      <View
        style={{
          flexDirection: 'row',
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
        <Icon
          name="book-open"
          size={20}
          color={isActive ? '#EFC81A' : 'grey'}
          padding={15}
        />
        <TextInput
          placeholderTextColor={isActive ? '#EFC81A' : 'grey'}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="Title"
          onChangeText={setTitle}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          boxSizing: 'border-box',
          width: 300,
          //   height: 50,
          marginBottom: 10,
          marginTop: 20,
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          borderWidth: isActive2 ? 1 : 0,
          borderColor: isActive2 ? '#EFC81A' : 'grey',
        }}>
        <Icon name="book-open" size={20} color={'#FFFFFF'} padding={15} />
        <TextInput
          multiline={true}
          numberOfLines={4}
          maxLength={40}
          placeholderTextColor={isActive2 ? '#EFC81A' : 'grey'}
          onFocus={() => setActive2(true)}
          onBlur={() => setActive2(false)}
          placeholder="Ingredients"
          onChangeText={setIngredients}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          boxSizing: 'border-box',
          width: 300,
          height: 50,
          marginBottom: 10,
          marginTop: 20,
          borderRadius: 15,
          backgroundColor: '#FFFFFF',
          borderWidth: isActive3 ? 1 : 0,
          borderColor: isActive3 ? '#EFC81A' : 'grey',
        }}>
        <Icon
          name="video"
          size={20}
          color={isActive3 ? '#EFC81A' : 'grey'}
          padding={15}
        />
        <TextInput
          placeholderTextColor={isActive3 ? '#EFC81A' : 'grey'}
          onFocus={() => setActive3(true)}
          onBlur={() => setActive3(false)}
          placeholder="Video"
          onChangeText={setVideo}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {response && (
          <Image
            style={{width: 100, height: 100}}
            resizeMode="cover"
            source={{uri: response.uri}}
          />
        )}
        <Button title="Choose image" onPress={galleryLaunch} />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleUpload}>
        <Text style={styles.loginText}>UPDATE</Text>
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
