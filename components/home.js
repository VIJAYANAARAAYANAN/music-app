import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import songsData from '../components/data/songs.json';
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });



  const [songs, setSongs] = useState([]);
  useEffect(() => {
    setSongs(songsData);
    console.log('Songs data loaded:', songsData);
  }, []);

  const [likedStatus, setLikedStatus] = useState({});

  const renderItem = ({ item }) => (
    <Pressable style={styles.itemContainer} 
    //onPress={() => handleMusicPress(item)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.album}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
      </View>
    
    </Pressable>
  );

  const handleMusicPress = (item) => {
    navigation.navigate('Music', { item });
  };



  return (
    <LinearGradient colors={["#040305", "#002D62"]} style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>Hello, <Text style={{ fontSize: 23 }}>😊</Text></Text>
          <View style={styles.headerIcons}>
            <FontAwesome name="bell-o" size={24} color="white" />
            <AntDesign name="hearto" size={24} color="white" style={styles.icon} />
            <AntDesign name="setting" size={24} color="white" style={styles.icon} />
          </View>
        </View>
        
        <View style={{ paddingTop: 10, paddingBottom: 15 }}>
          <Text style={styles.headingText}>Songs, <Text style={{ fontSize: 20, color: 'orange' }}>🎸</Text></Text>
        </View>
        <FlatList
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.fileKey}
        />
        <StatusBar style="light" />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    color: 'orange'
  },
  heading: {
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    color: 'orange',
  },
  headerIcons: {
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
  icon: {
    marginLeft: 16,
  },
  likesection: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    gap: 5,
  },
  button: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#333',
    display: 'flex',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#37474F',
  },
  image: {
    width: 70,
    height: 60,
    marginRight: 20,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
  },
  artist: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  duration: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  headingText: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Medium',
    fontSize: 26,
    color: 'white',
  },
});

export default Home;
