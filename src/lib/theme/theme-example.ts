import { colors, spacers, zIndices, typography } from "./tokens";

export const lightTheme = {
	colors: {
		bg: {
			calm: {
				section: colors.white,
				global: colors.grey[50],
				disabled: colors.grey[100],
			},
		},

		text: {
			calm: {
				main: colors.grey[50],
			},
			loud: {
				main: colors.grey[800],
				secondary: colors.grey[500],
				disabled: colors.grey[300],
			},
		},
	},

	spacers: {
		inner: {
			noGap: 0,
			closest: spacers[2],
			close: spacers[4],
			related: spacers[8],
			grouped: spacers[16],
		},

		outer: {
			close: spacers[4],
			related: spacers[8],
			grouped: spacers[16],
			subSection: spacers[24],
			section: spacers[48],
		},

		paddings: {
			compact: spacers[8],
			default: spacers[16],
			relaxed: spacers[24],
			large: spacers[32],
		},

		height: {
			xxxSmall: spacers[4],
			xxSmall: spacers[8],
			xSmall: spacers[16],
			small: spacers[24],
			base: spacers[40],
			large: spacers[48],
			xLarge: spacers[56],
			xxLarge: spacers[64],
		},
	},

	shadows: {
		surface: {
			elevated: `0px 1px 6px rgba(34, 49, 69, 0.12)`,
			dragged: `0px 2px 12px rgba(34, 49, 69, 0.12)`,
		},
		overlay: {
			content: `0px 2px 4px rgba(14, 19, 27, 0.16)`,
			tooltip: `0px 2px 8px rgba(14, 19, 27, 0.12)`,
			drawer: `0px 2px 12px rgba(14, 19, 27, 0.12)`,
			modal: `0px 2px 24px rgba(34, 49, 69, 0.16)`,
			notification: `0px 2px 24px rgba(34, 49, 69, 0.16)`,
		},
	},

	typography: {
		family: {
			base: typography.fontFamily.base,
			heading: typography.fontFamily.heading,
			monospace: typography.fontFamily.monospace,
		},
		fontSize: {
			h1: typography.fontSize.h1,
			h2: typography.fontSize.h2,
			h3: typography.fontSize.h3,
			h4: typography.fontSize.h4,
			h5: typography.fontSize.h5,
			h6: typography.fontSize.h6,
			base: typography.fontSize.base,
			small: typography.fontSize.small,
		},

		lineHeight: {
			h1: typography.lineHeight.h1,
			h2: typography.lineHeight.h2,
			h3: typography.lineHeight.h3,
			h4: typography.lineHeight.h4,
			h5: typography.lineHeight.h5,
			h6: typography.lineHeight.h6,
			base: typography.lineHeight.base,
			small: typography.lineHeight.small,
		},

		fontWeight: {
			regular: typography.fontWeight.regular,
			medium: typography.fontWeight.medium,
			semiBold: typography.fontWeight.semiBold,
		},
	},

	cornerRadius: {
		projectBase: spacers[1],
		micro: spacers[2],
		componentInner: spacers[4],
		componentBase: spacers[8],
		sectionInner: spacers[16],
		sectionBase: spacers[24],
	},

	zIndices: {
		...zIndices,
	},

	animation: {
		base: `0.2s ease-in-out`,
	},
};

export const darkTheme = {
	...lightTheme,
	colors: {
		bg: {
			calm: {
				section: colors.black,
				global: colors.grey[900],
				disabled: colors.grey[600],
			},
		},

		text: {
			calm: {
				main: colors.grey[700],
			},
			loud: {
				main: colors.grey[100],
				secondary: colors.grey[300],
				disabled: colors.grey[500],
			},
		},
	},
};
