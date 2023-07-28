/* eslint-disable prettier/prettier */
/* eslint-disable no-unreachable */
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
import {useNavigation} from '@react-navigation/native';
import {PropTypes} from 'prop-types';

// const ENTRIES1 = [
//   {
//     title: 'Italian Salad',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/6d78/d54e/9d38bac836d2d3d98930f6fc722bfdec?Expires=1686528000&Signature=ExUXUHmrh53d4GQ~JNiEzV8EWc~gjMdgFk1gUeb6CWBrZ88mgMjqYZTwU284Yi2I1m5QkzQIwEmxJlo1u5maFIC5j3wqgryYOpqaOzvgfLO90DNIc9CK3T1LxFrp~Uv88Kb8W80qsmbSxbzOPgPuDwDpUdJk0E~odGN4b5BqBiUAWNRTE2pDZ9qVRm6Pr4E3ui7ZrQhg5n2bbScuQ9x4qui15u7HLIGyr2tTlbMWPzUwX0Cjyh7hhOlLDhThh3Axw~0cQKQLiCoxImMRETmCo5P1oXLnaaR4VCA-pXEF1xg9yvKoTYoTeblGV-a4xQPramrVyDqwV71VkEZMxzZcGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },

//   {
//     title: 'Indian Salad',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/0f19/c165/bb6555764d018e0687640abdfde17ba9?Expires=1686528000&Signature=OByPvPQKUCIaCwT8pUmamJyYXepfsrsYO1JD5iHUmEzVNELRjbE2o6f~FGW3lzF09ynyGRg96B8byuMkgFYhST3YsOM7PryGRRfcXwB73TluZMmuALM38oZyOMvHo~BqJ-0~DER7VbtKffnbwPz-~nHfVCIyaTVMh-DL6RwzotE3PHr9t7GJ2B-iFDrTwUxklGPAxuwBiIG0uWHHjQMRDYaVAOLYheub0~NrjTM24BxFyz8QqcbHoElmniDe4q5fXTo8H8SO-Ag~uZJL7BBJnpkFEyLO4JRnNFnErai5B1dntUNpVS2td5SzCPdWItCH-2CPIEfCgd6Imkh1MEmrXg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },
//   {
//     title: 'Sandwich With Egg',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/2ca7/faff/4da51338c06dd21688b82eae3bc9dfa6?Expires=1686528000&Signature=q6Gf8IQQB4M-IM9mHMvXlfcvmhF9kpL8qOcsrNagmoRdsIDTtAu2uMyk4MCfUfRhgO~zPheNBd9~1kjH2lCwnKbKlmi3Dz9WVoE-E0710AdQ-8UqtBG6~1B3uaU8EllAq4wH9KO6L7y42auzELz1zxmPsMp~Kwfi3ZGPl6UxLmWqk4sT4TA37qed1vo5xWT9A01E9v-7JQPdl1DgKLe~gvSZ01moyoOawLAy7u5RqU0yEdYbHfl1OZSZF9PGSFqq26BFHg3UVRiUmpTMadg89g2Ni1eqE2DKDBN~99HcfbEK29sj0mRuUwOCZ1Mlh61bjnc~XPX6aqztmeR3pZuXwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },

//   {
//     title: 'Bomb Chiken',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration:
//       'https://s3-alpha-sig.figma.com/img/a8f2/635e/cd160da3e1426c3f659218e145224ffc?Expires=1686528000&Signature=XHukRfThy8A0BzABFvyljlKIyvAvln2s7Omc3-4HHf98p7sWCreWsscVgHfjyswy5gWuTbLcSq7P6R93IvjkAj35fVqe3ud0ybnecSv3OgI6w2jtlSnFmMZhNFIZgXj75f0GTkLi94xU6Epruy6Kfz0BQ94Z8guDebRJVGWqG-SbwssfFGtZ~7MsRS~Tc0bE2DBxYAIroA0tusU6GmF1w0ZS4S5dbRjBvH5RTcTUvDNLd8v9qPWsC4kL5ieNnovuwFnCeVFIQdFdWiWMZxNmF-vRY6HghRn2CrQeJGbYJwbH1dZXrXI10uyNjCOpnd~QiyPAaXD4Bmf5lUdyrS3g1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
//   },
// ];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = prop => {
  // const [entries, setEntries] = useState([]);
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
        console.log(response.data.data);
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

  const navigation = useNavigation();
  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <View style={styles.item}>
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
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward} />
      <Carousel
        layout={'default'}
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 117}
        data={datas}
        renderItem={renderItem}
        hasParallaxImages={true}
        // autoplay={false}
        // autoplayDelay={1000}
        // autoplayInterval={1000}
        // enableMomentum={false}
        // lockScrollWhileSnapping={true}
      />
    </View>
  );
};

Carousel.propTypes = {
  data: PropTypes.array.isRequired,
};
export default MyCarousel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: screenWidth - 120,
    height: screenWidth - 220,
    marginTop: 5,
    // marginBottom: 10,
    position: 'absolute',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    // backgroundColor: '#000000',
    // opacity: 0.9,
  },
  title: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 900,
    position: 'absolute',
    top: 105,
    left: 20,
    width: 110,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 25,
  },
});
