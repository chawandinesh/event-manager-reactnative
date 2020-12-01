import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { connect } from "react-redux";
const { height, width } = Dimensions.get("window");

function ShowPersonalEvents(props) {
  const getEventDetails = (type, entity) => {
    if (type === "Personal") {
      return props.personalEvents[props.route.params.index][entity];
    } else if (type === "Professional") {
      return props.professionalEvents[props.route.params.index][entity];
    } else if (type === "Social") {
      return props.SocialEvents[props.route.params.index][entity];
    } else if (type === "Others") {
      return props.otherEvents[props.route.params.index][entity];
    }
  };
  const renderWithType = (type) => {
    // if (type === "Personal") {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width,
        }}
      >
        <View
          style={{
            width,
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              backgroundColor: "#495",
              padding: 8,
              color: "#fff",
            }}
          >
            Title
          </Text>
          <Text style={{ fontSize: 15, textAlign: "center", padding: 5 }}>
            {getEventDetails(type, "title")}
          </Text>
        </View>

        <View
          style={{
            width,
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              backgroundColor: "#495",
              padding: 8,
              color: "#fff",
            }}
          >
            Ocassion
          </Text>
          <Text style={{ fontSize: 15, textAlign: "center", padding: 5 }}>
            {getEventDetails(type, "ocassion")}
          </Text>
        </View>

        <View
          style={{
            width,
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              backgroundColor: "#495",
              padding: 8,
              color: "#fff",
            }}
          >
            Date & Time
          </Text>
          <Text style={{ fontSize: 15, textAlign: "center", padding: 5 }}>
            {getEventDetails(type, "dateTime")}
          </Text>
        </View>

        <View
          style={{
            width,
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              backgroundColor: "#495",
              padding: 8,
              color: "#fff",
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 15, textAlign: "center", padding: 5 }}>
            {getEventDetails(type, "note")}
          </Text>
        </View>

        <View
          style={{
            width,
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              backgroundColor: "#495",
              padding: 8,
              color: "#fff",
            }}
          >
            Image
          </Text>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {getEventDetails(type, "image") !== "" && (
              <Image
                source={{
                  uri: getEventDetails(type, "image"),
                }}
                style={{
                  width: 200,
                  alignItems: "center",
                  height: 200,
                  resizeMode: "stretch",
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  };
  return <View>{renderWithType(props.route.params.type)}</View>;
}

const mapStateToProps = (state) => {
  return {
    personalEvents: state.personalEvents,
    professionalEvents: state.professionalEvents,
    otherEvents: state.otherEvents,
    socialEvents: state.socialEvents,
  };
};

export default connect(mapStateToProps)(ShowPersonalEvents);
