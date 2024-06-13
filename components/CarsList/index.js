import react from "react";
import { View, FlatList ,Dimensions} from "react-native";
import cars from "./cars";
import CarItem from '../CarItem/index'
import styles from './styles';

const CarsList = () => {

  return (
    <View style={styles.container}>
        <FlatList
        data={cars}
        renderItem={({item})=><CarItem cars={item}/>}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

export default CarsList;