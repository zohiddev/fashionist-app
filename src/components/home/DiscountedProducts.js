import Box from "components/Box"
import Card from "components/Card"
import Carousel from "components/carousel/Carousel"
import FlexBox from "components/FlexBox"
import HoverBox from "components/HoverBox"
import { H4 } from "components/Typography"
import productDatabase from "data/product-database"
import useWindowSize from "hooks/useWindowSize"
import NextImage from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import CategorySectionCreator from "../CategorySectionCreator"

const DiscountedProducts = () => {
	const [visibleSlides, setVisibleSlides] = useState(6)
	const width = useWindowSize()

	useEffect(() => {
		if (width < 370) setVisibleSlides(1)
		else if (width < 650) setVisibleSlides(2)
		else if (width < 950) setVisibleSlides(4)
		else setVisibleSlides(6)
	}, [width])

	return (
		<CategorySectionCreator
			iconName="gift"
			title="Big Discounts"
			seeMoreLink="#"
		>
			<Box my="-0.25rem">
				<Carousel totalSlides={9} visibleSlides={visibleSlides}>
					{productDatabase.slice(60, 69).map((item, ind) => (
						<Box py="0.25rem" key={item.id}>
							<Card p="1rem">
								<Link href={`/product/${ind + 20}`}>
									<a>
										<HoverBox borderRadius={8} mb="0.5rem">
											<NextImage
												src={item.imgUrl}
												width={100}
												height={100}
												layout="responsive"
												alt={item.title}
											/>
										</HoverBox>
										<H4
											fontWeight="600"
											fontSize="14px"
											mb="0.25rem"
										>
											{item.title}
										</H4>

										<FlexBox>
											<H4
												fontWeight="600"
												fontSize="14px"
												color="primary.main"
												mr="0.5rem"
											>
												$
												{Math.ceil(
													item.price
												).toLocaleString()}
											</H4>

											<H4
												fontWeight="600"
												fontSize="14px"
												color="text.muted"
											>
												<del>
													$
													{Math.ceil(
														item.price
													).toLocaleString()}
												</del>
											</H4>
										</FlexBox>
									</a>
								</Link>
							</Card>
						</Box>
					))}
				</Carousel>
			</Box>
		</CategorySectionCreator>
	)
}

export default DiscountedProducts
