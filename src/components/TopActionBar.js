import React from 'react'
import { View, StyleSheet, Text} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";


const TopActionBar = () => {
  return (
    <View style={styles.top_bar}>
			<View style={styles.add_button}>
        <Icon.Button
          name="plus"
          backgroundColor="transparent"
          color="green"
          size={50}
          onPress={() => {
						console.log('aaa')
          }}
        />
      </View>
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