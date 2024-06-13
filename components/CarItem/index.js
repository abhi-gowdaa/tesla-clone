import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton/index";

const CarItem = (props) => {
  //cta= call to action

  const { name, tagline, taglineCTA, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}{/* '&nbsp;' for space */}
          {" "}
           
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;
