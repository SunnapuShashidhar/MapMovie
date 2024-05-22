import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions"
import { AuthContext } from '../../context/AuthContext';
import { configJSON } from './config';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { signIn } = useContext(AuthContext)!;

  const handleLogin = () => {
    const { userDetails } = configJSON
    if (username === userDetails.username && password === userDetails.password) {
      signIn();
    } else {
      Alert.alert(configJSON.errorMessage);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{configJSON.login}</Text>
      <TextInput
        placeholder={configJSON.userName}
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      <View>
        <TextInput
          placeholder={configJSON.password}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />

      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginText}>{configJSON.login}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: responsiveFontSize(1),
    backgroundColor: "#fff"
  },
  title: {
    fontSize: responsiveFontSize(4),
    fontWeight: "700",
    color: "#2A4ECA",
    marginBottom: responsiveHeight(2),
    textAlign: "center",
    textTransform: "capitalize"
  },
  input: {
    fontSize: responsiveFontSize(2),
    borderColor: '#F5F9FE',
    borderWidth: 1,
    marginBottom: responsiveHeight(2),
    paddingHorizontal: responsiveFontSize(1),
    backgroundColor: "#F5F9FE",
    borderRadius: responsiveFontSize(1),
    color: "#262626"
  },
  loginButton: {
    backgroundColor: "#3461FD",
    width: "100%",
    padding: responsiveFontSize(.4),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: responsiveFontSize(1.4),
    paddingVertical: responsiveHeight(1.5)
  },
  loginText: {
    color: "#fff",
    fontSize: responsiveFontSize(2.5),
    fontWeight: "700",
    textTransform: "capitalize",
  }
});

export default LoginScreen;
