import systemCss from "@styled-system/css"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { color, compose, space } from "styled-system"

const SyledRadio = styled.input(
	(props) =>
		systemCss({
			/* remove standard background appearance */
			"-webkit-appearance": "none",
			"-moz-appearance": "none",
			"-webkit-user-select": "none",
			"-moz-user-select": "none",
			"-ms-user-select": "none",
			"user-select": "none",
			appearance: "none",
			outline: "none",
			cursor: "pointer",

			margin: 0,
			width: 20,
			height: 20,
			borderRadius: 20,
			border: "2px solid",
			borderColor: "text.hint",
			position: "relative",

			"&:checked": {
				borderColor: `${props.color}.main`,
			},

			/* create custom radiobutton appearance */
			"&:after": {
				width: "calc(100% - 6px)",
				height: "calc(100% - 6px)",
				top: "50%",
				left: "50%",
				transform: "translateX(-50%) translateY(-50%)",
				borderRadius: "50%",
				position: "absolute",
				bg: "transparent",
				content: '" "',
				visibility: "visible",
				transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
			},

			/* appearance for checked radiobutton */
			"&:checked:after": {
				bg: `${props.color}.main`,
			},

			"&:disabled": {
				borderColor: `text.disabled`,
			},

			"&:checked:disabled:after": {
				bg: `text.disabled`,
			},
		}),
	compose(color)
)

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: ${(props) =>
		props.labelPlacement !== "end" ? "row" : "row-reverse"};
	input {
		${(props) =>
			props.labelPlacement !== "end"
				? "margin-right: 0.5rem"
				: "margin-left: 0.5rem"};
	}
	label {
		cursor: pointer;
	}
	input[disabled] + label {
		color: text.disabled;
		cursor: unset;
	}

	${color}
	${space}
`

const Radio = ({ id, label, labelPlacement, labelColor, ...props }) => {
	const [radioId, setRadioId] = useState(id)

	// extract spacing props
	let spacingProps = {}
	for (const key in props) {
		if (key.startsWith("m") || key.startsWith("p"))
			spacingProps[key] = props[key]
	}

	useEffect(() => {
		setRadioId(id || Math.random())
	}, [])

	return (
		<Wrapper
			labelPlacement={labelPlacement}
			color={`${labelColor}.main`}
			{...spacingProps}
		>
			<SyledRadio id={radioId} type="radio" {...props} />
			<label htmlFor={radioId}>{label}</label>
		</Wrapper>
	)
}

Radio.defaultProps = {
	color: "secondary",
}

export default Radio
