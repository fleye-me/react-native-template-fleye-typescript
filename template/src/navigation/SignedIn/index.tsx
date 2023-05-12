import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';
import {Home} from 'pages/SignedIn/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const SignedInNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
