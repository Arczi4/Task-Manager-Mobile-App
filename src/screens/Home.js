import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import TopActionBar from "../components/TopActionBar";
import Task from "../components/Task";

const Home = () => {
  const [arrayOfTasks, setArrayOfTasks] = useState(Array());
  var index = 0;
  return (
    <SafeAreaView style={styles.container}>
      <TopActionBar
        arrayOfTasks={arrayOfTasks}
        setArrayOfTasks={setArrayOfTasks}
      />
      <ScrollView>
        {/* {Array(arrayOfTasks.length).fill(<Task />)} */}
        {arrayOfTasks.map((task) => {
          index++;
          return <Task key={index} task={task} />;
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
