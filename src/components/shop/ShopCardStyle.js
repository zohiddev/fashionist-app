import styled from "styled-components"
import { colors } from "../../utils/themeColors"
import { convertHexToRGB } from "../../utils/utils"
import Card from "../Card"

export const ShopCard1Wrapper = styled(Card)`
	.black-box {
		background-image: linear-gradient(
				to bottom,
				rgba(${convertHexToRGB(colors.gray[900])}, 0.8),
				rgba(${convertHexToRGB(colors.gray[900])}, 0.8)
			),
			url(${(props) =>
				props.coverImgUrl || "/assets/images/banners/cycle.png"});
		background-size: cover;
		background-position: center;
		color: white;
	}
`
