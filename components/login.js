import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import leaf from '../assets/smallleaf.png';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';


const Login = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Medium': require('../src/fonts/Montserrat-Medium.ttf'),
    'Montserrat-ExtraBold': require('../src/fonts/Montserrat-ExtraBold.ttf')
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <LinearGradient colors={["#040305", "#002D62"]} style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={leaf} style={styles.image} />
        </View>
        <View style={styles.texthead}>
          <Text style={styles.headtext}>Welcome to</Text>
          <Text style={styles.text}>MusicBox</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.loginButton]}onPress={()=> navigation.navigate('Home')} >
            <Text style={styles.buttonText}>Enjoy your Music</Text>
          </TouchableOpacity>
          {/*
          
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.buttonText}>Enjoy the Music</Text>
          </TouchableOpacity>

          
          */}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    overflow: 'hidden',
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 160,
  },
  image: {
    width: 380,   
    borderBottomLeftRadius: 180,
    borderBottomRightRadius: 160,
    height: 430,
    resizeMode: 'cover',
  },
  texthead: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headtext: {
    paddingTop: '5%',
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontWeight: '600',
    color: 'orange',
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'Montserrat-Medium',
    paddingBottom: '10%',
    paddingTop: '5%',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '95%',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    paddingBottom:'20%',
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 12,
    marginBottom: '6%',
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    color: 'black',
  },
});

export default Login;
