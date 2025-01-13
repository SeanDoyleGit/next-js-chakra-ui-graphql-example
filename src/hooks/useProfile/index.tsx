import { type ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Profile {
  username: string;
  jobTitle: string;
}

interface ProfileContextProps {
  profile: Profile | null;
  login: (newProfile: Profile) => void;
  logout: () => void;
  isLoading: boolean;
}

export const ProfileContext = createContext<ProfileContextProps>({ profile: null, login: () => {}, logout: () => {}, isLoading: true });

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      try {
        setProfile(JSON.parse(storedProfile));
        setIsLoading(false);
      } catch (error) {
        console.error("Error parsing profile from local storage", error);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = (newProfile: Profile) => {
    setProfile(newProfile);
    localStorage.setItem("profile", JSON.stringify(newProfile));
  };

  const logout = () => {
    setProfile(null);
    localStorage.removeItem("profile");
  };

  return <ProfileContext.Provider value={{ profile, login, logout, isLoading }}>{children}</ProfileContext.Provider>;
};

export const useProfile = () => {
  const { profile, login, logout, isLoading } = useContext(ProfileContext);

  return { isLoggedIn: !!profile, isLoading, profile, login, logout, updateProfile: login };
};
