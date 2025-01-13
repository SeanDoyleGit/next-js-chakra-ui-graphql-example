import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginModal from "./index";
import { ChakraProvider } from "@chakra-ui/react";
import { useProfile } from "../../hooks/useProfile";

jest.mock("../../hooks/useProfile", () => ({
	useProfile: jest.fn(),
}));

describe("LoginModal", () => {
	const renderComponent = () => {
		return render(
			<ChakraProvider>
				<LoginModal />
			</ChakraProvider>,
		);
	};

	let login: jest.Mock;

	beforeEach(() => {
		login = jest.fn();
		(useProfile as jest.Mock).mockReturnValue({
			isLoggedIn: false,
			isLoading: false,
			login: login,
			profile: null,
			logout: jest.fn(),
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("should render when user is not logged in", () => {
		renderComponent();
		expect(screen.getByLabelText("Username", { exact: false })).toBeInTheDocument();
		expect(screen.getByLabelText("Job Title", { exact: false })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
	});

	it("should not render when logged in", () => {
		(useProfile as jest.Mock).mockReturnValue({
			isLoggedIn: true,
			isLoading: false,
			login: jest.fn(),
			profile: { username: "testuser", jobTitle: "testjob" },
			logout: jest.fn(),
		});

		renderComponent();
		expect(screen.queryByRole("button", { name: /login/i })).not.toBeInTheDocument();
	});

	it("should not close the modal when the overlay is clicked", () => {
		renderComponent();
		fireEvent.click(screen.getByTestId("login-modal-overlay"));
		expect(screen.getByLabelText("Username", { exact: false })).toBeInTheDocument();
	});

	it("should not save the username and job title to local storage when the login button is clicked with empty fields", () => {
		renderComponent();
		fireEvent.click(screen.getByRole("button", { name: /login/i }));
		expect(localStorage.getItem("profile")).toBeNull();
	});

	it("should not save the username and job title to local storage when the enter key is pressed with empty fields", () => {
		renderComponent();
		const usernameInput = screen.getByLabelText("Username", { exact: false });
		fireEvent.keyPress(usernameInput, { key: "Enter", code: 13, charCode: 13 });
		expect(localStorage.getItem("profile")).toBeNull();
	});

	it("should save the username and job title to local storage when the login button is clicked", () => {
		renderComponent();
		const usernameInput = screen.getByLabelText("Username", { exact: false });
		const jobTitleInput = screen.getByLabelText("Job Title", { exact: false });
		fireEvent.change(usernameInput, { target: { value: "testuser" } });
		fireEvent.change(jobTitleInput, { target: { value: "testjob" } });
		fireEvent.click(screen.getByRole("button", { name: /login/i }));
		expect(login).toHaveBeenCalledWith({ username: "testuser", jobTitle: "testjob" });
	});

	it("should save the username and job title to local storage when enter it pressed", () => {
		renderComponent();
		const usernameInput = screen.getByLabelText("Username", { exact: false });
		const jobTitleInput = screen.getByLabelText("Job Title", { exact: false });
		fireEvent.change(usernameInput, { target: { value: "testuser" } });
		fireEvent.change(jobTitleInput, { target: { value: "testjob" } });
		fireEvent.submit(jobTitleInput);

		expect(login).toHaveBeenCalledWith({ username: "testuser", jobTitle: "testjob" });
	});
});
