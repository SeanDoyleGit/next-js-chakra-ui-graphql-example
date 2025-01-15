import { DEFAULT_AVATAR_URL, DEFAULT_COVER_URL } from "@/constants";
import { type ReactNode, createContext, useContext, useEffect, useState } from "react";

interface Profile {
  username: string;
  jobTitle: string;
  avatarUrl?: string;
  coverUrl?: string;
}

interface ProfileContextProps {
  username: string | null;
  jobTitle: string | null;
  avatarUrl: string;
  coverUrl: string;
  login: (data: Profile) => void;
  logout: () => void;
  isLoading: boolean;
}

export const ProfileContext = createContext<ProfileContextProps>({
  username: null,
  jobTitle: null,
  avatarUrl: DEFAULT_AVATAR_URL,
  coverUrl: DEFAULT_COVER_URL,
  login: () => {},
  logout: () => {},
  isLoading: true,
});

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [jobTitle, setJobTitle] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(DEFAULT_AVATAR_URL);
  const [coverUrl, setCoverUrl] = useState<string>(DEFAULT_COVER_URL);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      try {
        const { username, jobTitle, avatarUrl, coverUrl } = JSON.parse(storedProfile);
        setUsername(username);
        setJobTitle(jobTitle);
        setAvatarUrl(avatarUrl);
        setCoverUrl(coverUrl);
        setIsLoading(false);
      } catch (error) {
        console.error("Error parsing profile from local storage", error);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = (data: Profile) => {
    const { username, jobTitle, avatarUrl, coverUrl } = data;
    setUsername(username);
    setJobTitle(jobTitle);
    if (avatarUrl) setAvatarUrl(avatarUrl);
    if (coverUrl) setCoverUrl(coverUrl);
    localStorage.setItem("profile", JSON.stringify(data));
  };

  const logout = () => {
    setUsername(null);
    setJobTitle(null);
    setAvatarUrl(DEFAULT_AVATAR_URL);
    setCoverUrl(DEFAULT_COVER_URL);
    localStorage.removeItem("profile");
  };

  return (
    <ProfileContext.Provider value={{ username, jobTitle, avatarUrl, coverUrl, login, logout, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const { username, jobTitle, avatarUrl, coverUrl, login, logout, isLoading } = useContext(ProfileContext);

  return { username, jobTitle, avatarUrl, coverUrl, isLoggedIn: !!username, isLoading, login, logout, updateProfile: login };
};
