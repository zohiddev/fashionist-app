import { cloneElement, useEffect, useState } from "react"
import Box from "../Box"
import { SyledTextField, TextFieldWrapper } from "./TextFieldStyle"
import FlexBox from "components/FlexBox"

const TextField = ({
	id,
	label,
	errorText,
	labelColor,
	endAdornment,
	span,
	spanTitle,
	...props
}) => {
	const [textId, setTextId] = useState(id)

	// extract spacing props
	let spacingProps = {}
	for (const key in props) {
		if (key.startsWith("m") || key.startsWith("p"))
			spacingProps[key] = props[key]
	}

	useEffect(() => {
		if (!id) setTextId(Math.random())
	}, [])

	return (
		<TextFieldWrapper
			color={labelColor && `${labelColor}.main`}
			fullwidth={props.fullwidth}
			{...spacingProps}
		>
			{label && <label htmlFor={textId}>{label}</label>}
			<Box position="relative">
				<FlexBox alignItems='center'>
					{span ? <span style={{backgroundColor: '#DAE1E7', padding: '8px 12px', color: '#2B3445', borderRadius: '5px 0 0 5px', border: '1px solid #DAE1E7'}}>{spanTitle}</span> : null}
					<SyledTextField id={textId} span={span} {...props} />
					{endAdornment &&
						cloneElement(endAdornment, {
							className: `end-adornment ${endAdornment.className}`,
						})}
				</FlexBox>
			</Box>
			{errorText && <small>{errorText}</small>}
		</TextFieldWrapper>
	)
}

TextField.defaultProps = {
	color: "default",
}

export default TextField
