import Box from "components/Box"
import Card from "components/Card"
import Carousel from "components/carousel/Carousel"
import { H3 } from "components/Typography"
import useWindowSize from "hooks/useWindowSize"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CategorySectionCreator from "../CategorySectionCreator"
import { useRouter } from "next/router"

const Brands = ({featuredBrands}) => {
	const state = useSelector((state) => state.products)
	const lang = useSelector((state) => state.lang.lang)
	const [visibleSlides, setVisibleSlides] = useState(6)
	const width = useWindowSize()
	const router = useRouter()

	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	useEffect(() => {
		if (width < 370) setVisibleSlides(1)
		else if (width < 650) setVisibleSlides(2)
		else if (width < 950) setVisibleSlides(5)
		else setVisibleSlides(7)
	}, [width])

	return (
		<>
			{
				featuredBrands?.length > 0 ? <CategorySectionCreator
				iconName="Group"
				title={lang === 'uz' ? "Mashxur brendlar" : 'Известные бренды'}
				seeMoreLink={`/products/products`}
			>
				<Box my="-0.25rem">
					<Carousel
						totalSlides={9}
						visibleSlides={visibleSlides}
						showDots={width < 650 ? true : false}
						showArrow={width < 650 ? false : true}
					>
						{featuredBrands?.map((item, ind) => (
							<Box py="0.25rem" key={item?.id}>
								<Card p="1rem" textAlign='center'>
									<Link href={`/products/products?brand=${item?.id}`}>
										<a>
											<Image
												loader={myLoader}
												src={item?.image}
												alt={item?.name_uz}
												width={"100%"}
												objectFit="contain"
												height={90}
												quality="85"
												placeholder="blur"
												blurDataURL="placeholder.png"
											/>

											<H3
												className="title"
												fontSize="14px"
												textAlign="center"
												fontWeight="600"
												color="text.secondary"
												mb="10px"
												title={lang === 'uz' ? item?.name_uz : item?.name_ru}
												onClick={() =>
													handleBrandId(item.id)
												}
											>
												{lang === 'uz' ? item?.name_uz : item?.name_ru}
											</H3>
										</a>
									</Link>
								</Card>
							</Box>
						))}
					</Carousel>
				</Box>
			</CategorySectionCreator>  : null
			}

		</>

	)
}

export default Brands
