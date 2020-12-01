import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import { atnUpdatePersonalEvent } from "../../redux/actions/personalActions";
import { atnUpdateProfessionalEvent } from "../../redux/actions/professionalActions";
import { atnUpdateSocialEvent } from "../../redux/actions/socialActions";
import { atnUpdateOtherEvent } from "../../redux/actions/otherActions";
import Datepick from "../../components/DatePicker";
import Imagepick from "../../components/ImagePicker";
const { height, width } = Dimensions.get("window");
function AddPersonalEvent(props) {
  const [data, setData] = useState({
    title: "",
    note: "",
    ocassion: "",
    image: "",
    dateTime: "",
  });
  const index = props.route.params.index;
  const handleSubmit = () => {
    if (props.route.params.type === "Personal") {
      props.atnUpdatePersonalEvent(data, index);
    } else if (props.route.params.type === "Professional") {
      props.atnUpdateProfessionalEvent(data, index);
    } else if (props.route.params.type === "Social") {
      props.atnUpdateSocialEvent(data, index);
    } else if (props.route.params.type === "Others") {
      props.atnUpdateOtherEvent(data, index);
    }
    props.navigation.goBack();
  };

  const getDateTime = (dateTime) => {
    setData({ ...data, dateTime });
  };

  const getImageUri = (image) => {
    setData({ ...data, image });
  };

  useEffect(() => {
    if (props.route.params.type === "Personal") {
      setData(props.state.personalEvents[index]);
    } else if (props.route.params.type === "Professional") {
      setData(props.state.professionalEvents[index]);
    } else if (props.route.params.type === "Social") {
      setData(props.state.socialEvents[index]);
    } else if (props.route.params.type === "Others") {
      setData(props.state.otherEvents[index]);
    }
  }, []);
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
    atnUpdatePersonalEvent: (data, index) =>
      dispatch(atnUpdatePersonalEvent(data, index)),
    atnUpdateProfessionalEvent: (data, index) =>
      dispatch(atnUpdateProfessionalEvent(data, index)),
    atnUpdateSocialEvent: (data, index) =>
      dispatch(atnUpdateSocialEvent(data, index)),
    atnUpdateOtherEvent: (data, index) =>
      dispatch(atnUpdateOtherEvent(data, index)),
  };
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPersonalEvent);
