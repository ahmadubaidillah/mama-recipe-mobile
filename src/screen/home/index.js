/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
// import * as React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// function Home({navigation}) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarIcon: ({focused, color, size}) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused
//                 ? 'ios-information-circle'
//                 : 'ios-information-circle-outline';
//             } else if (route.name === 'Settings') {
//               iconName = focused ? 'ios-list' : 'ios-list-outline';
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: 'tomato',
//           tabBarInactiveTintColor: 'gray',
//         })}>
//         <Tab.Screen name="Home" component={Home} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// export default App;

import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/Feather';

import Icons from 'react-native-vector-icons/dist/Octicons';
import Parallax from '../components/parallaxImage';
import Parallax2 from '../components/parallaxImage2';
import Popular from '../components/popularRecipes';
import Search from '../components/search';
import Add from '../addRecipe/index';
import Profile from '../profile/index';

function Home({navigation, data}) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#E5E5E5'}}>
      <Search />

      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 10,
          fontSize: 17,
          fontWeight: 500,
          color: '#222222',
        }}>
        New Recipes
      </Text>
      <Parallax />
      <Popular />
      <Parallax2 />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: '#EFC81A',
        tabBarinactiveTintColor: 'gray',
        tabBaractiveTintColor: '#EFC81A',
      }}
      // tabBarOptions={{
      //   activeTintColor: '#EFC81A',
      //   // inactiveTintColor: 'gray',
      // }}
    >
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="home"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              style={{marginTop: 11}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="  "
        component={Add}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icons
              name="diff-added"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              style={{marginTop: 11}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="   "
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="user"
              size={size ? size : 24}
              color={focused ? color : '#222222'}
              focused={focused}
              style={{marginTop: 11}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
