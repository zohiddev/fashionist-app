import React from "react"
import Card from "../Card"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Grid from "../grid/Grid"
import Icon from "../icon/Icon"
import { H4, SemiSpan } from "../Typography"
import { useSelector } from 'react-redux';

const Services = () => {
	const lang = useSelector(state => state.lang.lang)
	return (
		<Container mb="70px">
			<Grid container spacing={6}>
				{serviceList.map((item, ind) => (
					<Grid item lg={4} md={4} xs={12} key={ind}>
						<FlexBox
							as={Card}
							flexDirection="column"
							alignItems="center"
							p="3rem"
							height="100%"
							borderRadius={8}
							boxShadow="border"
							hoverEffect
						>
							<FlexBox
								justifyContent="center"
								alignItems="center"
								borderRadius="300px"
								bg="gray.200"
								size="64px"
							>
								<Icon color="secondary" size="1.75rem">
									{item.iconName}
								</Icon>
							</FlexBox>
							<H4 mt="20px" mb="10px" textAlign="center">
								{lang === 'uz' ? item.title_uz : item.title_ru}
							</H4>
							<SemiSpan textAlign="center">
								{lang === 'uz' ? item.desc_uz : item.desc_ru}
							</SemiSpan>
						</FlexBox>
					</Grid>
				))}
			</Grid>
			{/* </Card> */}
		</Container>
	)
}

const serviceList = [
	{
		iconName: "truck",
		title_uz: "Tez yetkazib berish",
		title_ru: 'Быстрая доставка',
		desc_uz:'Mahsulotingizni tez va sifatli yetkazib beramiz',
		desc_ru: 'Мы доставим Ваш товар быстро и качественно'
	},
	{
		iconName: "credit",
		title_uz: "Xavfsiz to'lov",
		title_ru: "Безопасная оплата",
		desc_uz: "Ortiqcha hujjatlarsiz, banklar aralashmagan holda. To'lovni kechiktirganlik uchun jarimasiz, muddatli bo'lib to'lashni tezda tashkil qilish uchun sizda faqat passport va bank kartasi bo'lishi kifoya",
		desc_ru: "Без лишних документов банки не вмешиваются. Все, что вам нужно, это паспорт и банковская карта, чтобы быстро оформить платеж без штрафа за просрочку платежа.",
	},
	{
		iconName: "shield",
		title_uz: "Ishonch bilan xarid qiling",
		title_ru: "Делайте покупки с уверенностью",
		desc_uz: "Televizorlar, smartfonlar, oshxona anjomlaridan tortib gamerlar uchun devays va jihozlarigacha. Bundan tashqari, biz faqat original brendli mahsulotlarni sotamiz va siz kafolat va servis xizmatlarini qo’lga kiritasiz",
		desc_ru: "От телевизоров, смартфонов, кухонной техники до автомобилей и игр, до устройств и техники для геймеров. Кроме того, мы продаем только оригинальные фирменные товары, а вы получаете гарантию и сервис.",
	},
	// {
	// 	iconName: "customer-service",
	// 	title: "24/7 qo'llab-quvvatlash",
	// },
]

export default Services
