import React, { forwardRef } from "react";
import {
  FlatList,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  titleHeader: string;
  dataList: ItemData[];
  styleList?: StyleProp<ViewStyle>;
  textColor?: string;
  onPress?: () => void;
}

const FlatListWithHeader: React.ForwardRefRenderFunction<
  TouchableOpacity,
  Props
> = ({ titleHeader, dataList, styleList, onPress }, ref) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styleList}
        ListHeaderComponent={<Text style={styles.header}>{titleHeader}</Text>}
        data={dataList}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => console.log(item)}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#F6F6F6",
    paddingVertical: 6,
    paddingHorizontal: 24,
    color: "black",
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "bold",
  },
  itemContainer: {
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  itemText: {
    paddingVertical: 8,
    color: "black",
    fontFamily: "Poppins",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default forwardRef(FlatListWithHeader);
