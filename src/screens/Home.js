import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TopActionBar from "../components/TopActionBar";
import Task from "../components/Task";

const Home = () => {
  const [arrayOfTasks, setArrayOfTasks] = useState(Array());

  return (
    <SafeAreaView style={styles.container}>
      <TopActionBar
        arrayOfTasks={arrayOfTasks}
        setArrayOfTasks={setArrayOfTasks}
      />
      <ScrollView>
        {arrayOfTasks.map((task) => {
          return <Task task={task} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
