import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Button, TextInput } from "react-native-paper";
import Logo from "../../../assets/pics/logo2.png";
import fetchServices from "../services/fetchServices";

export default function RegistrationForms({ navigation }) {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleRegistration = async () => {
    try {
      setLoading(true);

      if (name === "" || email === "" || password === "" || repassword === "") {
        showToast("Please input required data");
        setIsError(true);
        return false;
      }

      if (password !== repassword) {
        showToast("Please match the password");
        setIsError(true);
        setPassword("");
        setRepassword("");
        return false;
      }

      const url = "http://192.168.254.108:8000/api/v1/register";
      const data = {
        name,
        email,
        password,
        password_confirmation: repassword,
      };

      const result = await fetchServices.postData(url, data);

      if (result?.message != null) {
        showToast(result?.message);
        setName("");
        setEmail("");
        setPassword("");
        setRepassword("");
      } else {
        navigation.navigate("Login");
      }
    } catch (e) {
      showToast(e.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.registrationContainer}>
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.entryContainer}>
        <TextInput
          mode="outlined"
          placeholder="Name"
          style={{ marginBottom: 30 }}
          value={name}
          onChangeText={setName}
          error={isError}
        />

        <TextInput
          mode="outlined"
          placeholder="Email"
          style={{ marginBottom: 30 }}
          value={email}
          onChangeText={setEmail}
          error={isError}
        />

        <TextInput
          mode="outlined"
          placeholder="Password"
          secureTextEntry={!showPass}
          style={{ marginBottom: 30 }}
          value={password}
          onChangeText={setPassword}
          error={isError}
          right={
            <TextInput.Icon
              icon={showPass ? "eye" : "eye-off"}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />

        <TextInput
          mode="outlined"
          placeholder="Re-Password"
          secureTextEntry={!showPass}
          value={repassword}
          onChangeText={setRepassword}
          error={isError}
          right={
            <TextInput.Icon
              icon={showPass ? "eye" : "eye-off"}
              onPress={() => setShowPass(!showPass)}
            />
          }
        />
      </View>

      <View>
        <Button
          disabled={loading}
          loading={loading}
          onPress={handleRegistration}
          icon="account-plus"
          mode="contained"
          style={styles.btn}
        >
          Sign Up
        </Button>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>Already Have An Account?</Text>
        <TouchableOpacity
          disabled={loading}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ ...styles.message, color: "red", fontWeight: "bold" }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  registrationContainer: {
    backgroundColor: "#120052",
    flexDirection: "column",
  },

  logoContainer: {
    width: "100%",
    alignItems: "center",
  },

  logo: {
    width: "50%",
    height: 200,
  },
  entryContainer: {
    marginTop: 40,
  },
  box: {
    marginBottom: 3,
  },

  btn: {
    padding: 10,
    marginTop: 25,
    backgroundColor: "#223cfd",
  },
  messageContainer: {
    justifyContent: "center",
    marginTop: 40,
    flexDirection: "row",
  },
  message: {
    textAlign: "center",
    color: "white",
    marginRight: 20,
    fontSize: 14,
  },
  error: {
    color: "red",
  },
});
