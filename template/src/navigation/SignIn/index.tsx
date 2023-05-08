import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from 'pages/SignIn/Login';

const Stack = createNativeStackNavigator();

export const SignInNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
