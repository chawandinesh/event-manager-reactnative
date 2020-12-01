import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { atnUpdatePersonalEvent } from "../../redux/actions/personalActions";
import { atnUpdateProfessionalEvent } from "../../redux/actions/professionalActions";
import { atnUpdateSocialEvent } from "../../redux/actions/socialActions";
import { atnUpdateOtherEvent } from "../../redux/actions/otherActions";
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
        <Imagepick getImageUri={getImageUri} imageData={data.image} />
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
