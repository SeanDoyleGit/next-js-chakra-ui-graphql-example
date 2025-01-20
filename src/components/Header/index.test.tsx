import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DEFAULT_AVATAR_URL } from "@/constants";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import { useProfile } from "../../hooks/useProfile";
import Header from "./index";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useColorMode: jest.fn(),
}));

jest.mock("../../hooks/useProfile", () => ({
  useProfile: jest.fn(),
}));

describe("Header", () => {
  const renderComponent = () => {
    return render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>,
    );
  };

  beforeEach(() => {
    (useColorMode as jest.Mock).mockReturnValue({
      colorMode: "light",
      toggleColorMode: jest.fn(),
    });

    (useProfile as jest.Mock).mockReturnValue({
      username: "testuser",
      avatarUrl: DEFAULT_AVATAR_URL,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the home button with correct aria label", () => {
    renderComponent();
    const homeButton = screen.getByLabelText("Home");
    expect(homeButton).toBeInTheDocument();
  });

  it("should render the color mode toggle button with correct aria label", () => {
    renderComponent();
    const toggleButton = screen.getByLabelText("Toggle color mode to dark");
    expect(toggleButton).toBeInTheDocument();
  });

  it("should call toggleColorMode when the color mode toggle button is clicked", () => {
    const toggleColorMode = jest.fn();
    (useColorMode as jest.Mock).mockReturnValue({
      colorMode: "dark",
      toggleColorMode,
    });

    renderComponent();
    const toggleButton = screen.getByLabelText("Toggle color mode to light");
    fireEvent.click(toggleButton);
    expect(toggleColorMode).toHaveBeenCalledTimes(1);
  });

  it("should render the avatar", () => {
    renderComponent();
    const avatar = screen.getByRole("img", { name: "testuser avatar image" });
    expect(avatar).toBeInTheDocument();
  });

  it("should render the skeleton loader when username and avatarUrl are not available", () => {
    (useProfile as jest.Mock).mockReturnValue({
      username: null,
      avatarUrl: null,
    });

    renderComponent();
    const avatar = screen.getByLabelText("Loading");
    expect(avatar).toBeInTheDocument();
  });
});
