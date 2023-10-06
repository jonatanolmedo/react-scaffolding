import { StackNavigationProp } from "@react-navigation/stack";
import React, { forwardRef } from "react";
import {
  FlatList,
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import MainNavigationParamsList from "../../../../example/navigators/MainNavigationParamsList";

interface Props {
  titleHeader: string;
  dataList: ItemData[];
  styleList?: StyleProp<ViewStyle>;
  icon?: any;
  textColor?: string;
  navigation: StackNavigationProp<
    MainNavigationParamsList,
    "ProfileScreen",
    undefined
  >;
  onPress?: () => void;
  testId?: string;
  accesibilityLabel?: string;
  testIdList?: string;
  accesibilityLabelList?: string;
}

const FlatListWithHeader: React.ForwardRefRenderFunction<
  TouchableOpacity,
  Props
> = (
  {
    titleHeader,
    dataList,
    styleList,
    icon,
    navigation,
    onPress,
    testId,
    accesibilityLabel,
    testIdList,
    accesibilityLabelList,
  },
  ref
) => {
  return (
    <View style={styles.container}>
      <FlatList
        testID={testIdList}
        accessibilityLabel={accesibilityLabelList}
        style={styleList}
        ListHeaderComponent={<Text style={styles.header}>{titleHeader}</Text>}
        data={dataList}
        scrollEnabled={false}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id}
            testID={`${testId}${item.id}`}
            accessibilityLabel={`${accesibilityLabel}${item.id}`}
            onPress={() => {
              item.navigateTo !== ""
                ? navigation.navigate(item.navigateTo)
                : console.log("Not implemented yet!");
            }}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <View style={styles.itemContainer}>
              {item.icon && (
                <Image
                  style={styles.icon}
                  tintColor="black"
                  source={item.icon}
                />
              )}
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
    backgroundColor: "white",
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
    flexDirection: "row",
    verticalAlign: "middle",
    paddingHorizontal: 24,
    backgroundColor: "white",
  },
  icon: {
    alignSelf: "center",
    marginEnd: 8,
    width: 20,
    height: 20,
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
