import Avatar from "components/avatar/Avatar"
import FlexBox from "components/FlexBox"
import NextImage from "next/image"
import Link from "next/link"
import React, { Fragment, useCallback } from "react"
import { CartItem } from "reducers/cartReducer"
import Button from "../buttons/Button"
import Divider from "../Divider"
import Icon from "../icon/Icon"
import Typography, { H5, Paragraph, Tiny } from "../Typography"
import { StyledMiniCart } from "./MiniCartStyle"
import { useDispatch, useSelector } from 'react-redux';
import {deleteToCart, removeToCart, addToCart } from './../../reducers/cartReducer';

const MiniCart = ({ toggleSidenav }) => {
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	const  cartList  = state?.cart?.cartList
	const lang = state?.lang?.lang

	// const handleCartAmountChange = useCallback(
	// 	(amount, product) => () => {
	// 		dispatch({
	// 			type: "CHANGE_CART_AMOUNT",
	// 			payload: {
	// 				...product,
	// 				qty: amount,
	// 			},
	// 		})
	// 	},
	// 	[]
	// )

	const handleDeleteBtn = (id) => {
		deleteToCart(id)(dispatch)
	}

	const handleRemoveBtn = (id) => {
		removeToCart(id)(dispatch)
	}

	const handleAddBtn = (id) => {
		let addedItem = {};
		addedItem.qty = 1;
		addedItem.product_id = Number(id);
		addToCart(addedItem)(dispatch)
	}

	const getTotalPrice = () => {
		return (
			cartList?.reduce(
				(accumulator, item) => accumulator + item.price * item.qty,
				0
			) || 0
		)
	}

	console.log(cartList)

	return (
		<StyledMiniCart>
			<div className="cart-list">
				<FlexBox alignItems="center" m="0px 20px" height="74px">
					<Icon size="1.75rem">bag</Icon>
					<Typography fontWeight={600} fontSize="16px" ml="0.5rem">
						{cartList?.length} {lang === 'uz' ? 'mahsulot' : 'продукт'}
					</Typography>
				</FlexBox>

				<Divider />

				{!!!cartList?.length && (
					<FlexBox
						flexDirection="column"
						alignItems="center"
						justifyContent="center"
						height="calc(100% - 80px)"
					>
						<NextImage
							src="/bag_blue.png"
							width="90px"
							height="100%"
						/>
						<Paragraph
							mt="1rem"
							color="text.muted"
							textAlign="center"
							maxWidth="200px"
						>
							{lang === 'uz' ? 'Hech narsa topilmadi.' : 'Ничего не найдено.'}
						</Paragraph>
					</FlexBox>
				)}
				{cartList?.map((item) => (
					<Fragment key={item.id}>
						<div className="cart-item">
							<FlexBox alignItems="center" flexDirection="column">
								<Button
									variant="outlined"
									color="primary"
									padding="5px"
									size="none"
									borderColor="primary.light"
									borderRadius="300px"
									onClick={() => {handleAddBtn(item?.product_id)}}
								>
									<Icon variant="small">plus</Icon>
								</Button>
								<Typography
									fontWeight={600}
									fontSize="15px"
									my="3px"
								>
									{item.qty}
								</Typography>
								<Button
									variant="outlined"
									color="primary"
									padding="5px"
									size="none"
									borderColor="primary.light"
									borderRadius="300px"
									disabled={item.qty === 1}
									onClick={() => {handleRemoveBtn(item?.product_id)}}
								>
									<Icon variant="small">minus</Icon>
								</Button>
							</FlexBox>

							<Link href={`/product/${item.slug}`}>
								<a>
									<Avatar
										src={
											item.image ||
											"/assets/images/products/iphone-x.png"
										}
										mx="1rem"
										alt={item.name_uz}
										size={76}
										borderRadius='0'
									/>
								</a>
							</Link>

							<div className="product-details">
								<Link href={`/product/${item.slug}`}>
									<a>
										<H5 className="title" fontSize="14px">
											{lang === 'uz' ? item.name_uz : item.name_ru}
										</H5>
									</a>
								</Link>
								<Tiny color="text.muted">
									{Math.ceil(item?.price).toLocaleString() } UZS x {item.qty}
								</Tiny>
								<Typography
									fontWeight={600}
									fontSize="14px"
									color="primary.main"
									mt="4px"
								>
									{Math.ceil(item?.qty * item?.price).toLocaleString()} UZS
								</Typography>
							</div>

							<Icon
								className="clear-icon"
								size="1rem"
								ml="1.25rem"
								onClick={() => handleDeleteBtn(item?.product_id)}
							>
								close
							</Icon>
						</div>
						<Divider />
					</Fragment>
				))}
			</div>

			{!!cartList?.length && (
				<Fragment>
					<Link href="/checkout">
						<Button
							variant="contained"
							color="primary"
							m="1rem 1rem 0.75rem"
							onClick={toggleSidenav}
						>
							<Typography fontWeight={600}>
								{lang === 'uz' ? 'Rasmiylashtirish' : 'Оформить'} ({getTotalPrice().toLocaleString()} UZS)
							</Typography>
						</Button>
					</Link>
					<Link href="/cart">
						<Button
							color="primary"
							variant="outlined"
							m="0px 1rem 0.75rem"
							onClick={toggleSidenav}
						>
							<Typography fontWeight={600}>{lang === 'uz' ? "Savatchani ko`rish" : 'Посмотреть корзину'}</Typography>
						</Button>
					</Link>
				</Fragment>
			)}
		</StyledMiniCart>
	)
}

MiniCart.defaultProps = {
	toggleSidenav: () => {},
}

export default MiniCart
