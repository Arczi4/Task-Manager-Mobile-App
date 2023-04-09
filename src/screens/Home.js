import React from "react";
import { View, StyleSheet} from 'react-native'
import TopActionBar from '../components/TopActionBar'
import TaskForm from "../components/TaskForm";

const Home = () => {
  return (
    <View style={styles.container}>
      <TopActionBar></TopActionBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
