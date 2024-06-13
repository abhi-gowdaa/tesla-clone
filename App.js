import { StatusBar } from "expo-status-bar";
import { StyleSheet,View } from "react-native";
import CarItem from "./components/CarItem/index";
import StyledButton from "./components/StyledButton/index"

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem 
      name={'model s'}
      tagline={'order'}
      taglineCTA={'touchless delivery'}
      image={require('./assets/images/ModelS.jpeg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
