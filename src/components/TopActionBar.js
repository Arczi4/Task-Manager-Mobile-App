import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

const TopActionBar = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [taskType, setTaskType] = useState("todo");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Not done");
  const [dueDate, setDueDate] = useState(new Date());

  const setDate = (event, date) => {
    const {
      type,
      nativeEvent: { timestamp },
    } = event;
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);

    // Clear form
    setTitle("");
    setDescription("");
    setStatus("Not Done");
    setTaskType("todo");
    setDueDate(new Date());
  };

  return (
    <View style={styles.top_bar}>
      <View style={styles.add_button}>
        <Icon.Button
          name="plus"
          backgroundColor="transparent"
          color="green"
          size={50}
          onPress={toggleModal}
        />
      </View>
      <Modal isVisible={isModalVisible}>
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 30 }}> Daily Task Form </Text>
            </View>
            <Picker
              selectedValue={taskType}
              onValueChange={(itemValue, itemIndex) => setTaskType(itemValue)}
            >
              <Picker.Item label="Todo" value="todo" />
              <Picker.Item label="Email" value="email" />
              <Picker.Item label="Phone" value="phone" />
              <Picker.Item label="Meeting" value="meeting" />
            </Picker>
            <View>
              <TextInput
                fontSize={25}
                placeholder="Title"
                onChangeText={(text) => setTitle(text)}
                value={title}
              />
              <TextInput
                fontSize={25}
                placeholder="Description"
                onChangeText={(text) => setDescription(text)}
                value={description}
              />
              <DateTimePicker
                value={dueDate}
                onChange={(date) =>
                  setDueDate(new Date(date.nativeEvent.timestamp))
                }
              />
            </View>
          </View>
          <View>
            <Button
              title="Create task"
              color="green"
              onPress={() => {
                props.setArrayOfTasks((oldArray) => [
                  ...oldArray,
                  {
                    taskType: taskType,
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    status: status,
                  },
                ]);
                toggleModal();
              }}
            />
            <Button title="Cancel" onPress={toggleModal} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  top_bar: {
    height: 110,
    borderRadius: 4,
    backgroundColor: "blue",
    alignSelf: "stretch",
    position: "top",
  },

  add_button: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 50,
  },
});

export default TopActionBar;
