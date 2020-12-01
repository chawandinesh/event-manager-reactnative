import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  Image,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
// import RNKeyboardmanager from "react-native-iqkeyboard-manager";
import { connect } from "react-redux";
import { atnAddPersonalEvent } from "../../redux/actions/personalActions";
import { atnAddProfessionalEvent } from "../../redux/actions/professionalActions";
import { atnAddSocialEvent } from "../../redux/actions/socialActions";
import { atnAddOtherEvent } from "../../redux/actions/otherActions";
import Datepick from "../../components/DatePicker";
import Imagepick from "../../components/ImagePicker";
import { ScrollView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get("window");
function AddPersonalEvent(props) {
  const [data, setData] = useState({
    title: "",
    note: "",
    ocassion: "",
    image: "",
    dateTime: "",
  });
  const [visibleDateTimePicker, setVisibleDateTimePicker] = useState(false);
  const handleSubmit = (type) => {
    if (type === "Personal") {
      props.atnAddPersonalEvent(data);
    } else if (type === "Professional") {
      props.atnAddProfessionalEvent(data);
    } else if (type === "Social") {
      props.atnAddSocialEvent(data);
    } else if (type === "Others") {
      props.atnAddOtherEvent(data);
    }

    props.navigation.goBack();
  };

  const getDateTime = (dateTime) => {
    setData({ ...data, dateTime });
  };

  const getImageUri = (image) => {
    setData({ ...data, image });
  };
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: "#495",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          padding: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          borderBottomRightRadius: 60,
          borderTopLeftRadius: 60,
          margin: 40,
          overflow: "hidden",
        }}
      >
        <KeyboardAvoidingView behavior={"padding"}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              marginBottom: 10,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#495",
                borderRadius: 10,
                width: width * 0.7,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Type
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                }}
              >
                {props.route.params.type}
              </Text>
            </View>
          </View>

          <View style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
            <View
              style={{
                backgroundColor: "#495",
                borderRadius: 10,
                width: width * 0.7,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Title
              </Text>
            </View>
            <View>
              <TextInput
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                }}
                onChangeText={(text) => setData({ ...data, title: text })}
                value={data.title}
                placeholder="Enter Title Name"
              />
            </View>
          </View>

          <View style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
            <View
              style={{
                backgroundColor: "#495",
                borderRadius: 10,
                width: width * 0.7,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Ocassion
              </Text>
            </View>
            <View>
              <TextInput
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                }}
                onChangeText={(text) => setData({ ...data, ocassion: text })}
                value={data.ocassion}
                placeholder="Enter Ocassion"
              />
            </View>
          </View>

          <View style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
            <View
              style={{
                backgroundColor: "#495",
                borderRadius: 10,
                width: width * 0.7,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Date & Time
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TextInput
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                }}
                editable={false}
                onFocus={(e) =>
                  Alert.alert(
                    "Select Date Alert",
                    "Please click Select date / time",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                  )
                }
                onChange={(e) =>
                  Alert.alert(
                    "Select Date Alert",
                    "Please click Select date / time",
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                  )
                }
                value={data.dateTime}
                placeholder="Select Date & Time"
              />
              <Datepick getDateTime={getDateTime} />
            </View>
          </View>

          {/* jkkj */}

          <View style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
            <View
              style={{
                backgroundColor: "#495",
                borderRadius: 10,
                width: width * 0.7,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Pick Image
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Imagepick getImageUri={getImageUri} imageData={null} />
            </View>
          </View>

          {/* jsdfk */}

          <View style={{ borderWidth: 1, borderRadius: 10, marginBottom: 10 }}>
            <View
              style={{
                backgroundColor: "#495",
                borderRadius: 10,
                width: width * 0.7,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  padding: 5,
                  fontSize: 15,
                  color: "#fff",
                }}
              >
                Description
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TextInput
                onChangeText={(text) => setData({ ...data, note: text })}
                value={data.note}
                placeholder="Enter Description"
                multiline
                numberOfLines={3}
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Button
              title="submit"
              style={{ marginTop: 20 }}
              onPress={(e) => handleSubmit(props.route.params.type)}
              color="#495"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    atnAddPersonalEvent: (data) => dispatch(atnAddPersonalEvent(data)),
    atnAddProfessionalEvent: (data) => dispatch(atnAddProfessionalEvent(data)),
    atnAddSocialEvent: (data) => dispatch(atnAddSocialEvent(data)),
    atnAddOtherEvent: (data) => dispatch(atnAddOtherEvent(data)),
  };
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonalEvent);
