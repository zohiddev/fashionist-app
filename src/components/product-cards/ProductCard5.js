import Box from "components/Box"
import HoverBox from "components/HoverBox"
import { H4 } from "components/Typography"
import NextImage from "next/image"
import React from "react"

const ProductCard5 = ({ imgUrl, title }) => {
	return (
		<Box>
			<HoverBox borderRadius={5} mb="0.5rem">
				<NextImage
					src={imgUrl}
					width={260}
					height={175}
					layout="responsive"
					objectFit="cover"
					alt={title}
				/>
			</HoverBox>
			<H4 fontSize="14px" fontWeight="600">
				{title}
			</H4>
		</Box>
	)
}

export default ProductCard5
