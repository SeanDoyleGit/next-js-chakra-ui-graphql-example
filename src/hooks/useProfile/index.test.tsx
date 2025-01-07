import type { ReactNode } from "react";
import { ProfileProvider, useProfile } from "./index";
import { renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom";
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

		expect(result.current.profile).toEqual(profile);
	});

	it("should login and save profile to local storage", () => {
		const { result } = renderHook(() => useProfile(), { wrapper });

		const newProfile = { username: "newuser", jobTitle: "newjob" };

		act(() => {
			result.current.login(newProfile);
		});

		expect(result.current.profile).toEqual(newProfile);
		expect(localStorage.getItem("profile")).toEqual(JSON.stringify(newProfile));
	});

	it("should logout and remove profile from local storage", () => {
		const profile = { username: "testuser", jobTitle: "testjob" };
		localStorage.setItem("profile", JSON.stringify(profile));

		const { result } = renderHook(() => useProfile(), { wrapper });

		act(() => {
			result.current.logout();
		});

		expect(result.current.profile).toBeNull();
		expect(localStorage.getItem("profile")).toBeNull();
	});
});
