import Box from "components/Box"
import Card from "components/Card"
import FlexBox from "components/FlexBox"
import Grid from "components/grid/Grid"
import NavLink from "components/nav-link/NavLink"
import { SemiSpan } from "components/Typography"
import NextImage from "next/image"
import Link from "next/link"
import React from "react"
import { StyledMegaMenu1 } from "./MegaMenuStyle"

const MegaMenu1 = ({data,minWidth,lang}) => data && (
	<StyledMegaMenu1 className="mega-menu">
		<Card ml="1rem" minWidth={minWidth} boxShadow="regular">
			<FlexBox px="1.25rem" py="0.875rem">
				<Box flex="1 1 0">
					<Grid container spacing={4}>
						{data?.map((item, ind) => (
							<Grid item md={3} key={ind}>
								{item?.slug ? (
									<NavLink
										className="title-link"
										href={`/products/${item?.slug}`}
									>
										{lang === 'uz' ? item?.name_uz : item?.name_ru}
									</NavLink>
								) : (
									<SemiSpan className="title-link">
										{lang === 'uz' ? item?.name_uz : item?.name_ru}
									</SemiSpan>
								)}
								{item.children?.map((sub, i2) => (
									<NavLink
										className="child-link"
										href={`/products/${sub?.slug}`}
										key={i2}
									>
										{lang === 'uz' ? sub?.name_uz : sub?.name_ru}
									</NavLink>
								))}
							</Grid>
						))}
					</Grid>
				</Box>

				{/* {rightImage && (
					<Link href={rightImage.href}>
						<a>
							<Box
								position="relative"
								width="153px"
								height="100%"
							>
								<NextImage
									src={rightImage.imgUrl}
									layout="fill"
									objectFit="contain"
								/>
							</Box>
						</a>
					</Link>
				)} */}
			</FlexBox>

			{/* {bottomImage && (
				<Link href={bottomImage.href}>
					<a>
						<Box position="relative" height="170px">
							<NextImage
								src={bottomImage.imgUrl}
								layout="fill"
								objectFit="cover"
							/>
						</Box>
					</a>
				</Link>
			)} */}
		</Card>
	</StyledMegaMenu1>
)


MegaMenu1.defaultProps = {
	minWidth: "760px",
}

export default MegaMenu1
