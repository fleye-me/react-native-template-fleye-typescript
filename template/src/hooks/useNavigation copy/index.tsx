import {useNavigation as useRnNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from 'navigation/types';

export const useNavigation = () =>
  useRnNavigation<NativeStackNavigationProp<RootStackParamList>>();
