import React, { useState } from 'react';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, StyleSheet } from 'react-native';

const Prolfile = () => {

    const [pickImage, setPickImage] = useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("permissions to use an image are required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setPickImage({ localUri: pickerResult.uri });
  };

    return (
        <View>
            <Text  style={styles.title}>Pick an Image!!</Text>
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          style={styles.photo}
          source={{
            uri:
              pickImage !== null
                ? pickImage.localUri
                : "https://picsum.photos/200/200",
          }}
        />
      </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    photo: { height: 200, width: 200, borderRadius: 100 },
    title: { color: "#fff", fontSize: 30, marginBottom: 20 },
})  

export default Prolfile