import { useRoute } from "@react-navigation/native";

export const usePrintScreenName = () => {
  const screenName = useRoute();
  console.log(screenName.name);

  return {
    screenName,
  };
};
