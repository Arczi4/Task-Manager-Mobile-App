import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";
import TaskForm from "./CreateTaskForm";

const TopActionBar = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
          {/* <TaskForm title={props.title} description={props.description} /> */}
          <View>
            <Text> Daily Task Form </Text>
            <View>
              <TextInput
                placeholder="Title"
                onChangeText={(text) => setTitle(text)}
                value={title}
              />
              <TextInput
                placeholder="Description"
                onChangeText={(text) => setDescription(text)}
                value={description}
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
                  { title: title, description: description },
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
