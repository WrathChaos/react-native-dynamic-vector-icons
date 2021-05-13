import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="github" type="Feather" size={50} color="black" />
        <Icon name="cog" type="FontAwesome5" size={50} color="black" />
      </SafeAreaView>
    </>
  );
};

export default App;
