import { Chip } from "components/Chip"
import Image from "components/Image"
import Link from "next/link"
import React, { Fragment, useCallback, useState } from "react"
import Box from "../Box"
import Button from "../buttons/Button"
import Card from "../Card"
import FlexBox from "../FlexBox"
import Grid from "../grid/Grid"
import Hidden from "../hidden/Hidden"
import Icon from "../icon/Icon"
import Modal from "../modal/Modal"
import NavLink from "../nav-link/NavLink"
import ProductIntro from "../products/ProductIntro"
import Rating from "../rating/Rating"
import { H5, SemiSpan } from "../Typography"
import { StyledProductCard9 } from "./ProductCardStyle"

const ProductCard9 = ({
	imgUrl,
	title,
	price,
	off,
	subcategories,
	rating,
	item,
	...props
}) => {
	const [cartAmount, setCartAmount] = useState(0)
	const [open, setOpen] = useState(false)

	const toggleDialog = useCallback(() => {
		setOpen((open) => !open)
	}, [])

	const handleCartAmountChange = useCallback(
		(amount) => () => {
			console.log(amount)

			if (amount >= 0) setCartAmount(amount)
		},
		[]
	)

	return (
		<StyledProductCard9 overflow="hidden" width="100%" {...props}>
			<Grid container spacing={1}>
				<Grid item md={3} sm={4} xs={12}>
					<Box position="relative">
						{off && (
							<Chip
								position="absolute"
								bg="primary.main"
								color="primary.text"
								fontSize="10px"
								fontWeight="600"
								p="5px 10px"
								top="10px"
								left="10px"
							>
								{off}% off
							</Chip>
						)}
						<Icon
							color="secondary"
							variant="small"
							className="quick-view"
							onClick={toggleDialog}
						>
							eye-alt
						</Icon>
						<Image
							src={item.image}
							alt={title}
							width="100%"
							borderRadius="0.5rem"
						/>
					</Box>
				</Grid>

				<Grid item md={8} sm={8} xs={12}>
					<FlexBox
						flexDirection="column"
						justifyContent="center"
						height="100%"
						p="1rem"
					>
						<div className="categories">
							{subcategories?.map((item) => (
								<NavLink
									className="link"
									href={item.url}
									key={item.title}
								>
									{item.title}
								</NavLink>
							))}
						</div>

						<Link href="/product/34324321">
							<a>
								<H5 fontWeight="600" my="0.5rem">
									{item.name_uz}
								</H5>
							</a>
						</Link>

						{/* <Rating
							value={rating || 0}
							outof={5}
							color="warn"
							onChange={(value) => {
								console.log(value, "from rating")
							}}
						/> */}

						<FlexBox mt="0.5rem" mb="1rem" alignItems="center">
							<H5
								fontWeight={600}
								color="primary.main"
								mr="0.5rem"
							>
								${item.price?.toFixed(2)}
							</H5>
							{off && (
								<SemiSpan fontWeight="600">
									<del>
										$
										{(item.price - (item.price * off) / 100).toFixed(
											2
										)}
									</del>
								</SemiSpan>
							)}
						</FlexBox>

						<Hidden up="sm">
							<FlexBox
								alignItems="center"
								justifyContent="space-between"
								flexDirection="row-reverse"
								height="30px"
							>
								<Icon
									className="favorite-icon outlined-icon"
									variant="small"
								>
									heart
								</Icon>

								<FlexBox
									alignItems="center"
									flexDirection="row-reverse"
								>
									<Button
										variant="outlined"
										color="primary"
										padding="5px"
										size="none"
										borderColor="primary.light"
										onClick={handleCartAmountChange(
											cartAmount + 1
										)}
									>
										<Icon variant="small">plus</Icon>
									</Button>

									{!!cartAmount && (
										<Fragment>
											<H5
												fontWeight="600"
												fontSize="15px"
												mx="0.75rem"
											>
												{cartAmount}
											</H5>
											<Button
												variant="outlined"
												color="primary"
												padding="5px"
												size="none"
												borderColor="primary.light"
												onClick={handleCartAmountChange(
													cartAmount - 1
												)}
											>
												<Icon variant="small">
													minus
												</Icon>
											</Button>
										</Fragment>
									)}
								</FlexBox>
							</FlexBox>
						</Hidden>
					</FlexBox>
				</Grid>

				<Hidden as={Grid} down="sm" item md={1} xs={12}>
					<FlexBox
						flexDirection="column"
						alignItems="center"
						justifyContent="space-between"
						minWidth="30px"
						height="100%"
						p="1rem 0rem"
						ml="auto"
					>
						<Icon
							className="favorite-icon outlined-icon"
							variant="small"
						>
							heart
						</Icon>
						{/* <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon> */}

						<FlexBox
							className="add-cart"
							alignItems="center"
							flexDirection={
								!!!cartAmount ? "column" : "column-reverse"
							}
						>
							<Button
								variant="outlined"
								color="primary"
								padding="5px"
								size="none"
								borderColor="primary.light"
								onClick={handleCartAmountChange(cartAmount + 1)}
							>
								<Icon variant="small">plus</Icon>
							</Button>
							{!!cartAmount && (
								<Fragment>
									<H5
										fontWeight="600"
										fontSize="15px"
										m="0.5rem"
									>
										{cartAmount}
									</H5>
									<Button
										variant="outlined"
										color="primary"
										padding="5px"
										size="none"
										borderColor="primary.light"
										onClick={handleCartAmountChange(
											cartAmount - 1
										)}
									>
										<Icon variant="small">minus</Icon>
									</Button>
								</Fragment>
							)}
						</FlexBox>
					</FlexBox>
				</Hidden>
			</Grid>

			<Modal open={open} onClose={toggleDialog}>
				<Card p="1rem" position="relative">
					<ProductIntro
						imgUrl={item.image}
						title={item.name_uz}
						price={item.price}
					/>
					<Box
						position="absolute"
						top="0.75rem"
						right="0.75rem"
						cursor="pointer"
					>
						<Icon
							className="close"
							color="primary"
							variant="small"
							onClick={toggleDialog}
						>
							close
						</Icon>
					</Box>
				</Card>
			</Modal>
		</StyledProductCard9>
	)
}

// ProductCard9.defaultProps = {
// 	title: "Apple iPhone 5 Unlocked 16GB 8MP Used Cell-Phone-16gbIOS Used Refurbished 100%Factory Used",
// 	imgUrl: "/assets/images/products/macbook.png",
// 	off: 50,
// 	price: 450,
// 	rating: 0,
// 	subcategories: [
// 		{
// 			title: "Bike",
// 			url: "/#",
// 		},
// 		{
// 			title: "Ducati",
// 			url: "/#",
// 		},
// 		{
// 			title: "Motors",
// 			url: "/#",
// 		},
// 	],
// }

export default ProductCard9
