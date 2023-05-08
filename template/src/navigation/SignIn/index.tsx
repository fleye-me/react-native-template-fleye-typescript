import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {Login} from 'pages/SignIn/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const SignInNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
