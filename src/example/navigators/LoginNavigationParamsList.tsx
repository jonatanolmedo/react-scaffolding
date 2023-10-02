/**
 * Define screens and navigation parameters for navigation stack.
 *
 * This ensures a typesafe use of `createStackNavigator` and screens.
 */
export type LoginNavigationParamsList = {
  LoginScreen: undefined,
  WelcomeScreen: {
    email: string,
    password: string,
  },
  BottomTabNavigator: undefined,
  HomeScreen: undefined,
}

export default LoginNavigationParamsList;