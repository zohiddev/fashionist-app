import Box from "components/Box"
import Card from "components/Card"
import Carousel from "components/carousel/Carousel"
import FlexBox from "components/FlexBox"
import HoverBox from "components/HoverBox"
import { H3, H4 } from "components/Typography"
import useWindowSize from "hooks/useWindowSize"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CategorySectionCreator from "../CategorySectionCreator"

const MostViewed = ({mostViewedProducts}) => {
	const state = useSelector((state) => state.products)
	const lang = useSelector((state) => state.lang.lang)
	const [visibleSlides, setVisibleSlides] = useState(6)
	const width = useWindowSize()
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}
	useEffect(() => {
		if (width < 370) setVisibleSlides(1)
		else if (width < 650) setVisibleSlides(2)
		else if (width < 950) setVisibleSlides(4)
		else setVisibleSlides(5)
	}, [width])

	return (
		<CategorySectionCreator
			iconName="ranking-1"
			title={lang === 'uz' ? "Mijozlar tanlovi" : 'Выбор клиента'}
			seeMoreLink="/products/products?views=views,desc"
		>
			<Box my="-0.25rem">
				<Carousel totalSlides={9} visibleSlides={visibleSlides} showDots={width < 650 ? true : false} showArrow={width < 650 ? false : true}>
					{mostViewedProducts.map((item, ind) => (
						<Box py="0.25rem" key={item.id}>
							<Card p="1rem">
								<Link href={`/product/${item.slug}`}>
									<a>
										<HoverBox borderRadius={8} mb="0.5rem">
											<Image
												loader={myLoader}
												src={item?.images[0]}
												layout="responsive"
												alt={item?.name_uz}
												width={100}
												height={100}
												quality="85"
											/>
										</HoverBox>

										<H3
											className="details title"
											fontSize="14px"
											textAlign="left"
											fontWeight="600"
											color="text.secondary"
											mb="10px"
											title={lang === 'uz' ? item?.name_uz : item?.name_ru}
										>
											{lang === 'uz' ? item?.name_uz.length > 20 ? item?.name_uz.slice(0, 20) + "..." : item?.name_ru : item?.name_ru.length > 20 ? item?.name_ru.slice(0, 20) + "..." : item?.name_ru}
										</H3>
										<FlexBox>
											<H4
												fontWeight="600"
												fontSize="14px"
												color="primary.main"
												mr="0.5rem"
											>
												{Math.ceil(
													item.price
												).toLocaleString()}
												<span> UZS</span>
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

export default MostViewed
