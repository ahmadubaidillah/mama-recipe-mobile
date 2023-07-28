// /* eslint-disable prettier/prettier */
// import React from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import * imagePicker from 'react-native-image-picker'

// const Camera = ({route,navigation})=>{
//   const [response,setResponse] = React.useState(null);

//   const requestpermissions = async ()=>{
//     try{
//       const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA{
//         title:'App Camera Permissions',
//         message:'App Need Camera',
//         buttonPositive:'OK',
//         buttonNegative:'Cancel',
//         buttonNeutral:'Ask me Late'
//       })
//       if (granted===PermissionsAndroid.RESULT.GRANTED) {
//         console.log('acces');
//        }
//   }
// }

// const [data, setData] = useState('');
// const handleLogin = () => {
//   axios
//     .post('http://10.0.2.2:4000/food', data)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {});
// };
