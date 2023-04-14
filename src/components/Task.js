import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import TaskTypeIcon from "./TaskTypeIcon";
import {
  SwipeItem,
  SwipeButtonsContainer,
  SwipeProvider,
} from "react-native-swipe-item";

const Task = (props) => {
	const [taskState, setTaskState] = useState(props.task.status)

  const rightButton = (
    <SwipeButtonsContainer
      style={{
        alignSelf: "center",
        aspectRatio: 1,
        flexDirection: "column",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={() => setTaskState("Done")}>
        <Text style={{ color: "green" }}>Done!</Text>
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  return (
    <SwipeProvider>
      <SwipeItem
        style={styles.button}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        rightButtons={rightButton}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TaskTypeIcon taskType={props.task.taskType} />
          <View style={styles.container}>
            <Text>Title: {props.task.title}</Text>
            <Text>Description: {props.task.description}</Text>
            <Text>
              Due Date: {props.task.dueDate.toLocaleDateString(props)}
            </Text>
            <Text>Status: {taskState}</Text>
          </View>
        </View>
      </SwipeItem>
    </SwipeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    marginTop: 10,
  },

  button: {
    width: "80%",
    height: 100,
    alignSelf: "center",
    marginVertical: 5,
  },

  swipeContentContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#e3e3e3",
    borderWidth: 1,
  },
});

export default Task;
