import Image from "components/Image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import { removeToCart, addToCart, getCartItems } from "reducers/cartReducer"
import Avatar from "../avatar/Avatar"
import Box from "../Box"
import Button from "../buttons/Button"
import FlexBox from "../FlexBox"
import Grid from "../grid/Grid"
import Icon from "../icon/Icon"
import { H1, H2, H3, H6, SemiSpan } from "../Typography"
import { useDispatch, useSelector } from 'react-redux'
import { setIsActive } from 'reducers/userReducer';

const ProductIntro = ({ imgUrl, title, price = 200, id, product }) => {
	const [selectedImage, setSelectedImage] = useState(0)
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	const cartList = state?.cart?.cartList
	const lang = state?.lang?.lang
	const router = useRouter()
	const routerId = router.query.id
	const cartItem = cartList.find(
		(item) => item.product_id === product?.id
	)

	const handleImageClick = (ind) => () => {
		setSelectedImage(ind)
	}

	const handleRemoveBtn = (id) => {
		removeToCart(id)(dispatch)
	}

	const handleAddBtn = (id) => {
		if(localStorage.getItem('user')){
			let addedItem = {};
			addedItem.qty = 1;
			addedItem.product_id = Number(id);
			addToCart(addedItem)(dispatch)
		}else{
			dispatch(setIsActive(true))
		}
	}

	useEffect(() => {
		getCartItems()(dispatch)
	}, [])

	return (
		<Box overflow="hidden">
			<Grid container justifyContent="center" spacing={16}>
					<Grid item md={6} xs={12} alignItems="center">
						<Box>
							<FlexBox justifyContent="center" mb="50px">
								<Image
									width={300}
									height={300}
									src={product?.images[selectedImage]}
									style={{ objectFit: "contain" }}
								/>
							</FlexBox>
							<FlexBox overflow="auto">
								{product?.images.map((url, ind) => (
									<Box
										size={70}
										minWidth={70}
										bg="white"
										borderRadius="10px"
										display="flex"
										justifyContent="center"
										alignItems="center"
										cursor="pointer"
										border="1px solid"
										key={ind}
										ml={ind === 0 && "auto"}
										mr={
											ind === product?.images?.length - 1
												? "auto"
												: "10px"
										}
										borderColor={
											selectedImage === ind
												? "primary.main"
												: "gray.400"
										}
										onClick={handleImageClick(ind)}
									>
										<Avatar
											src={url}
											borderRadius="10px"
											size={40}
										/>
									</Box>
								))}
							</FlexBox>
						</Box>
					</Grid>

					<Grid item md={6} xs={12} alignItems="center">
						<H1 mb="1rem">{lang === 'uz' ? product?.name_uz : product?.name_ru}</H1>

						<FlexBox alignItems="center" mb="1rem">
							<SemiSpan>Brand:</SemiSpan>
							<H6 ml="8px">{lang === 'uz' ? product?.brand?.name_uz : product?.brand?.name_ru}</H6>
						</FlexBox>

						<Box mb="24px">
							<H2 color="primary.main" mb="4px" lineHeight="1">
								{product?.price?.toLocaleString()} UZS
							</H2>
							{/* <SemiSpan color="inherit">Stock Available</SemiSpan> */}
						</Box>

						{!cartItem?.qty ? (
							<Button
								variant="contained"
								size="small"
								color="primary"
								mb="36px"
								onClick={() => handleAddBtn(product?.id)}
							>
								{lang === 'uz' ? 'Savatga qo’shish' : 'Добавить в корзину'}
							</Button>
						) : (
							<FlexBox alignItems="center" mb="36px">
								<Button
									p="9px"
									variant="outlined"
									size="small"
									color="primary"
									onClick={() => handleRemoveBtn(product?.id)}

								>
									<Icon variant="small">minus</Icon>
								</Button>
								<H3 fontWeight="600" mx="20px">
									{cartItem?.qty?.toString().padStart(2, "0")}
								</H3>
								<Button
									p="9px"
									variant="outlined"
									size="small"
									color="primary"
									onClick={() => handleAddBtn(product?.id)}

								>
									<Icon variant="small">plus</Icon>
								</Button>
							</FlexBox>
						)}

						{/* <FlexBox alignItems="center" mb="1rem">
							<SemiSpan>Sold By:</SemiSpan>
							<Link href="/shop/fdfdsa">
								<a>
									<H6 lineHeight="1" ml="8px">
										Mobile Store
									</H6>
								</a>
							</Link>
						</FlexBox> */}
					</Grid>
			</Grid>
		</Box>
	)
}

export default ProductIntro
