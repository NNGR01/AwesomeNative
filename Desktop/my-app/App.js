import { StatusBar } from "expo-status-bar";
import React from 'react';
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


const App = () => {

  const [pickImage, setPickImage] = useState(null);

  
 
  
  
  const openImagePickerAsync = async () => {
    const permissionResult =  await ImagePicker.requestMediaLibraryPermissionsAsync()
    
    
    if(permissionResult.granted === false) {
      alert('permissions to use an image are required');
      return ;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync()
    
    if (pickerResult.cancelled === true ){
      return ;
    }
    setPickImage({localUri : pickerResult.uri})
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an Image!!</Text>
<TouchableOpacity
onPress={openImagePickerAsync}
>
<Image 
style={styles.photo}
source={{uri : pickImage !== null ? pickImage.localUri : 'https://picsum.photos/200/200'}}

/>

</TouchableOpacity>
    <Bar />


    </View>
   
   );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#292929",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
    },
    photo: { height: 200, width: 200, borderRadius: 100,  },
    title: { color: "#fff", fontSize: 30, marginBottom: 20 },
    button: {
      backgroundColor: "blue",
      padding: 7,
      marginTop: 10,
    },
    buttonText: { color: "#fff", fontSize: 20 },
    
  });
  
  export default App;
  
  /*   const arr = [];
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=00")
        .then((response) => response.json())
        .then((data) =>
          setResult(
            data.results.map((item) => {
              fetch(item.url)
                .then((response) => response.json())
                .then((allpokemon) => arr.push(allpokemon));
              setPoke(arr);
            })
          )
        );
    }, []);
   
  console.log(arr); */