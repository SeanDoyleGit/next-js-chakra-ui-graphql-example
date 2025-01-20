import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import { ProfileProvider, useProfile } from "./index";
import "@testing-library/jest-dom";
import { DEFAULT_AVATAR_URL, DEFAULT_COVER_URL } from "@/constants";
import { ChakraProvider } from "@chakra-ui/react";

describe("useProfile", () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <ChakraProvider>
      <ProfileProvider>{children}</ProfileProvider>
    </ChakraProvider>
  );

  beforeEach(() => {
    localStorage.clear();
  });

  it("should load profile from local storage", () => {
    const profile = { username: "testuser", jobTitle: "testjob" };
    localStorage.setItem("profile", JSON.stringify(profile));

    const { result } = renderHook(() => useProfile(), { wrapper });

    expect(result.current.username).toEqual(profile.username);
    expect(result.current.jobTitle).toEqual(profile.jobTitle);
  });

  it("should login and save profile to local storage", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });

    const newProfile = { username: "newuser", jobTitle: "newjob", avatarUrl: "newavatar", coverUrl: "newcover" };

    act(() => {
      result.current.login(newProfile);
    });

    expect(result.current.username).toEqual(newProfile.username);
    expect(result.current.jobTitle).toEqual(newProfile.jobTitle);
    expect(localStorage.getItem("profile")).toEqual(JSON.stringify(newProfile));
  });

  it("should login and save profile with default cover and avatar to local storage", () => {
    const { result } = renderHook(() => useProfile(), { wrapper });

    const newProfile = { username: "newuser", jobTitle: "newjob" };

    act(() => {
      result.current.login(newProfile);
    });

    expect(result.current.username).toEqual(newProfile.username);
    expect(result.current.jobTitle).toEqual(newProfile.jobTitle);
    expect(localStorage.getItem("profile")).toEqual(
      JSON.stringify({ ...newProfile, avatarUrl: DEFAULT_AVATAR_URL, coverUrl: DEFAULT_COVER_URL }),
    );
  });

  it("should logout and remove profile from local storage", () => {
    const profile = { username: "testuser", jobTitle: "testjob" };
    localStorage.setItem("profile", JSON.stringify(profile));

    const { result } = renderHook(() => useProfile(), { wrapper });

    act(() => {
      result.current.logout();
    });

    expect(result.current.username).toBeNull();
    expect(result.current.jobTitle).toBeNull();
    expect(localStorage.getItem("profile")).toBeNull();
  });
});
