/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

// const ENTRIES1 = [
//   {
//     title: 'Sugar Salmon',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/d978/3164/ec253e0e662a4e3aa070cee5202021e3?Expires=1686528000&Signature=ARtfBm9G8BwiczMu2SVEG9RaTdPQCvME1xL7OckIfZ8v1jZnlA9G-96QETbw6FZkaZIg7vzJvS717mNoJ0FJtYgbYW3wS3awhrIOfV5tAOxVJR63W5IL~uFEe8qZNlzHJJY0cVK5HwK8wGoso83WhLS2QktmArwsQBuDStsbxJOHwYeawv94nYbezotpmeErPXDvqE~4C9kZ7igfLWq5k2WB~bgpUuKxT2GtNi5GXkWSH5LzhmZIVyVvhkVTDuOVI-s~BhiqGNZmS3aVqeVLAW7g~wDqyhRk4gRPV6Wbf-RjJoKxGp-JLQm2T4H6DFhU6Nq7taTeB3zGAh5W7kvZQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },
//   {
//     title: 'Spaghetti',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/7c6c/c9e9/40261c035eed315afdc149ee073393ea?Expires=1686528000&Signature=kVHdE~gqCU8-W5yFddWiOC1j3Rvjd1ZK9xVlFAB1IIVN3fghN-SaAhMG9rdS2WKMxABWNT-g9IhMYeWGEe4Hi7w7dheKdC4nDjQRguPo2e6bBaC1j4WDYODYFByGPM0IBJTBS~m6-SECBfOkZWp6L7ThwKyXBaBB9vJBUlMxhHk0yeodmKf35xJRu7VVWZK3Iw7Uz25feWKxff0ogrT2znPLv8thbclPxvTORaoDbJZ6sYQPLhZH6Zrg6zKX26bSjkoqv8EOP1f5Pwh7POpFuaqlO9a0-4ypWE4FCb0MuRvVQOqbnfAduUS26~fG6BrRVJ17HJz7VTt0-wj~xAkBAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },
//   {
//     title: 'Beef Steak',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/4a44/bc4f/c63e16377fa5e9ecd8dde47ecf7cd683?Expires=1686528000&Signature=oPEcaXXO36VRmulUiFXFgMFyxB-JOxHb00bgaKqUyJzuZl94g2hAfV-Tf76fecbWoNYuLNcV8MRkSy6Wjbj5OZzJUg99a7yNjgkmj7C5yefnswbOqwPIiSawkdrJXmD~3kVbTWGRWysnToaf2bKRdeu7MJbeHVmjUrVmmnjiQ~N9MsySftluy1UnRlT7Xvhc-13mYJZfkmrVP8Tl1RZlLVgm6tiJVzXQCIDbtDheDCB~myi25tvHGltUDMGPmdv2~HhDKidAdN-JGpRPBr7ILMbcl7-IZN8R5u1iiYcu96iA7U6oSKVmFsRvlfj9x0QwbhebHNak2WkFZD5OII5z3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },

//   {
//     title: 'Banana Smothies Pop',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1686528000&Signature=iLrZrCvKJ0I1yYF6K3nEpWTRdqH4WynUcWPjtcuxXiL1PwY2ZOIwtMfYRDnH1fuX3u-HXE0Y2O6HEn7ZbfQcnAeiZmgPiQhTVnWIFR-T4Q5D4XwkiODprrZ-FAQcs2nsG2GxYdfP8fiQlsKmFUP3u9i~kybnacTFuEM41Gwh2sCCEnoX~2AtCnWotYIJkwVhZmhA2y6WFXSB4KTv4UEb0-B8HkmUUOxEl6Y5SsVJEMdcyYYEDFJyX-rmbBk5gQkyD4pEgFDiWBSkceQnsw5OLmcgaFQTLnX9SK68oX75St4v-N8O-Hv~-jh~edhVNuOnQyTq2~bPEOIndBYJiRUKFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },
// ];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef([null]);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };
  const [datas, setDatas] = useState();

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get('http://10.0.2.2:4000/food', datas)
      .then(response => {
        console.log(response.data);
        setDatas(response.data.data.slice(0, 5));
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log(datas);
  // useEffect(() => {
  //   setEntries(datas);
  // }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={[styles.item, styles.elevation]}>
        <ParallaxImage
          source={{uri: `${item.image}`}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.name}
        </Text>
        <Text
          style={{fontSize: 12, marginBottom: 13, marginLeft: 30, width: 120}}
          numberOfLines={1}>
          {item.ingredients}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: -45,
          marginBottom: 15,
          fontSize: 17,
          fontWeight: 500,
          color: '#222222',
        }}>
        Popular For You{' '}
      </Text>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 130}
        data={datas}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: -130,
  },
  item: {
    width: screenWidth - 140,
    height: screenWidth - 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    boxShadow: 10,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    // borderRadius: 8,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
    // width: 250,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title: {
    color: '#3F3A3A',
    fontSize: 15,
    fontWeight: 500,
    width: 110,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginTop: 13,
  },
  elevation: {
    // elevation: 50,
    // shadowColor: '#0a0a0a',
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 25,
  },
});
