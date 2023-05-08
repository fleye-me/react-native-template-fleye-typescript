import {NavigationContainer} from '@react-navigation/native';
import {IComponentWithChildren} from 'types';

export const Navigation = ({children}: IComponentWithChildren) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};
