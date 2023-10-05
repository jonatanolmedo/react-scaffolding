import { useEffect } from "react";
import { Alert, BackHandler } from "react-native";

const useExitBackButton = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Finalizar", "¿Deseas salir de la aplicación?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Salir", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
};

export default useExitBackButton;
