import Box from "components/Box"
import CarouselCard1 from "components/carousel-cards/CarouselCard1"
import Carousel from "components/carousel/Carousel"
import Container from "components/Container"
import React, { Fragment } from "react"
import {  useSelector } from "react-redux"
import useWindowSize from './../../hooks/useWindowSize';

const SliderLower = () => {
	const state = useSelector((state) => state.slides)
	const window = useWindowSize()

	return (
		<Fragment>
			<Box mb={window < 568 ? "1.75rem" : "3.75rem"}>
				<Container>
					<Carousel
						totalSlides={
							state?.slides.filter((el) => el.position == "lower")
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
							.filter((el) => el.position == "lower")
							.map((slide, ind) => (
								<CarouselCard1 slide={slide} key={ind} />
							))}
					</Carousel>
				</Container>
			</Box>
		</Fragment>
	)
}

export default SliderLower
