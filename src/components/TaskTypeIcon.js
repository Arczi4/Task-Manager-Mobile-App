import React, { useState } from "react";
import { View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const TaskTypeIcon = (props) => {
  var taskType = "";
  var taskTypeMargin = 0;

  if (props.taskType === "todo") {
    taskType = "clipboard";
  } else if (props.taskType === "email") {
    taskType = "envelope";
  } else if (props.taskType === "phone") {
    taskType = "phone";
  } else if (props.taskType === "meeting") {
    taskType = "users";
  }

  return (
    <View style={{width: 50, height: 50, alignItems: "center", justifyContent: "center",}}>
      <Icon name={taskType} size={30}></Icon>
    </View>
  );
};

export default TaskTypeIcon;
