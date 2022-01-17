import styled from "styled-components"
import { border, color, layout, space } from "styled-system"
import { getTheme } from "utils/utils"
import Box from "./Box"

const Card = styled(Box)`
	background-color: ${getTheme("colors.body.paper")};
	box-shadow: ${(props) =>
		getTheme(`shadows.${props.boxShadow}`, `shadows.${props.elevation}`)};

	:hover {
		box-shadow: ${(props) =>
			props.hoverEffect && getTheme("shadows.large")};
	}

	${border}
	${color}
  ${space}
  ${layout}
`

Card.defaultProps = {
	boxShadow: "small",
	borderRadius: 8,
	hoverEffect: false,
}

export default Card
