import { Children, cloneElement } from "react"
import StyledRadioGroup from "./RadioGroup.style"

const RadioGroup = ({ children, value, name, onChange, ...props }) => {
	return (
		<StyledRadioGroup {...props}>
			{Children.map(children, (child, index) => {
				return cloneElement(child, {
					id: index,
					name,
					checked: value ? child.props.value === value : undefined,
					onChange,
				})
			})}
		</StyledRadioGroup>
	)
}

export default RadioGroup
