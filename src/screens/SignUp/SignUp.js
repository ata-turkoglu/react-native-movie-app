import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from 'react-native';
import validations from './validations';
import LinearGradient from 'react-native-linear-gradient';

export default function Signup() {
  const userData = useState({email: '', password: ''});
  const handleSubmit = () => {
    console.log('111');
  };

  return (
    <View style={{flex: 1}}>
      <Image
        style={styles.bgImage}
        source={require('../../assets/bg-image.jpg')}
        blurRadius={1}
      />
      <LinearGradient
        style={{flex: 1, justifyContent: 'space-between'}}
        colors={['rgb(50,0,0)', 'rgba(0, 60, 80, 0.5)']}>
        {/* colors={['rgb(0, 60, 80)', 'rgba(0, 60, 80, 0.5)']}> */}
        <View style={styles.logo}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={styles.inputbox}
            value={userData.email}
            placeholder="e-mail"
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputbox}
            value={userData.password}
            placeholder="password"
            autoCapitalize={'none'}
          />
          <TextInput
            style={styles.inputbox}
            value={userData.passwordConfirm}
            placeholder="confirm password"
            autoCapitalize={'none'}
          />
          <Pressable
            android_ripple={{color: '#210644'}}
            style={({pressed}) =>
              pressed
                ? [styles.joinbutton, styles.pressedItem]
                : [styles.joinbutton]
            }
            onPress={handleSubmit}>
            <Text style={{color: 'white', fontSize: 20}}>Join</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  logo: {
    height: '30%',
    margin: 30,
    marginTop: 50,
    marginLeft: '15%',
  },
  logoImage: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
    shadowColor: 'rgb(50,0,0)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  inputbox: {
    height: 45,
    marginVertical: 20,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: 8,
    borderColor: 'black',
  },
  joinbutton: {
    marginVertical: 20,
    height: 45,
    backgroundColor: 'rgb(50,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {height: 3, width: 0},
  },
  pressedItem: {opacity: 0.7},
});
