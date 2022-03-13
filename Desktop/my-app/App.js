import { StatusBar } from "expo-status-bar";
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
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";
import { useState } from "react";
import Bar from "./Bar";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = ImagePicker.requestMediaLibraryPermissionsAsync();

    if ((await permissionResult).granted === false) {
      alert("Permission to acces camera is required");
      return;
    }
    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    
    if (Platform.OS === "web") {
      const remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
      selectedImage({localUri : pickerResult.uri, remoteUri})
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
    }
  };

  const openShareDialog = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`the aviable image for sharing at : ${selectedImage.remoteUri}`);
      return;
    }
    await Sharing.shareAsync(selectedImage.localUri);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick an Image!!</Text>

      <StatusBar style="auto" />
      <TouchableOpacity onPress={openImagePickerAsync}>
        <Image
          source={{
            uri:
              selectedImage !== null
                ? selectedImage.localUri
                : "https://picsum.photos/200/200",
          }}
          style={styles.photo}
        />
      </TouchableOpacity>
      {selectedImage ? (
        <TouchableOpacity onPress={openShareDialog} style={styles.button}>
          <Text style={styles.buttonText}>Share this image!</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}

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
