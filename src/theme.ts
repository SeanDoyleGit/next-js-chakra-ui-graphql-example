import { type ButtonProps, extendTheme, type ThemeConfig } from "@chakra-ui/react";
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
					: {};
			},
		},
		defaultProps: {
			colorScheme: "default",
		},
	},
};

const theme = extendTheme({ config, components });

export default theme;
