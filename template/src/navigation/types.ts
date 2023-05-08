import type {RouteProp as NRouteProp} from '@react-navigation/native';
import {SignInNavigatorRoutesParamList} from './SignIn/types';
import {SignedInNavigatorRoutesParamList} from './SignedIn/types';

export type RootStackParamList = SignInNavigatorRoutesParamList &
  SignedInNavigatorRoutesParamList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootRouteProps<T extends keyof RootStackParamList> = NRouteProp<
  RootStackParamList,
  T
>;
