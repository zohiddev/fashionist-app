import Avatar from "components/avatar/Avatar"
import Card from "components/Card"
import FlexBox from "components/FlexBox"
import TextField from "components/text-field/TextField"
import { Formik } from "formik"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Button from "../buttons/Button"
import { Card1 } from "../Card1"
import Grid from "../grid/Grid"
import Select from "../Select"
import Typography, { H6, Paragraph } from "../Typography"
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'reducers/userReducer';
import PaymentForm from './../payment/PaymentForm';
import { addOrder } from './../../reducers/userReducer';
import Modal from './../modal/Modal';
import  Link  from 'next/link';
import { clearCart } from './../../reducers/cartReducer';
import regions from "utils/regionsData"
import Box from './../Box';

const CheckoutForm2 = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const state = useSelector(state => state)
	const user = state?.user?.user
	const lang = state?.lang?.lang
	const cartList = state?.cart?.cartList
	const initialOrderData = {
		orderItems: cartList,
		delivery_address: "",
		delivery_phone: "",
		order_note: "",
		payment_method: 0
	}
	const contactList = [
		{
			contactType: lang === 'uz' ? "Asosiy" : "Базовый",
			contact: user?.phone,
		}
	]
	const [orderData,setOrderData] = useState(initialOrderData)
	const [checkPhone, setCheckPhone] = useState(null)
	const [isValidate, setIsValidate] = useState({address: false, phone: false})
	const [isOk, setIsOk] = useState(false)
	const [regionId, setRegionId] = useState(1)

	const handleAdressChange = ({target}) => {
		setOrderData({...orderData, delivery_address: target.value})
	}

	const handlePhoneChange = ({target}) => {
		setOrderData({...orderData, delivery_phone: target.value})
	}

	const handleFieldValueChange = (value) => {
		setCheckPhone(value)
		setOrderData({...orderData, delivery_phone: value})
	}

	const handleSubmitBtn = (e) =>{
		e.preventDefault()
		if(orderData.delivery_address === ''){
			setIsValidate({ ...isValidate, address: true})
		} else if(orderData.delivery_phone === ''){
			setIsValidate({ ...isValidate, phone: true})
		} else{
			addOrder(orderData, (error) => {if(error !== null){alert(error)}else{setIsOk(true)}})(dispatch)
			clearCart()(dispatch)
		}
	}


	useEffect(() => {
		getUser()(dispatch)
	}, [])

	return (
		<Formik>
			{() => (
				<form>
					<Card1 mb="1.5rem">
						<FlexBox alignItems="center" mb="1.75rem">
							<Avatar
								bg="primary.main"
								size={32}
								color="primary.text"
								mr="0.875rem"
							>
								1
							</Avatar>
							<Typography fontSize="20px">
								{lang === 'uz' ? 'Yetkazib berish manzili' : 'Адрес доставки'}
							</Typography>
						</FlexBox>

						<FlexBox alignItems="center" justifyContent="space-between">
							<Box
								width='48%'
							>
								<Select
									mb="1rem"
									label={lang === 'uz' ? 'Viloyat' : 'Регион / Область'}
									options={regions.regions}
									// value={values.shipping_country || "US"}
									onChange={(country) => {
										setRegionId(country.value)
									}}
								/>
							</Box>

							<Box
								width='48%'
							>
								<Select
									mb="1rem"
									label={lang === 'uz' ? 'Shahar / tuman' : 'Город / Район '}
									options={regions?.districts?.filter(item => item.region_id == regionId)}
									// value={values.shipping_country || "US"}
									// onChange={(country) => {
									// 	setFieldValue(
									// 		"shipping_country",
									// 		country
									// 	)
									// }}
									// errorText={
									// 	touched.shipping_country &&
									// 	errors.shipping_country
									// }
								/>
							</Box>
						</FlexBox>

						<TextField
							name="shipping_address1"
							label={lang === 'uz' ? 'Manzil:' : 'Адрес:'}
							fullwidth
							value={orderData.delivery_address}
							onChange={handleAdressChange}
							style={{borderColor: isValidate.address ? 'red' : '#AEB4BE'}}
						/>


					</Card1>

					<Card1 mb="1.5rem">
						<FlexBox alignItems="center" mb="1.75rem">
							<Avatar
								bg="primary.main"
								size={32}
								color="primary.text"
								mr="0.875rem"
							>
								2
							</Avatar>
							<Typography fontSize="20px">
								{lang === 'uz' ? "Shaxsiy ma'lumotlar" : "Персональные данные"}
							</Typography>
 						</FlexBox>

						<TextField
							mb="15px"
							name="shipping_address1"
							label={lang === 'uz' ? "Telefon raqam:" : "Телефонный номер:"}
							fullwidth
							placeholder='+998 99 999 99 99'
							value={orderData.delivery_phone}
							style={{borderColor: isValidate.phone ? 'red' : '#AEB4BE'}}
							onChange={handlePhoneChange}
						/>

						<Grid container spacing={6}>
							{contactList.map((item) => (
								<Grid
									item
									md={4}
									sm={6}
									xs={12}
									key={item.contact}
								>
									<Card
										bg="gray.100"
										p="1rem"
										boxShadow="none"
										border="1px solid"
										cursor="pointer"
										borderColor={
											item.contact === checkPhone
												? "primary.main"
												: "transparent"
										}
										onClick={() => handleFieldValueChange(item.contact)}
									>
										<H6 mb="0.25rem">{item.contactType}</H6>
										<Paragraph color="gray.700">
											{item.contact}
										</Paragraph>
									</Card>
								</Grid>
							))}
						</Grid>
					</Card1>

					<Card1 mb="1.5rem">
						<FlexBox alignItems="center" mb="1.75rem">
							<Avatar
								bg="primary.main"
								size={32}
								color="primary.text"
								mr="0.875rem"
							>
								3
							</Avatar>
							<Typography fontSize="20px">
								{lang === 'uz' ? "To`lov turi" : "Тип платежа"}
							</Typography>
						</FlexBox>

						<PaymentForm />


						<Button
							variant="contained"
							color="primary"
							mt="1.5rem"
							type="submit"
							onClick={(e) => handleSubmitBtn(e)}
							fullwidth
						>
							{lang === 'uz' ? 'Rasmiylashtirish' : 'Оформить'}
						</Button>
					</Card1>
					<Modal open={isOk}>
						<Card1>
							<FlexBox alignItems='center' flexDirection="column">
								<Typography fontSize="20px" mb="20px">
									{
									lang === 'uz' ?
											'Buyurtmangiz rasmiylashtirildi operatorlarimiz tez orada siz bilan bog`lanishadi'
											:
											'Ваш заказ обработан, и наши операторы свяжутся с вами в ближайшее время'
									}
								</Typography>
								<Link href="/">
									<Button variant="contained" color="primary" m="0.5rem" onClick={() => setIsOk(false)}>
										{lang === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться домой'}
									</Button>
								</Link>
							</FlexBox>
						</Card1>
					</Modal>
				</form>
			)}
		</Formik>
	)
}

export default CheckoutForm2
