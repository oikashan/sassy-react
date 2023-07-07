import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { HttpServiceError, RequestState } from '@sassy-js/utils';
import {
  User,
  LoginProps,
  LogoutProps,
  loginWithGoogle,
  logout as logoutFromGoogle,
  observeUser,
  loginWithEmail,
  loginAnonymously,
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

export function UserProvider({
  loader,
  children,
}: {
  loader: React.ReactNode;
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [userState, setUserState] = useState<RequestState>('loading');

  useEffect(() => {
    observeUser({
      onLogin: (user) => {
        setUser(user);
        setUserState('success');
        setIsAuthenticating(false);
      },
      onLogout: () => {
        setUser(undefined);
        setUserState('idle');
        setIsAuthenticating(false);
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
      {isAuthenticating ? loader : children}
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

  const login = useCallback(
    ({
      email,
      password,
      onSuccess,
      onFailure,
      provider = 'google',
    }: LoginProps) => {
      setUserState('loading');

      const handleSuccess = (user: User) => {
        setUser(user);
        setUserState('success');
        onSuccess?.(user);
      };

      const handleFailure = (error: HttpServiceError) => {
        setUserState('error');
        onFailure?.(error);
      };

      if (provider === 'google') {
        loginWithGoogle({
          onSuccess: handleSuccess,
          onFailure: handleFailure,
        });
      }

      if (provider === 'email' && email && password) {
        loginWithEmail({
          email,
          password,
          onSuccess: handleSuccess,
          onFailure: handleFailure,
        });
      }

      if (provider === 'anonymous') {
        loginAnonymously({
          onSuccess: handleSuccess,
          onFailure: handleFailure,
        });
      }
    },
    []
  );

  const logout = useCallback(({ onSuccess, onFailure }: LogoutProps) => {
    logoutFromGoogle({
      onSuccess: () => {
        setUser(undefined);
        setUserState('idle');
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
