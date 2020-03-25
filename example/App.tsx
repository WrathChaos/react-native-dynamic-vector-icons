import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import Icon from "./lib/components/Icon";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          color: "#9c0b0b",
          paddingBottom: 24,
          fontWeight: "800",
          textAlign: "center"
        }}
      >
        RN Dynamic Vector Icons (Expo Version)
      </Text>

      <View
        style={{
          width: "40%",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Icon
          size={30}
          name="github"
          color="#24282e"
          type="AntDesign"
          onPress={() => Linking.openURL("https://github.com/WrathChaos")}
        />
        <Icon
          size={30}
          color="#00acee"
          name="twitter"
          type="AntDesign"
          onPress={() => Linking.openURL("https://twitter.com/freakycodercom")}
        />
        <Icon
          size={30}
          color="#000"
          type="AntDesign"
          name="medium-monogram"
          onPress={() => Linking.openURL("https://freakycoder.com/")}
        />
        <Icon
          size={30}
          name="paw"
          color="#ff7f3e"
          type="Foundation"
          onPress={() => alert("Dog Lover?")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
