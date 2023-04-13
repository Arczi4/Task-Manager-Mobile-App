import React from "react";
import { Text, View, StyleSheet } from "react-native";
import TaskTypeIcon from "./TaskTypeIcon";

const Task = (props) => {
  return (
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
        <Text>Due Date: {props.task.dueDate.toLocaleDateString(props)}</Text>
        <Text>Status: {props.task.status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    marginTop: 10,
  },
});

export default Task;
