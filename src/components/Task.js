import React from 'react'
import { Text, View, StyleSheet} from 'react-native';


const Task = (props) => {
  return (
    <View style={styles.container}>
			<Text>Title: {props.title}</Text>
			<Text>Description: {props.description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
		marginTop: 10,

  },
});

export default Task