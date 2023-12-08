import { View, Text } from "react-native";
import React from "react";
import RegistrationForms from "../forms/RegistrationForms";

export default function RegistrationScreen(props) {
  return (
    <View
      style={{
        padding: 30,
        justifyContent: "Center",
        flex: 1,
        backgroundColor: "#120052",
      }}
    >
      <RegistrationForms {...props} />
    </View>
  );
}
