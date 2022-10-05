import Link from 'next/link'
import React, { useEffect } from 'react'
import Button from 'components/buttons/Button'
import { Card1 } from 'components/Card1'
import Divider from 'components/Divider'
import FlexBox from 'components/FlexBox'
import Grid from 'components/grid/Grid'
import CheckoutNavLayout from 'components/layout/CheckoutNavLayout'
import ProductCard7 from 'components/product-cards/ProductCard7'
import Typography from 'components/Typography'
import { useSelector, useDispatch } from 'react-redux'
import Container from './../components/Container'
import { getCartItems } from './../reducers/cartReducer'

const Cart = (props) => {
	// const { state } = useAppContext()
	const state = useSelector((state) => state)
	const cartList = state?.cart?.cartList
	const dispatch = useDispatch()
	const lang = state?.lang?.lang

	useEffect(() => {
		getCartItems()(dispatch)
	}, [])

	const getTotalPrice = () => {
		return (
			cartList?.reduce(
				(accumulator, item) => accumulator + item.price * item.qty,
				0
			) || 0
		)
	}

	return (
		<Container mt='50px' mb='50px'>
			{cartList?.length > 0 ? (
				<Grid container spacing={6}>
					<Grid item lg={8} md={8} xs={12}>
						{cartList?.map((item) => (
							<ProductCard7
								key={item.id}
								mb='1.5rem'
								product={item}
								lang={lang}
							/>
						))}
					</Grid>
					<Grid item lg={4} md={4} xs={12}>
						<Card1>
							<FlexBox
								justifyContent='space-between'
								alignItems='center'
								mb='1rem'
							>
								<Typography color='gray.600'>
									{lang === 'uz'
										? 'Jami:'
										: 'Всего к оплате:'}
								</Typography>
								<FlexBox alignItems='flex-end'>
									<Typography
										fontSize='18px'
										fontWeight='600'
										lineHeight='1'
									>
										{getTotalPrice().toLocaleString()} UZS
									</Typography>
								</FlexBox>
							</FlexBox>

							<Divider mb='1rem' />

							<Link href='/checkout'>
								<Button
									variant='contained'
									color='primary'
									fullwidth
								>
									{lang === 'uz'
										? 'Buyurtma berish'
										: 'Оформить заказ'}
								</Button>
							</Link>
						</Card1>
					</Grid>
				</Grid>
			) : (
				<FlexBox flexDirection='column'>
					<Typography
						fontSize='24px'
						fontWeight='600'
						lineHeight='1'
						ml='auto'
						mr='auto'
						textAlign='center'
					>
						{lang === 'uz'
							? 'Hech nima topilmadi'
							: 'Ничего не найдено'}
					</Typography>

					<Link href='/'>
						<Button
							variant='outlined'
							color='primary'
							mt='1rem'
							mb='30px'
							ml='auto'
							mr='auto'
						>
							{lang === 'uz'
								? 'Bosh sahifaga qaytish'
								: 'Вернуться домой'}
						</Button>
					</Link>
				</FlexBox>
			)}
		</Container>
	)
}

Cart.layout = CheckoutNavLayout

export default Cart
