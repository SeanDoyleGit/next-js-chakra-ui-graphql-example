import { type ButtonProps, type ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  Button: {
    variants: {
      solid: (props: ButtonProps) => {
        return props.colorScheme === "default"
          ? {
              bg: mode("gray.700", "gray.200")(props),
              color: mode("whiteAlpha.900", "gray.800")(props),
              _hover: {
                bg: mode("gray.600", "gray.300")(props),
              },
              _active: {
                bg: mode("gray.500", "gray.400")(props),
              },
            }
          : props.colorScheme === "light"
            ? {
                bg: "gray.200",
                color: "gray.800",
                _hover: {
                  bg: "gray.300",
                },
                _active: {
                  bg: "gray.400",
                },
              }
            : {};
      },
    },
    defaultProps: {
      colorScheme: "default",
    },
  },
};

const sizes = {
  "header-height": "5rem",
  "footer-height": "10rem",
};

const theme = extendTheme({ config, components, sizes, space: sizes });

export default theme;
