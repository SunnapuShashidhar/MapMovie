import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions"
import { AuthContext } from '../../context/AuthContext';
import { configJSON } from './config';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext)!;
  const changePasswordVisiablity = () => {
    setSecureTextEntry(!secureTextEntry)
  }
  const removeError = (error: string) => {
    setError(error)
  }
  const handleLogin = () => {
    removeError('');
    const { userDetails } = configJSON;
    if (username === "") {
      removeError(configJSON.errorMessage[1])
    }
    else if (password === "") {
      removeError(configJSON.errorMessage[2])
    }
    else if (username.toLocaleLowerCase() === userDetails.username && password === userDetails.password) {
      signIn();
    } else {
      removeError(configJSON.errorMessage[0])
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{configJSON.login}</Text>
      {error !== '' && <View style={styles.errorContainer}>
        <AntDesign name="warning" color={"red"} size={responsiveFontSize(2.5)} />
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={() => removeError('')}>
          <Feather name="x" color={"red"} size={responsiveFontSize(2.5)} />
        </TouchableOpacity>
      </View>}
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
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
        <TouchableOpacity onPress={changePasswordVisiablity} style={styles.eyeIcon}>
          <Entypo name={secureTextEntry ? configJSON.closeEye : configJSON.openEye}
            size={responsiveFontSize(2.5)} color={"#000"} />
        </TouchableOpacity>
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
  },
  eyeIcon: {
    position: "absolute",
    right: "5%",
    top: "20%",
  },
  errorContainer: {
    width: "100%",
    padding: responsiveFontSize(1.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: responsiveFontSize(1),
    marginVertical: responsiveHeight(3)
  },
  errorText: {
    color: "red",
    width: "70%",
    fontSize: responsiveFontSize(2)
  },
});

export default LoginScreen;
