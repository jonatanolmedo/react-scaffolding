import { StyleSheet, Text, View } from "react-native";
import Svg, { Rect, Circle } from "react-native-svg";

const BackgroundLogin: React.FC = () => {
  return (
    <View style={styles.container}>
      <Svg
        style={styles.objects}
        width="428"
        height="926"
        viewBox="0 0 428 926"
        fill="none"
      >
        <Rect
          x="169.833"
          y="1.34567"
          width="370"
          height="370"
          transform="rotate(27.0888 169.833 1.34567)"
          stroke="#C968CF"
          strokeOpacity="0.2"
          strokeWidth="2"
        />
        <Rect
          x="146"
          y="755"
          width="370"
          height="370"
          stroke="#C968CF"
          strokeOpacity="0.2"
          strokeWidth="2"
        />
        <Circle
          cx="253"
          cy="614"
          r="246.5"
          stroke="#C968CF"
          strokeOpacity="0.2"
          strokeWidth="3"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: "100%",
    alignItems: "center",
  },
  objects: {
    flexShrink: 0,
    height: 1126,
    width: 517,
  },
});

export default BackgroundLogin;
