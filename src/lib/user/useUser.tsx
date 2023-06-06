import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { RequestState } from '@sassy-js/utils';
import {
  User,
  LoginProps,
  LogoutProps,
  loginWithGoogle,
  logout as logoutFromGoogle,
  observeUser,
} from '@sassy-js/fire';

export type UserContextProps = {
  user?: User;
  setUser: (user?: User) => void;
  userState: RequestState;
  setUserState: (state: RequestState) => void;
};

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [userState, setUserState] = useState<RequestState>('idle');

  useEffect(() => {
    observeUser({
      onLogin: (user) => {
        setUser(user);
        setUserState('success');
      },
      onLogout: () => {
        setUser(undefined);
        setUserState('idle');
      },
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userState,
        setUserState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserValue() {
  return useContext(UserContext).user;
}

export function useSetUser() {
  return useContext(UserContext).setUser;
}

export function useUserState() {
  return useContext(UserContext).userState;
}

export function useSetUserState() {
  return useContext(UserContext).setUserState;
}

export function useUser() {
  const { user, setUser, userState, setUserState } = useContext(UserContext);

  const login = useCallback(({ onSuccess, onFailure }: LoginProps) => {
    loginWithGoogle({
      onSuccess: (user) => {
        setUser(user);
        setUserState('success');
        onSuccess?.(user);
      },
      onFailure: (error) => {
        setUserState('error');
        onFailure?.(error);
      },
    });
  }, []);

  const logout = useCallback(({ onSuccess, onFailure }: LogoutProps) => {
    logoutFromGoogle({
      onSuccess: () => {
        setUser(undefined);
        setUserState('success');
        onSuccess?.(undefined);
      },
      onFailure: (error) => {
        setUserState('error');
        onFailure?.(error);
      },
    });
  }, []);

  return {
    login,
    logout,
    user,
    userState,
    setUser,
    setUserState,
  };
}
