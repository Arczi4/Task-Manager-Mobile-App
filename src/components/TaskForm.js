import React, {useState} from 'react';
import { Text, View, TextInput} from 'react-native';

const TaskForm = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <Text> Daily Task Form </Text>
      <View>
        <TextInput placeholder="Title" />
        <TextInput placeholder="Description" />
      </View>
    </View>
  );
};

export default TaskForm;
