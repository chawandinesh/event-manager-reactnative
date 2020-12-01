import React, { useState, useEffect } from "react";
import { Image, View, Platform, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

export default function ImagePickerComponent(props) {
  const [image, setImage] = useState();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      props.getImageUri(result.uri);
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        width: 300,
      }}
    >
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 100, height: 100, borderWidth: 2 }}
        />
      )}
      <View style={{ marginLeft: 10 }}>
        <FontAwesome name="plus" color="green" size={30} onPress={pickImage} />
      </View>
    </View>
  );
}
