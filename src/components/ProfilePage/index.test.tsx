import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProfilePage from "./index";

describe("LoginModal", () => {
  const username = "Sean Doyle";
  const jobTitle = "Software Engineer";
  let onLogout: jest.Mock;
  let onUpdateProfile: jest.Mock;

  const renderComponent = () => {
    return render(
      <ChakraProvider>
        <ProfilePage username={username} jobTitle={jobTitle} onLogout={onLogout} onUpdateProfile={onUpdateProfile} />
      </ChakraProvider>,
    );
  };

  beforeEach(() => {
    onLogout = jest.fn();
    onUpdateProfile = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render profile page with username and job title", () => {
    renderComponent();
    expect(screen.getByText(username, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(jobTitle, { exact: false })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /edit profile/i })).toBeInTheDocument();
  });

  it("should log out when logout is pressed", () => {
    renderComponent();
    fireEvent.click(screen.getByRole("button", { name: /logout/i }));
    expect(onLogout).toHaveBeenCalled();
  });

  it("should be able to edit profile", () => {
    renderComponent();
    fireEvent.click(screen.getByRole("button", { name: /edit profile/i }));
    expect(screen.getByLabelText("Username", { exact: false })).toBeInTheDocument();
    expect(screen.getByLabelText("Job Title", { exact: false })).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Username", { exact: false }), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText("Job Title", { exact: false }), { target: { value: "Developer" } });

    fireEvent.click(screen.getByRole("button", { name: /save changes/i }));
    expect(onUpdateProfile).toHaveBeenCalledWith({ username: "John", jobTitle: "Developer" });
  });
});
