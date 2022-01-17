import clsx from "clsx"
import {
	ButtonBack,
	ButtonNext,
	DotGroup,
	Slide,
	Slider,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"
import React, { Fragment } from "react"
import IconButton from "../buttons/IconButton"
import Icon from "../icon/Icon"
import { StyledCarousel } from "./CarouselStyle"

const Carousel = ({
	children,
	naturalSlideWidth,
	naturalSlideHeight,
	totalSlides,
	visibleSlides,
	currentSlide,
	isIntrinsicHeight,
	hasMasterSpinner,
	infinite,
	autoPlay,
	step,
	interval,
	showDots,
	showArrow,
	showArrowOnHover,
	dotClass,
	dotColor,
	dotGroupMarginTop,
	spacing,
	arrowButtonClass,
	arrowButtonColor,
	leftButtonClass,
	rightButtonClass,
	leftButtonStyle,
	rightButtonStyle,
}) => {
	return (
		<StyledCarousel
			naturalSlideWidth={naturalSlideWidth}
			naturalSlideHeight={naturalSlideHeight}
			totalSlides={totalSlides}
			visibleSlides={visibleSlides}
			isIntrinsicHeight={isIntrinsicHeight}
			hasMasterSpinner={hasMasterSpinner}
			infinite={infinite}
			isPlaying={autoPlay}
			step={step}
			interval={interval}
			dotColor={dotColor}
			dotGroupMarginTop={dotGroupMarginTop}
			spacing={spacing}
			showDots={showDots}
			currentSlide={currentSlide}
			showArrowOnHover={showArrowOnHover}
		>
			<Slider className="custom-slider">
				{React.Children.map(children, (child, ind) => (
					<Slide index={ind}>{child}</Slide>
				))}
			</Slider>

			{showDots && (
				<DotGroup
					className={`custom-dot ${dotClass}`}
					renderDots={(props) => renderDots({ ...props, step })}
				/>
			)}

			{showArrow && (
				<Fragment>
					<IconButton
						className={`arrow-button left-arrow-class ${arrowButtonClass} ${leftButtonClass}`}
						as={ButtonBack}
						variant="contained"
						color={arrowButtonColor}
						style={leftButtonStyle || {}}
					>
						<Icon variant="small" defaultcolor="currentColor">
							arrow-left
						</Icon>
					</IconButton>
					<IconButton
						className={`arrow-button right-arrow-class ${arrowButtonClass} ${rightButtonClass}`}
						as={ButtonNext}
						variant="contained"
						color={arrowButtonColor}
						style={rightButtonStyle || {}}
					>
						<Icon variant="small" defaultcolor="currentColor">
							arrow-right
						</Icon>
					</IconButton>
				</Fragment>
			)}
		</StyledCarousel>
	)
}

const renderDots = ({
	step,
	currentSlide,
	visibleSlides,
	totalSlides,
	carouselStore,
}) => {
	const dots = []
	const total = totalSlides - visibleSlides + 1

	for (let i = 0; i < total; i += step) {
		dots.push(
			<div
				key={i}
				className={clsx({
					dot: true,
					"dot-active": currentSlide === i,
				})}
				onClick={() =>
					carouselStore.setStoreState({
						currentSlide: i,
						autoPlay: false,
					})
				}
			/>
		)

		if (total - i - 1 < step && total - i - 1 !== 0) {
			dots.push(
				<div
					key={i + total}
					className={clsx({
						dot: true,
						"dot-active":
							currentSlide === totalSlides - visibleSlides,
					})}
					onClick={() =>
						carouselStore.setStoreState({
							currentSlide: totalSlides - visibleSlides,
							autoPlay: false,
						})
					}
				/>
			)
		}
	}
	return dots
}

Carousel.defaultProps = {
	naturalSlideWidth: 100,
	naturalSlideHeight: 125,
	totalSlides: 10,
	visibleSlides: 5,
	isIntrinsicHeight: true,
	hasMasterSpinner: false,
	infinite: false,
	autoPlay: false,
	step: 1,
	interval: 2000,
	showDots: false,
	showArrow: true,
	dotGroupMarginTop: "0rem",
	spacing: "1.5rem",
	arrowButtonColor: "secondary",
}

export default Carousel
