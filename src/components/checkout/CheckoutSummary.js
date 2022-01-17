import React, {useEffect} from "react"
import Button from "../buttons/Button"
import { Card1 } from "../Card1"
import Divider from "../Divider"
import FlexBox from "../FlexBox"
import TextField from "../text-field/TextField"
import Typography from "../Typography"
import { Span } from 'components/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from 'reducers/cartReducer';

const CheckoutSummary = () => {
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	const cartList = state?.cart?.cartList
	const lang = state?.lang?.lang

	const getTotalPrice = () => {
		return (
			cartList?.reduce(
				(accumulator, item) => accumulator + item?.price * item?.qty,
				0
			) || 0
		)
	}

	useEffect(() => {
		getCartItems()(dispatch)
	}, [])

	return (
		<Card1>
			<Typography color="secondary.900" fontWeight="700" mb="1.5rem">
				{lang === 'uz' ? 'Sizning buyurtmangiz' : 'Ваш заказ'}
			</Typography>

			{cartList.map((item) => (
				<FlexBox
					justifyContent="space-between"
					alignItems="center"
					mb="1.5rem"
					key={item?.id}
				>
					<Typography>
						<Span fontWeight="700" fontSize="14px">
							{item?.qty}
						</Span>{" "}
						x {lang === 'uz' ? item?.name_uz.length > 20 ? item?.name_uz.slice(0, 20) + "..." : item?.name_ru : item?.name_ru.length > 20 ? item?.name_ru.slice(0, 20) + "..." : item?.name_ru}
					</Typography>
					<Typography>{Intl.NumberFormat().format(item?.price)} UZS</Typography>
				</FlexBox>
			))}
			<FlexBox
				justifyContent="space-between"
				alignItems="center"
				mb="0.5rem"
			>
				<Typography color="text.hint">{lang === 'uz' ? 'Jami' : 'Итого'}:</Typography>
				<FlexBox alignItems="flex-end">
					<Typography fontSize="18px" fontWeight="600" lineHeight="1">
						{getTotalPrice().toLocaleString()}
					</Typography>
				</FlexBox>
			</FlexBox>
			<FlexBox
				justifyContent="space-between"
				alignItems="center"
				mb="0.5rem"
			>
				<Typography color="text.hint">{lang === 'uz' ? 'Yetkazib berish narxi' : 'Стоимость доставки'}:</Typography>
				<FlexBox alignItems="flex-end">
					<Typography fontSize="18px" fontWeight="600" lineHeight="1">
						{lang === 'uz' ? 'Bepul' : 'Бесплатно'}
					</Typography>
				</FlexBox>
			</FlexBox>
			<FlexBox
				justifyContent="space-between"
				alignItems="center"
				mb="1rem"
			>
				<Typography color="text.hint">{lang === 'uz' ? 'Chegirma' : 'Скидка'}:</Typography>
				<FlexBox alignItems="flex-end">
					<Typography fontSize="18px" fontWeight="600" lineHeight="1">
						-
					</Typography>
				</FlexBox>
			</FlexBox>
		</Card1>
	)
}

export default CheckoutSummary
