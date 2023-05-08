import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from 'pages/SignedIn/Home';

const Stack = createNativeStackNavigator();

export const SignedInNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
