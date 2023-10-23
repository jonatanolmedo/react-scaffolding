import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
  KeyboardTypeOptions,
  View,
  Text,
  Image,
} from "react-native";
import StringsId from "../../../../constants/StringsId";
import BackButton from "../Buttons/BackButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextInputName from "../TextInputField/TextInputName";

interface Props {
  style?: StyleProp<ViewStyle>;
  value?: string | undefined;
  onPressBack?: () => void;
  onPressFilter?: () => void;
  autoCorrect?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  testId?: string;
  accesibilityLabel?: string;
}

const ArrowBottomIcon = require("../../../assets/images/ic_arrow_bottom.png");

const HeaderCategories: React.ForwardRefRenderFunction<TextInput, Props> = (
  {
    style,
    value,
    onPressBack,
    onPressFilter,
    autoCorrect,
    keyboardType,
    autoCapitalize,
    onChangeText,
    testId,
    accesibilityLabel,
  },
  ref
) => {
  return (
    <View style={styles.header}>
      <BackButton
        testId={StringsId.btnBack}
        accesibilityLabel={StringsId.btnBack}
        style={styles.backButton}
        onPress={onPressBack}
      />
      <TextInputName
        style={styles.input}
        testId={StringsId.txtSearch}
        accesibilityLabel={StringsId.txtSearch}
        placeholder="Búsqueda..."
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
      />
      <TouchableOpacity
        testID={StringsId.btnFilter}
        accessibilityLabel={StringsId.btnFilter}
        style={styles.btnFilter}
        onPress={onPressFilter}
      >
        <Text style={styles.labelFilter}>Filtrar</Text>
        <Image
          style={styles.arrowBottom}
          tintColor="#FFFFFF"
          source={ArrowBottomIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 56,
    backgroundColor: "#27035F",
  },
  backButton: {
    marginStart: 24,
  },
  input: {
    flexShrink: 0,
    width: "55%",
    height: 40,
    paddingLeft: 20,
    marginStart: 18,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    paddingVertical: 8,
    borderWidth: 0,
    borderRadius: 5,
    color: "black",
  },
  btnFilter: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  labelFilter: {
    flexShrink: 0,
    textAlign: "center",
    color: "white",
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "bold",
    marginStart: 18,
    alignItems: "flex-end",
  },
  arrowBottom: {
    flexShrink: 0,
    alignSelf: "center",
    height: 25,
    width: 25,
  },
});

export default forwardRef(HeaderCategories);
