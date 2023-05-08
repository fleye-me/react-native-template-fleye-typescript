import {create} from 'zustand';

interface IUser {
  name: string;
  email: string;
}

interface IUserState {
  user: IUser;
}

export const useUserStore = create<IUserState>(() => ({
  user: {
    name: 'John Doe',
    email: '',
  },
}));
