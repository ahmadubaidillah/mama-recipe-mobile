/* eslint-disable prettier/prettier */
// In App.js in a new project

import * as React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Ikon from 'react-native-vector-icons/dist/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import component
import Register from './src/screen/register/index';
import Home from './src/screen/home/index';
import myRecipe from './src/screen/myRecipe/Index';
import savedRecipe from './src/screen/savedRecipe/Index';
import likedRecipe from './src/screen/likedRecipe/Index';
import popularMenu from './src/screen/popularMenu/Index';
import OneSignal from 'react-native-onesignal';
import Loader from './src/screen/components/Loader';
import EditRecipe from './src/screen/editRecipe';
import EditProfile from './src/screen/editProfile';
import EditProfileName from './src/screen/editProfileName';
import EditProfileImage from './src/screen/editProfileImage';
import DetailRecipe from './src/screen/detail/Index';
import Profile from './src/screen/profile';

function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [isActive, setActive] = React.useState(false);
  const [isActive2, setActive2] = React.useState(false);
  const baseUrl =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:4000/'
      : 'http://localhost:4000/';
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        'http://10.0.2.2:4000/user_login',
        data,
      );
      if (!email) {
        alert('Please input email', 'email');
      }
      if (!password) {
        alert('Please input password', 'password');
      }
      await AsyncStorage.setItem('token', response.data.token);

      if (response.data.message === 'OK gaes') {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);

          console.log(response.data);
          // console.log(response.data.data.token);
          navigation.navigate('Home');
        }, 2000);
      } else {
        console.log('Login Gagal');
      }
    } catch (error) {
      console.log(error);
    }

    // const authToken = response.data.token;
    // AsyncStorage.setItem('authToken', authToken)
    //   .then(() => {
    //     navigation.navigate('Home');
    //   })
    //   .catch(error => {
    //     console.error('gagal dapat token:', error);
    //   });
  };

  React.useEffect(() => {
    // OneSignal Initialization
    OneSignal.setAppId('dce5dca6-5b0a-4348-bc46-661d987d06c4');

    // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
    // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
    OneSignal.promptForPushNotificationsWithUserResponse();

    //Method for handling notifications received while app in foreground
    OneSignal.setNotificationWillShowInForegroundHandler(
      notificationReceivedEvent => {
        console.log(
          'OneSignal: notification will show in foreground:',
          notificationReceivedEvent,
        );
        let notification = notificationReceivedEvent.getNotification();
        console.log('notification: ', notification);
        const data = notification.additionalData;
        console.log('additionalData: ', data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('OneSignal: notification opened:', notification);
    });
  });

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <Image
        source={require('./src/asset/user-icon.png')}
        style={{
          width: 150,
          height: 150,
          resizeMode: 'contain',
          marginBottom: 20,
        }}
      />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 500,
          color: '#EFC81A',
          marginBottom: 10,
        }}>
        Welcome !
      </Text>
      <Text
        style={{
          fontWeight: 500,
          color: '#C4C4C4',
          marginBottom: 30,
        }}>
        Log in to your exiting account.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          boxSizing: 'border-box',
          width: 300,
          height: 60,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: '#f5f5f5',
          borderWidth: isActive ? 1 : 0,
          borderColor: isActive ? '#EFC81A' : 'grey',
        }}>
        <Icon
          name="user"
          size={25}
          color={isActive ? '#EFC81A' : 'grey'}
          padding={15}
        />
        <TextInput
          placeholderTextColor={isActive ? '#EFC81A' : 'grey'}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholder="example@gmail.com"
          // value={email}
          // onChange={text => setEmail(text)}
          onChangeText={setEmail}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          boxSizing: 'border-box',
          width: 300,
          height: 60,
          marginBottom: 20,
          borderRadius: 10,
          backgroundColor: '#f5f5f5',
          borderWidth: isActive2 ? 1 : 0,
          borderColor: isActive2 ? '#EFC81A' : 'grey',
        }}>
        <Ikon
          name="lock"
          size={25}
          color={isActive2 ? '#EFC81A' : 'grey'}
          padding={15}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={isActive2 ? '#EFC81A' : 'grey'}
          onFocus={() => setActive2(true)}
          onBlur={() => setActive2(false)}
          // value={password}
          // onChangeText={text => setPassword(text)}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpBtn}
        onPress={() => navigation.navigate('Register')}>
        <Text>
          Don’t have an account?
          <Text style={styles.SignUp_button}> Sign Up</Text>{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="myRecipe"
          component={myRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="savedRecipe"
          component={savedRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="likedRecipe"
          component={likedRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="popularMenu"
          component={popularMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editRecipe"
          component={EditRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editProfileName"
          component={EditProfileName}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editProfileImage"
          component={EditProfileImage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detailRecipe"
          component={DetailRecipe}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginView: {
    marginTop: 25,
  },
  forgotBtn: {
    height: 25,
    width: 150,
    alignSelf: 'flex-end',
  },
  signUpBtn: {
    height: 25,
    marginTop: 15,
  },
  SignUp_button: {
    color: '#EFC81A',
  },
  loginBtn: {
    width: 300,
    borderRadius: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#EFC81A',
  },
});

export default App;
