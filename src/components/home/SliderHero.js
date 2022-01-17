import Box from "components/Box"
import CarouselCard1 from "components/carousel-cards/CarouselCard1"
import Carousel from "components/carousel/Carousel"
import Container from "components/Container"
import Navbar from "components/navbar/Navbar"
import React, { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSlides } from "reducers/slidesReducer"
import useWindowSize from './../../hooks/useWindowSize';

const SliderHero = () => {
	const state = useSelector((state) => state.slides)
	const window = useWindowSize()
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	getSlides()(dispatch)
	// }, [dispatch])

	return (
		<Fragment>
			<Navbar navListOpen={true} />
			<Box bg="gray.white" mb={window < 568 ? "1.75rem" : "3.75rem"}>
				<Container pb="1rem">
					<Carousel
						totalSlides={
							state?.slides.filter((el) => el.position == "hero")
								.length
						}
						visibleSlides={1}
						infinite={true}
						autoPlay={true}
						showDots={false}
						showArrow={false}
						spacing="0px"
					>
						{state?.slides
							.filter((el) => el.position == "hero")
							.map((slide, ind) => (
								<CarouselCard1 slide={slide} key={ind} />
							))}
					</Carousel>
				</Container>
			</Box>
		</Fragment>
	)
}

export default SliderHero
