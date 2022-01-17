import React, {useEffect} from "react"
import Card from "components/Card"
import Link from "next/link"
import Box from "../Box"
import CategorySectionHeader from "../CategorySectionHeader"
import Container from "../Container"
import Grid from "../grid/Grid"
import ProductCard4 from "../product-cards/ProductCard4"
import { useSelector } from 'react-redux';
import HoverBox from './../HoverBox';
import { H4 } from 'components/Typography';
import Image, { NextImage } from 'next/image';

const TopRatings = () => {
	const state = useSelector(state => state.brands)

	return (
		<Box mb="3.75rem">
			<Container>
				<Box>
					<Grid container spacing={6}>
						<Grid item lg={6} xs={12}>
							<CategorySectionHeader
								iconName="ranking-1"
								title="Mijozlar tanlovi"
								seeMoreLink="#"
							/>
							<Card p="1rem">
								<Grid container spacing={4}>
									{topRatedList.map((item) => (
										<Grid
											item
											md={3}
											sm={6}
											xs={6}
											key={item.title}
										>
											<Link href={item.productUrl}>
												<a>
													<ProductCard4 {...item} />
												</a>
											</Link>
										</Grid>
									))}
								</Grid>
							</Card>
						</Grid>
						<Grid item md={6} xs={12}>
							<CategorySectionHeader
								iconName="Group"
								title="Mashxur brendlar"
								seeMoreLink="#"
							/>
							<Card p="1rem">
								<Grid container spacing={4}>
									{state.brands.slice(0, 4).map((item) => (
										<Grid
											item
											md={3}
											sm={6}
											xs={6}
											key={item.id}
										>
											<Link href={item.slug}>
												<a>
													<Box>
														<HoverBox mb="1rem" mx="auto" borderRadius={8}>
															{/* <NextImage
																src={item.image || ''}
																width={100}
																height={100}
																layout="responsive"
																alt={item.name_uz}
															/> */}
															 {/* <Image
																src={item.image}
																alt={item.name_uz}
																width={100}
																height={100}
																layout="responsive"
															/> */}
															<img
																src={item.image}
																alt=""
																style={{width: '130px', height: '130px', objectFit: 'contain'}}
															/>
														</HoverBox>
														<H4
															fontWeight="600"
															fontSize="14px"
															textAlign="center"
															mb="0.25rem"
															title={item.name_uz}
															ellipsis
														>
															{item.name_uz}
														</H4>
													</Box>
												</a>
											</Link>
										</Grid>
									))}
								</Grid>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}

const topRatedList = [
	{
		imgUrl: "/assets/images/products/camera-1.png",
		title: "Camera",
		rating: 4,
		price: 3300,
		reviewCount: 49,
		productUrl: "/product/d1",
	},
	{
		imgUrl: "/assets/images/products/shoes-2.png",
		title: "Shoe",
		rating: 4.75,
		price: 400,
		reviewCount: 20,
		productUrl: "/product/d12",
	},
	{
		imgUrl: "/assets/images/products/mobile-1.png",
		title: "Phone",
		rating: 5,
		price: 999,
		reviewCount: 65,
		productUrl: "/product/d14",
	},
	{
		imgUrl: "/assets/images/products/watch-1.png",
		title: "Watch",
		rating: 5,
		price: 999,
		reviewCount: 75,
		productUrl: "/product/d16",
	},
]

const brandList = [
	{
		imgUrl: "/assets/images/products/london-britches.png",
		title: "London Britches",
		productUrl: "/product/e1",
	},
	{
		imgUrl: "/assets/images/products/jim and jiko.png",
		title: "Jim & Jago",
		productUrl: "/product/e14",
	},
]

export default TopRatings
