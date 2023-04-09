import React, { useState } from 'react'
import { View, StyleSheet, Button} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from 'react-native-modal';
import TaskForm from './TaskForm';


const TopActionBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
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
			<Modal
        isVisible={isModalVisible}>
        <View>
          <TaskForm />
          <View>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({  
    top_bar: {
      height: 110,
      borderRadius: 4,
      backgroundColor: "blue",
			alignSelf: 'stretch',
			position: 'top',
    },

		add_button: {
			flexDirection: "row",
			justifyContent: "flex-end",
			marginTop:50,
		}
  });
  

export default TopActionBar