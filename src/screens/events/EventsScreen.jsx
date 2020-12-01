import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Switch,
  Alert,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import {
  atnAddPersonalEvent,
  atnDeletePersonalEvent,
  atnUpdatePersonalEvent,
} from "../../redux/actions/personalActions";
import {
  atnAddProfessionalEvent,
  atnDeleteProfessionalEvent,
  atnUpdateProfessionalEvent,
} from "../../redux/actions/professionalActions";
import {
  atnAddSocialEvent,
  atnUpdateSocialEvent,
  atnDeleteSocialEvent,
} from "../../redux/actions/socialActions";
import {
  atnAddOtherEvent,
  atnDeleteOtherEvent,
  atnUpdateOtherEvent,
} from "../../redux/actions/otherActions";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");
function PersonalScreen(props) {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    props.atnAddPersonalEvent(value);
    setValue("");
  };

  const handleDelete = (index, type) => {
    if (type === "Personal") {
      props.atnDeletePersonalEvent(index);
    } else if (type === "Professional") {
      props.atnDeleteProfessionalEvent(index);
    } else if (type === "Social") {
      props.atnDeleteSocialEvent(index);
    } else if (type === "Others") {
      props.atnDeleteOtherEvent(index);
    }
  };

  const handleEdit = (index, type) => {
    if (type === "Personal") {
      props.navigation.navigate("UpdatePersonalEvents", { index, type });
    } else if (type === "Professional") {
      props.navigation.navigate("UpdatePersonalEvents", { index, type });
    } else if (type === "Social") {
      props.navigation.navigate("UpdatePersonalEvents", { index, type });
    } else if (type === "Others") {
      props.navigation.navigate("UpdatePersonalEvents", { index, type });
    }
  };

  const noEvents = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>No Events</Text>
      </View>
    );
  };
  const getEventsWithType = (type) => {
    if (type === "Personal") {
      if (props.state.personalEvents.length) {
        return (
          <FlatList
            data={props.state.personalEvents}
            keyExtractor={(e, idx) => e.title}
            renderItem={renderItems}
          />
        );
      } else {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>No Events</Text>
          </View>
        );
      }
    } else if (type === "Professional") {
      if (props.state.professionalEvents.length) {
        return (
          <FlatList
            data={props.state.professionalEvents}
            keyExtractor={(e, idx) => e.title}
            renderItem={renderItems}
          />
        );
      } else {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>No Events</Text>
          </View>
        );
      }
    } else if (type === "Social") {
      if (props.state.socialEvents.length) {
        return (
          <FlatList
            data={props.state.socialEvents}
            keyExtractor={(e, idx) => e.title}
            renderItem={renderItems}
          />
        );
      } else {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>No Events</Text>
          </View>
        );
      }
    } else if (type === "Others") {
      if (props.state.otherEvents.length) {
        return (
          <FlatList
            data={props.state.otherEvents}
            keyExtractor={(e, idx) => e.title}
            renderItem={renderItems}
          />
        );
      } else {
        return (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text>No Events</Text>
          </View>
        );
      }
    }
  };

  const renderItems = (items) => {
    return (
      <View
        style={{
          padding: 10,
          backgroundColor: "#ddd",
          marginBottom: 2,
          marginTop: 2,
        }}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ShowPersonalEvents", {
                index: items.index,
                type: props.route.name,
              })
            }
            style={{ width: 200 }}
          >
            <Text style={{ fontSize: 20, paddingLeft: 10 }}>
              {items.item.title ? items.item.title : "NO TITLE"}
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={(e) =>
                Alert.alert(
                  "Delete Confirm",
                  `Are you sure want to delete ${items.item.title}`,
                  [
                    {
                      text: "Cancel",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel",
                    },
                    {
                      text: "OK",
                      onPress: () =>
                        handleDelete(items.index, props.route.name),
                    },
                  ]
                )
              }
            >
              <Ionicons name="ios-trash" size={32} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(e) => handleEdit(items.index, props.route.name)}
              style={{ marginLeft: 19 }}
            >
              <FontAwesome name="edit" size={32} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(e) =>
                props.navigation.navigate("ShowPersonalEvents", {
                  index: items.index,
                  type: props.route.name,
                })
              }
              style={{ marginLeft: 19 }}
            >
              <Ionicons name="ios-expand" size={32} color="#687" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {props.route.name}
        </Text>
        <TouchableOpacity
          style={{ borderWidth: 1, padding: 4 }}
          onPress={() =>
            props.navigation.navigate("AddPersonalEvents", {
              type: props.route.name,
            })
          }
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>
      {getEventsWithType(props.route.name)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#495",
  },
});

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    atnAddPersonalEvent: (data) => dispatch(atnAddPersonalEvent(data)),
    atnDeletePersonalEvent: (index) => dispatch(atnDeletePersonalEvent(index)),
    atnUpdatePersonalEvent: (data, index) =>
      dispatch(atnUpdatePersonalEvent(data, index)),
    atnDeleteProfessionalEvent: (index) =>
      dispatch(atnDeleteProfessionalEvent(index)),
    atnDeleteSocialEvent: (index) => dispatch(atnDeleteSocialEvent(index)),
    atnDeleteOtherEvent: (index) => dispatch(atnDeleteOtherEvent(index)),
    atnUpdateProfessionalEvent: (data, index) =>
      dispatch(atnUpdateProfessionalEvent(data, index)),
    atnUpdateSocialEvent: (data, index) =>
      dispatch(atnUpdateSocialEvent(data, index)),
    atnUpdateOtherEvent: (data, index) =>
      dispatch(atnUpdateOtherEvent(data, index)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen);
