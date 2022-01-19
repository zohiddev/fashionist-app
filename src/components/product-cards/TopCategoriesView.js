import Card from "components/Card"
import { Chip } from "components/Chip"
import HoverBox from "components/HoverBox"
import NextImage from "next/image"
import React from "react"

const TopCategoriesView = ({ title, image, lang }) => {
	return (
		<Card position="relative">
			<Chip
				bg="secondary.main"
				position="absolute"
				color="white"
				fontWeight="600"
				fontSize="10px"
				p="4px 10px"
				top="0.875rem"
				left="0.875rem"
				zIndex={2}
			>
				{title}
			</Chip>

			<Chip
				bg="gray.300"
				position="absolute"
				color="gray.800"
				fontWeight="600"
				fontSize="10px"
				p="4px 10px"
				top="0.875rem"
				right="0.875rem"
				zIndex={2}
			>
				{/* {subtitle} */}
				{lang === 'uz' ? 'Eng zo`rlari' : 'Лучший'}
			</Chip>

			<HoverBox position="relative" height="120px" borderRadius={8}>
				{image ? (
					<NextImage
						src={image}
						layout="fill"
						objectFit="cover"
						placeholder="blur"
						blurDataURL="/assets/images/placeholder.png"
						/>
				) : (
					<NextImage
						src="/assets/images/banners/category-1.png"
						layout="fill"
						objectFit="cover"
						placeholder="blur"
						blurDataURL="/assets/images/placeholder.png"
					/>
				)}
			</HoverBox>
		</Card>
	)
}

export default TopCategoriesView
