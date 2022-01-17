import React from "react"
import ReactSelect from "react-select"
import { colors } from "../utils/themeColors"
import Box from "./Box"
import Typography from "./Typography"

const Select = ({ options, id, label, errorText, ...props }) => {
	// extract spacing props
	let spacingProps = {}
	for (const key in props) {
		if (key.startsWith("m") || key.startsWith("p"))
			spacingProps[key] = props[key]
	}

	return (
		<Box {...spacingProps}>
			{label && (
				<Typography fontSize="0.875rem" mb="6px">
					{label}
				</Typography>
			)}
			<ReactSelect
				options={options}
				styles={customStyles}
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						primary50: colors.gray[100],
						primary: colors.primary.main,
						neutral20: colors.text.disabled,
					},
				})}
				{...props}
			/>
			{errorText && (
				<Typography
					color="error.main"
					ml="0.25rem"
					mt="0.25rem"
					as="small"
				>
					{errorText}
				</Typography>
			)}
		</Box>
	)
}

const customStyles = {
	input: (styles) => ({ ...styles, height: 30 }),
	option: (provided, state) => ({
		...provided,
		color: "inherit",
		backgroundColor: state.isFocused ? "rgba(0,0,0, 0.015)" : "inherit",
		cursor: "pointer",
	}),
}

export default Select
