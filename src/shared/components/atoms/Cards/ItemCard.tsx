import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  item: any;
  onPressPlus: () => void;
  onPressMinus: () => void;
  onPressFavorite: () => void;
}
const PlusIcon = require("../../../assets/images/ic_plus.png");
const MinusIcon = require("../../../assets/images/ic_minus.png");

const ItemCard: React.FC<Props> = ({
  item,
  onPressFavorite,
  onPressMinus,
  onPressPlus,
}) => {
  return (
    <View
      testID={`card${item.id}`}
      accessibilityLabel={`card${item.id}`}
      style={styles.cardContainer}
    >
      <View style={styles.card}>
        <View style={styles.image} />
        <TouchableOpacity
          testID={`btnFavorite${item.id}`}
          accessibilityLabel={`btnFavorite${item.id}`}
          style={styles.icon}
          onPress={() => {
            onPressFavorite();
          }}
        >
          <Image source={item.imageSource} />
        </TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.descriptionEnd}></Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            testID={`btnMinus${item.id}`}
            accessibilityLabel={`btnMinus${item.id}`}
            style={styles.button}
            onPress={() => {
              onPressMinus();
            }}
          >
            <Image source={MinusIcon} />
          </TouchableOpacity>
          <TouchableOpacity
            testID={`btnPlus${item.id}`}
            accessibilityLabel={`btnPlus${item.id}`}
            style={styles.button}
            onPress={() => {
              onPressPlus();
            }}
          >
            <Image source={PlusIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 12,
    marginHorizontal: 8,
    width: 170,
    height: 280,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.9)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 10,
  },
  card: {
    flex: 1,
    width: 170,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    padding: 16,
  },
  image: {
    flexShrink: 0,
    width: "100%",
    height: 131,
    backgroundColor: "#C4C4C4",
    marginBottom: 14,
  },
  icon: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
  },
  title: {
    color: "grey",
    width: "100%",
    height: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 30,
    fontSize: 6,
    fontWeight: "bold",
    verticalAlign: "middle",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  description: {
    color: "grey",
    width: "80%",
    height: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 30,
    fontSize: 6,
    fontWeight: "bold",
    verticalAlign: "middle",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  descriptionEnd: {
    color: "grey",
    width: "40%",
    height: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 30,
    fontSize: 6,
    fontWeight: "bold",
    verticalAlign: "middle",
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 48,
    height: 48,
    borderRadius: 48,
    justifyContent: "center",
  },
});

export default ItemCard;
