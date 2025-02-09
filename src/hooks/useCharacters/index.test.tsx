import { useQuery } from "@apollo/client";
import { renderHook } from "@testing-library/react";
import { useProfile } from "../useProfile";
import { useCharacters } from "./index";
import { characters } from "./sample";

jest.mock("@apollo/client", () => ({
  useQuery: jest.fn(),
  gql: jest.requireActual("@apollo/client").gql,
}));

jest.mock("../useProfile", () => ({
  useProfile: jest.fn(),
}));

describe("useCharacters", () => {
  const mockUseQuery = useQuery as jest.Mock;
  const mockUseProfile = useProfile as jest.Mock;

  beforeEach(() => {
    mockUseQuery.mockReset();
    mockUseProfile.mockReset();
  });

  it("should return loading state when query is loading", () => {
    mockUseProfile.mockReturnValue({ isLoggedIn: true });
    mockUseQuery.mockReturnValue({ loading: true, data: undefined });

    const { result } = renderHook(() => useCharacters({ page: 1 }));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.characters).toEqual([]);
    expect(result.current.info).toEqual({});
  });

  it("should return characters and info when query is successful", () => {
    mockUseProfile.mockReturnValue({ isLoggedIn: true });
    mockUseQuery.mockReturnValue({
      loading: false,
      data: {
        characters: {
          results: characters,
          info: { count: 3, pages: 1, next: null, prev: null },
        },
      },
    });

    const { result } = renderHook(() => useCharacters({ page: 1 }));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.characters).toEqual(characters);
    expect(result.current.info).toEqual({ count: 3, pages: 1, next: null, prev: null });
  });

  it("should skip query if page is not provided or user is not logged in", () => {
    mockUseProfile.mockReturnValue({ isLoggedIn: false });
    mockUseQuery.mockReturnValue({ loading: false, data: undefined });

    const { result } = renderHook(() => useCharacters({ page: 1 }));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.characters).toEqual([]);
    expect(result.current.info).toEqual({});
  });
});
