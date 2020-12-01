import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Platform,
  Image,
  Alert,
} from "react-native";
import { connect } from "react-redux";
import { atnAddPersonalEvent } from "../../redux/actions/personalActions";
import { atnAddProfessionalEvent } from "../../redux/actions/professionalActions";
import { atnAddSocialEvent } from "../../redux/actions/socialActions";
import { atnAddOtherEvent } from "../../redux/actions/otherActions";
import Datepick from "../../components/DatePicker";
import Imagepick from "../../components/ImagePicker";

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
        alignItems: "center",
        marginTop: 30,
      }}
    >
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          width: 300,
          borderWidth: 0,
          marginBottom: 10,
          borderBottomWidth: 2,
        }}
        editable={false}
        value={`Type: ${props.route.params.type}`}
        placeholder="Give a Title"
      />

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 300,
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 15, marginRight: 10 }}>Title: </Text>
        </View>
        <View>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              width: 200,
              borderWidth: 0,
              marginBottom: 10,
              borderBottomWidth: 2,
            }}
            onChangeText={(text) => setData({ ...data, title: text })}
            value={data.title}
            placeholder="Give a Title"
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 300,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, marginRight: 10 }}>Ocassion: </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            width: 200,
            borderWidth: 0,
            borderBottomWidth: 2,
            marginBottom: 20,
          }}
          onChangeText={(text) => setData({ ...data, ocassion: text })}
          value={data.ocassion}
          placeholder="Enter Ocassion"
        />
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 300,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, marginRight: 10 }}>Date & Time: </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            width: 180,
            borderWidth: 0,
            borderBottomWidth: 2,
            marginBottom: 20,
          }}
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

      <View
        style={{
          marginBottom: 10,
        }}
      >
        <Imagepick getImageUri={getImageUri} imageData={null} />
      </View>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: 300,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, marginRight: 10 }}>Description: </Text>
        <TextInput
          style={{
            borderColor: "gray",
            width: 200,
            borderWidth: 2,
            marginBottom: 10,
          }}
          onChangeText={(text) => setData({ ...data, note: text })}
          value={data.note}
          placeholder="Enter Description"
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          title="submit"
          style={{ marginTop: 20 }}
          onPress={(e) => handleSubmit(props.route.params.type)}
          color="#495"
        />
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
