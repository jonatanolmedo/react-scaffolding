import StringsId from "./StringsId";

export const ProfileItemList: ItemData[] = [
  {
    id: "profile0",
    title: "Información personal",
    navigateTo: "EditProfileScreen",
  },
  {
    id: "profile1",
    title: "Inicio de sesión",
    navigateTo: "",
  },
  {
    id: "profile2",
    title: "Pago y envío",
    navigateTo: "",
  },
  {
    id: "profile3",
    title: "Suscripciones",
    navigateTo: "",
  },
];

export const SettingsItemList: ItemData[] = [
  {
    id: "settings0",
    title: "Lenguaje",
    icon: require("../shared/assets/images/ic_translate.png"),
    navigateTo: "",
  },
  {
    id: "settings1",
    title: "Modo oscuro",
    icon: require("../shared/assets/images/ic_moon.png"),
    navigateTo: "",
  },
  {
    id: "settings2",
    title: "Redes",
    icon: require("../shared/assets/images/ic_wifi.png"),
    navigateTo: "",
  },
];

export const ColorItemsList = [
  {
    id: "1", // acts as primary key, should be unique and non-empty string
    testID: StringsId.radioOption1,
    accessibilityLabel: StringsId.radioOption1,
    value: StringsId.radioOption1,
    color: "#FFFFFF",
    borderColor: "#000000",
    borderSize: 6,
    size: 30,
    containerStyle: {
      backgroundColor: "#000000",
      borderRadius: 30,
    },
  },
  {
    id: "2",
    testID: StringsId.radioOption2,
    accessibilityLabel: StringsId.radioOption2,
    value: StringsId.radioOption2,
    color: "#FFFFFF",
    borderColor: "#4E4E4E",
    borderSize: 6,
    size: 30,
    containerStyle: {
      backgroundColor: "#4E4E4E",
      borderRadius: 30,
    },
  },
  {
    id: "3",
    testID: StringsId.radioOption3,
    accessibilityLabel: StringsId.radioOption3,
    value: StringsId.radioOption3,
    color: "#FFFFFF",
    borderColor: "#838383",
    borderSize: 6,
    size: 30,
    containerStyle: {
      backgroundColor: "#838383",
      borderRadius: 30,
    },
  },
  {
    id: "4",
    testID: StringsId.radioOption4,
    accessibilityLabel: StringsId.radioOption4,
    value: StringsId.radioOption4,
    color: "#FFFFFF",
    borderColor: "#A3A3A3",
    borderSize: 6,
    size: 30,
    containerStyle: {
      backgroundColor: "#A3A3A3",
      borderRadius: 30,
    },
  },
  {
    id: "5",
    testID: StringsId.radioOption5,
    accessibilityLabel: StringsId.radioOption5,
    value: StringsId.radioOption5,
    color: "#FFFFFF",
    borderColor: "#C4C4C4",
    borderSize: 6,
    size: 30,
    containerStyle: {
      backgroundColor: "#C4C4C4",
      borderRadius: 30,
    },
  },
  {
    id: "6",
    testID: StringsId.radioOption6,
    accessibilityLabel: StringsId.radioOption6,
    value: StringsId.radioOption6,
    color: "#FFFFFF",
    borderColor: "#E3E3E3",
    borderSize: 6,
    size: 30,
    containerStyle: {
      backgroundColor: "#E3E3E3",
      borderRadius: 30,
    },
  },
];
