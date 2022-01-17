import Box from "components/Box"
import HoverBox from "components/HoverBox"
import { H4, Small } from "components/Typography"
import NextImage from "next/image"
import React from "react"
import FlexBox from "../FlexBox"
import Rating from "../rating/Rating"

const ProductCard4 = ({ imgUrl, rating, title, price, reviewCount }) => {
	return (
		<Box>
			<HoverBox mb="1rem" mx="auto" borderRadius={8}>
				<NextImage
					src={imgUrl}
					width={100}
					height={100}
					layout="responsive"
					alt={title}
				/>
			</HoverBox>

			<FlexBox justifyContent="center" alignItems="center" mb="0.25rem">
				<Rating value={rating} color="warn" />
				<Small fontWeight="600" pl="0.25rem">
					({reviewCount})
				</Small>
			</FlexBox>

			<H4
				fontWeight="600"
				fontSize="14px"
				textAlign="center"
				mb="0.25rem"
				title={title}
				ellipsis
			>
				{title}
			</H4>
			<H4
				fontWeight="600"
				fontSize="14px"
				textAlign="center"
				color="primary.main"
			>
				${Math.ceil(price).toLocaleString()}
			</H4>
		</Box>
	)
}

export default ProductCard4
