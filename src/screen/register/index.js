/* eslint-disable prettier/prettier */
import * as React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Ikon from 'react-native-vector-icons/dist/Feather';
import Loader from '../components/Loader';

const Register = ({navigation}) => {
  const [isActive, setActive] = React.useState(false);
  const [isActive2, setActive2] = React.useState(false);
  const [isActive3, setActive3] = React.useState(false);
  const [isActive4, setActive4] = React.useState(false);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleRegister = () => {
    const data = {
      email: email,
      password: password,
      phone: phone,
      name: name,
    };

    axios
      .post('http://10.0.2.2:4000/user_register', data)
      .then(response => {
        if (response.status === 200) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            console.log(response.data);
            navigation.navigate('Login');
          }, 2000);
        } else {
          console.log('register gagal');
        }
      })
      .catch(err => {
        console.log(`ini gagal ${err}`);
      });
  };

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <Text
        style={{
          fontSize: 28,
          fontWeight: 500,
          color: '#EFC81A',
          marginBottom: 10,
        }}>
        Let's Get Started !
      </Text>
      <Text
        style={{
          fontWeight: 500,
          color: '#999999',
          marginBottom: 30,
        }}>
        Create new account to access all feautures
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
          placeholder="Name"
          onChangeText={setName}
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
          borderWidth: isActive3 ? 1 : 0,
          borderColor: isActive3 ? '#EFC81A' : 'grey',
        }}>
        <Ikon
          name="mail"
          size={25}
          color={isActive3 ? '#EFC81A' : 'grey'}
          padding={15}
        />
        <TextInput
          placeholderTextColor={isActive3 ? '#EFC81A' : 'grey'}
          onFocus={() => setActive3(true)}
          onBlur={() => setActive3(false)}
          placeholder="Email"
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
          borderWidth: isActive4 ? 1 : 0,
          borderColor: isActive4 ? '#EFC81A' : 'grey',
        }}>
        <Ikon
          name="phone"
          size={25}
          color={isActive4 ? '#EFC81A' : 'grey'}
          padding={15}
        />
        <TextInput
          placeholderTextColor={isActive4 ? '#EFC81A' : 'grey'}
          onFocus={() => setActive4(true)}
          onBlur={() => setActive4(false)}
          placeholder="Phone Number"
          onChangeText={setPhone}
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
          backgroundColor: '#FFFFFF',
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
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.loginText}>CREATE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpBtn}>
        <Text>
          Already have account?
          <Text
            style={styles.SignUp_button}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Log in Here{' '}
          </Text>{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
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
  loginText: {color: '#FFFFFF', fontSize: 20},
});
export default Register;
