import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const TaskForm = (props) => {
  const [taskForm, setTaskForm] = useState({ Title: "", Description: "" });

  return (
    <View>
      <Text> Daily Task Form </Text>
      <View>
        <TextInput
          placeholder="Titliiiiiiiiiiie"
          onChangeText={(text) => setTaskForm(text)}
          value={taskForm.Title}
        />
        <TextInput
          placeholder="Description"
          onChangeText={(text) => setTaskForm(text)}
          value={taskForm.Description}
        />
      </View>
    </View>
  );
};

export default TaskForm;
