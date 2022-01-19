import Card from "components/Card"
import Carousel from "components/carousel/Carousel"
import useWindowSize from "hooks/useWindowSize"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CategorySectionCreator from "../CategorySectionCreator"
import TopCategoriesView from "../product-cards/TopCategoriesView"

const TopCategories = ({featuredCategories}) => {
	const [visibleSlides, setVisibleSlides] = useState(3)
	const width = useWindowSize()
	const state = useSelector((state) => state.categories)
	const lang = useSelector(state => state.lang.lang)

	useEffect(() => {
		if (width < 650) setVisibleSlides(1)
		else if (width < 950) setVisibleSlides(2)
		else setVisibleSlides(3)
	}, [width])

	return (
		<CategorySectionCreator
			iconName="categories"
			title={lang === 'uz' ? "Ommabop bo'limlar" : "Популярные разделы"}
			seeMoreLink="#"
		>
			<Carousel
				totalSlides={featuredCategories?.length}
				visibleSlides={visibleSlides}
				showDots={width < 650 ? true : false}
				showArrow={width < 650 ? false : true}
			>
				{featuredCategories && featuredCategories.map((item, ind) => (
					<Link href={"/products/"+item.slug} key={ind}>
						<a>
							<Card p="1rem">
								<TopCategoriesView
									title={ lang === 'uz' ? item.name_uz : item.name_ru}
									// subtitle={item.subtitle}
									imgUrl={item.image}
									lang={lang}
								/>
							</Card>
						</a>
					</Link>
				))}
			</Carousel>
		</CategorySectionCreator>
	)
}

export default TopCategories
