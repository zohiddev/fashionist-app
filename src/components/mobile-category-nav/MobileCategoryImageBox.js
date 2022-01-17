import Icon from "components/icon/Icon"
import NextImage from "next/image"
import React from "react"
import styled from "styled-components"
import FlexBox from "../FlexBox"
import Typography from "../Typography"

const StyledImage = styled(NextImage)`
	border-radius: 5px;
`

const MobileCategoryImageBox = ({ title, imgUrl, icon }) => {
	return (
		<FlexBox
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			{imgUrl ? (
				// <Image src={imgUrl} objectFit="cover" layout="fixed"/>
				<img alt={""} src={imgUrl} style={{objectFit: "cover"}}/>
			) : (
				icon && <Icon size="48px">{icon}</Icon>
			)}
			<Typography
				className="ellipsis"
				textAlign="center"
				fontSize="11px"
				lineHeight="1"
				mt="0.5rem"
			>
				{title}
			</Typography>
		</FlexBox>
	)
}

export default MobileCategoryImageBox
