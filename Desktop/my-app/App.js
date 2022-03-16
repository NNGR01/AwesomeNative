import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import Bar from "./Bar";
import { Card } from "react-native-elements/dist/card/Card";
import Prolfile from "./Profile";

const App = () => {

  return (
    <View style={styles.container}>

      <View>
        <Bar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkred",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },

});

export default App;


