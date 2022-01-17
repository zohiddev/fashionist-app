import ProductIntro from "components/products/ProductIntro"
import Image from "next/image"
import Link from "next/link"
import React, { Fragment, useCallback, useState } from "react"
import { CartItem, deleteToCart, removeToCart, addToCart } from "reducers/cartReducer"
import Box from "../Box"
import Button from "../buttons/Button"
import Card from "../Card"
import { Chip } from "../Chip"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import Modal from "../modal/Modal"
import Rating from "../rating/Rating"
import { H3, SemiSpan } from "../Typography"
import { StyledProductCard1 } from "./ProductCardStyle"
import { useDispatch, useSelector } from "react-redux"
import { setIsActive } from 'reducers/userReducer';

const ProductCard1 = ({ id, imgUrl, title, price, off,product , rating, ...props }) => {
	const [open, setOpen] = useState(false)
	const state = useSelector(state => state)
	const lang = state?.lang?.lang
	const cartItem = state.cart?.cartList?.find((item) => item.product_id === product?.id)
	const dispatch = useDispatch()
	const toggleDialog = useCallback(() => {
		setOpen((open) => !open)
	}, [])
	const src = `${product?.image}`

	const handleDeleteBtn = (id) => {
		deleteToCart(id)(dispatch)
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

	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	return (
		<StyledProductCard1 {...props}>
			<div className="image-holder">
				{!!off && (
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

				<FlexBox className="extra-icons">
					<Icon
						color="secondary"
						variant="small"
						mb="0.5rem"
						onClick={toggleDialog}
					>
						eye-alt
					</Icon>
{/*
					<Icon
						className="favorite-icon outlined-icon"
						variant="small"
					>
						heart
					</Icon> */}
					{/* <Icon className="favorite-icon" color="primary" variant="small">
              heart-filled
            </Icon> */}
				</FlexBox>

				<Link href={`/product/${product?.slug}`}>
					<a>
						{/* <img src={item.image} alt={item.name_uz} width={100} height={100}/> */}
						<Image
							loader={myLoader}
							src={product?.image}
							layout="responsive"
							alt={product?.name_uz}
							width={100}
							height={100}
						/>
					</a>
				</Link>
			</div>
			<div className="details">
				<FlexBox>
					<Box flex="1 1 0" minWidth="0px" mr="0.5rem">
						<Link href={`/product/${product?.slug}`}>
							<a>
								<H3
									className="title"
									fontSize="14px"
									textAlign="left"
									fontWeight="600"
									color="text.secondary"
									mb="10px"
									title={lang === 'uz' ? product?.name_uz : product?.name_ru}
								>
									{lang === 'uz' ? product?.name_uz : product?.name_ru}
								</H3>
							</a>
						</Link>

						{/* <Rating
							value={rating || 0}
							outof={5}
							color="warn"
							readonly
						/> */}

						<FlexBox alignItems="center" mt="10px">
							<SemiSpan
								pr="0.5rem"
								fontWeight="600"
								color="primary.main"
							>
								{Intl.NumberFormat().format(product?.price)} UZS
							</SemiSpan>
							{/* {!!off && (
								<SemiSpan color="text.muted" fontWeight="600">
									<del>{product?.price?.toFixed(2)}</del>
								</SemiSpan>
							)} */}
						</FlexBox>
					</Box>

					<FlexBox
						flexDirection="column-reverse"
						alignItems="center"
						justifyContent={
							!!cartItem?.qty ? "space-between" : "flex-start"
						}
						width="30px"
					>
						{/* <div className="add-cart"> */}
						<Button
							variant="outlined"
							color="primary"
							padding="3px"
							size="none"
							borderColor="primary.light"
							// onClick={handleCartAmountChange(
							// 	(cartItem?.qty || 0) + 1
							// )}
							onClick={() => handleAddBtn(product?.id)}
						>
							<Icon variant="small">plus</Icon>
						</Button>

						{!!cartItem?.qty && (
							<Fragment>
								<SemiSpan color="text.primary" fontWeight="600">
									{cartItem?.qty}
								</SemiSpan>
								<Button
									variant="outlined"
									color="primary"
									padding="3px"
									size="none"
									borderColor="primary.light"
									// onClick={handleCartAmountChange(
									// 	cartItem?.qty - 1
									// )}
									onClick={() => handleRemoveBtn(product?.id)}
								>
									<Icon variant="small">minus</Icon>
								</Button>
							</Fragment>
						)}
					</FlexBox>
				</FlexBox>
			</div>

			<Modal open={open} onClose={toggleDialog}>
				<Card p="1rem" position="relative">
					<ProductIntro
						imgUrl={product?.images}
						title={product?.name_uz}
						price={product?.price}
						id={product?.id}
						product={product}
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
		</StyledProductCard1>
	)
}

export default ProductCard1