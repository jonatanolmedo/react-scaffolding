/**
 * Define screens and navigation parameters for the Onboarding navigation stack.
 *
 * This ensures a typesafe use of `createStackNavigator` and screens.
 */
export type LoginNavigationParamsList = {
  LoginScreen: undefined,
  WelcomeScreen: {
    email: string,
    password: string,
  },
  HomeScreen: undefined,
}

export default LoginNavigationParamsList;