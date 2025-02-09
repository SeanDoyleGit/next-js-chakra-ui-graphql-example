import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useCharacters } from "../../hooks/useCharacters";
import { characters } from "../CharacterList/sample";
import CharactersPage, { type CharactersPageProps } from "./index";

jest.mock("../../hooks/useCharacters", () => ({
  useCharacters: jest.fn(),
}));

describe("CharactersPage", () => {
  const mockInfo = { pages: 2 };

  const renderComponent = ({ searchParams }: CharactersPageProps) => {
    return render(
      <ChakraProvider>
        <CharactersPage searchParams={{ page: searchParams.page || "1", character: searchParams.character || undefined }} />
      </ChakraProvider>,
    );
  };

  beforeEach(() => {
    (useCharacters as jest.Mock).mockReturnValue({
      isLoading: false,
      characters: characters,
      info: mockInfo,
    });

    window.history.pushState = jest.fn();
  });

  it("renders CharactersPage with characters", () => {
    renderComponent({ searchParams: { page: "1", character: undefined } });
    expect(screen.getByText("Rick & Morty Characters")).toBeInTheDocument();

    for (const character of characters) {
      expect(screen.getByAltText(character.name)).toBeInTheDocument();
    }
  });

  it("updates page on pagination click", () => {
    renderComponent({ searchParams: { page: "1", character: undefined } });
    fireEvent.click(screen.getByText("Next"));
    expect(window.history.pushState).toHaveBeenCalledWith(null, "", "?page=2");
  });

  it("selects character on character click", () => {
    renderComponent({ searchParams: { page: "1", character: undefined } });
    fireEvent.click(screen.getByAltText("Rick Sanchez"));
    expect(window.history.pushState).toHaveBeenCalledWith(null, "", "?page=1&character=1");
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Location:")).toBeInTheDocument();
    expect(screen.getByText("Citadel of Ricks")).toBeInTheDocument();
  });

  it("deselects character on modal close", () => {
    renderComponent({ searchParams: { page: "1", character: "1" } });
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Location:")).toBeInTheDocument();
    expect(screen.getByText("Citadel of Ricks")).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText("Close"));
    expect(window.history.pushState).toHaveBeenCalledWith(null, "", "?page=1");
    expect(screen.queryByText("Rick Sanchez")).not.toBeInTheDocument();
    expect(screen.queryByText("Location:")).not.toBeInTheDocument();
  });

  it("sets current page to 1 if page is less than 1", async () => {
    renderComponent({ searchParams: { page: "undefined", character: undefined } });
    await screen.findByAltText("Rick Sanchez");
    expect(window.history.pushState).toHaveBeenCalledWith(null, "", "?page=1");
  });
});
