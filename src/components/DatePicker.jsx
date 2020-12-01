import React, { useState } from "react";
import { Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import moment from "moment";

const DateTimePicker = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    props.getDateTime(moment(date).format("DD-MM-YYYY HH:mm:ss"));
    hideDatePicker();
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Ionicons
        name="ios-time"
        onPress={showDatePicker}
        color="#495"
        size={25}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        is24Hour={false}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimePicker;
