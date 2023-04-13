import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";

const TaskForm = (props) => {
  const [taskForm, setTaskForm] = useState({ title: "", description: "" });

  return (
    <View>
      <Text> Daily Task Form </Text>
      <View>
        <TextInput
          placeholder="Title"
          onChangeText={(text) => setTaskForm(text)}
          value={taskForm.title}
        />
        <TextInput
          placeholder="Description"
          onChangeText={(text) => setTaskForm(text)}
          value={taskForm.description}
        />
        <DatePicker
          style={styles.datePickerStyle}
          date={date}
          mode="date"
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-20900"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
        />
      </View>
    </View>
  );
};

export default TaskForm;
