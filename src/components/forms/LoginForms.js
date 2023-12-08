import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Keyboard,
} from "react-native";
import React from "react";
import { Button, Text, TextInput, HelperText } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import fetchServices from "../services/fetchServices";
import Logo from "../../../assets/pics/logo2.png";

export default function LoginForm({ navigation }) {
  const [showPass, setShowPass] = React.useState(false);
  const [submit, setsubmit] = React.useState(false);
  const showToast = (message = "Something wen't wrong") => {
    ToastAndroid.show(message, 3000);
  };

  const handleLogin = async (values) => {
    try {
      setsubmit(true);
      const url = "http://192.168.254.108:8000/api/v1/login";
      const result = await fetchServices.postData(url, values);

      if (result.message != null) {
        showToast(result?.message);
        setsubmit(false);
      } else {
        Keyboard.dismiss();
        navigation.navigate("HomePage");
      }
    } catch (e) {
      setsubmit(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        await handleLogin(values);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        errors,
        touched,
        setTouched,
      }) => {
        return (
          <View style={styles.loginContainer}>
            <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} resizeMode="contain" />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                mode="outlined"
                placeholder="Email"
                left={<TextInput.Icon icon="email" />}
                style={{ marginTop: 10 }}
                defaultValue={values.email}
                value={values.email}
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email && touched.email}
                onFocus={() => setTouched({ email: true }, false)}
              />
              {errors.email && touched.email && (
                <HelperText type="error" visible={errors.email}>
                  {errors.email}
                </HelperText>
              )}
              <TextInput
                mode="outlined"
                placeholder="Password"
                left={<TextInput.Icon icon="lock" />}
                secureTextEntry={!showPass}
                right={
                  <TextInput.Icon
                    icon={showPass ? "eye" : "eye-off"}
                    onPress={() => setShowPass(!showPass)}
                  />
                }
                style={{ marginTop: 20 }}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password && touched.password}
                onFocus={() => setTouched({ password: true }, false)}
              />
              {errors.password && touched.password && (
                <HelperText type="error" visible={errors.password}>
                  {errors.password}
                </HelperText>
              )}
            </View>
            <View>
              <Button
                disable={submit}
                loading={submit}
                onPress={() => {
                  Keyboard.dismiss();
                  handleSubmit();
                }}
                icon="login"
                mode="contained"
                style={[styles.btn, { backgroundColor: "#223cfd" }]}
              >
                Login
              </Button>
              <Button
                disable={submit}
                onPress={() => navigation.navigate("RegistrationScreen")}
                icon="account-plus"
                mode="contained"
                style={styles.btn}
              >
                Register
              </Button>
            </View>

            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Restore")}>
                <Text
                  style={{
                    ...styles.message,
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 20,
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
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
  inputContainer: {
    marginTop: 40,
    marginBottom: "10%",
  },

  btn: {
    padding: 10,
    marginTop: 15,
  },
});
