import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton/index";
const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,470</Text>
      </View>

      <StyledButton
        type="primary"
        content="Custom Order"
        onPress={() => {
          console.warn("Custom order button is pressed");
        }}
      />

      <StyledButton
        type="secondary"
        content="Exisiting Inventory"
        onPress={() => {
          console.warn("Exisiting Inventory button is pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
