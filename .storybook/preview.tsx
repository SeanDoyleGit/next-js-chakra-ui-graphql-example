import { ChakraProvider, Flex, IconButton, theme as defaultTheme, useColorMode, useColorModeValue } from "@chakra-ui/react";
import type { Decorator } from "@storybook/react";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import theme from "../src/theme";

const ColorMode = ({ colorMode }: { colorMode: string }) => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode(colorMode);
  }, [colorMode, setColorMode]);

  return null;
};

export const withColorModeToggleBar: Decorator = (Story) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const nextMode = useColorModeValue("dark", "light");

  return (
    <>
      <Flex position="relative" zIndex={defaultTheme.zIndices.modal + 1} justify="flex-start" mb={4}>
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Switch to ${nextMode} mode`}
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
        />
      </Flex>
      <Story />
    </>
  );
};

const withChakra: Decorator = (StoryFn, context) => {
  const { colorMode } = context.globals;

  return (
    <ChakraProvider theme={theme}>
      <div id="story-wrapper" style={{ minHeight: "100vh" }}>
        <ColorMode colorMode={colorMode} />
        <StoryFn />
      </div>
    </ChakraProvider>
  );
};

export const decorators = [withChakra];

export const globalTypes = {
  colorMode: {
    name: "Color Mode",
    description: "Global color mode for components",
    defaultValue: "light",
    toolbar: {
      icon: "moon",
      items: [
        { value: "light", title: "Light Mode" },
        { value: "dark", title: "Dark Mode" },
      ],
    },
  },
};
