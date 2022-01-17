import Box from "components/Box"
import FlexBox from "components/FlexBox"
import Rating from "components/rating/Rating"
import { H6, SemiSpan, Small } from "components/Typography"
import NextImage from "next/image"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

const StyledProductCard = styled.div`
	.image-holder {
		position: relative;
		:after {
			content: " ";
			position: absolute;
			transition: all 250ms ease-in-out;
		}
	}
	.ellipsis {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	:hover {
		.image-holder:after {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.07);
		}
	}
`

const ProductCard11 = ({
	imgUrl,
	title,
	productUrl,
	price,
	oldPrice,
	rating,
}) => {
	return (
		<Link href={productUrl}>
			<a>
				<StyledProductCard>
					<Box mb="1rem" className="image-holder">
						<NextImage
							src={imgUrl}
							width={100}
							height={100}
							layout="responsive"
							objectFit="cover"
						/>
					</Box>

					<Box mb="0.5rem">
						<Rating
							value={rating}
							outof={5}
							color="warn"
							readonly
						/>
					</Box>

					<H6 className="ellipsis" mb="6px" title={title}>
						{title}
					</H6>

					<FlexBox alignItems="center">
						<SemiSpan
							pr="0.25rem"
							fontWeight="600"
							color="primary.main"
						>
							${price?.toLocaleString()}
						</SemiSpan>

						{oldPrice && (
							<Small color="text.muted" lineHeight="1.3">
								{oldPrice}
							</Small>
						)}
					</FlexBox>
				</StyledProductCard>
			</a>
		</Link>
	)
}

ProductCard11.defaultProps = {
	rating: 5,
	price: 1300,
	oldPrice: 1500,
	imgUrl: "/assets/images/products/mask.png",
	title: "Blutooth Speaker",
	productUrl: "/product/324523",
}

export default ProductCard11
