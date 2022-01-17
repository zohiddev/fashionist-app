import Avatar from "components/avatar/Avatar"
import Box from "components/Box"
import Card from "components/Card"
import FlexBox from "components/FlexBox"
import TextField from "components/text-field/TextField"
import { format } from "date-fns"
import { Formik } from "formik"
import NextImage from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import * as yup from "yup"
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

	console.log(orderData)

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

						<TextField
							name="shipping_address1"
							label={lang === 'uz' ? 'Manzil:' : 'Адрес:'}
							fullwidth
							value={orderData.delivery_address}
							onChange={handleAdressChange}
							style={{borderColor: isValidate.address ? 'red' : '#AEB4BE'}}
						/>

						{/* <Box mb="1.75rem">
							<Grid container spacing={6}>
								<Grid item sm={6} xs={12}>
									<Select
										label="Delivery Date"
										options={dateList}
										value={values.date || ""}
										onChange={(date) => {
											setFieldValue("date", date)
										}}
										errorText={touched.date && errors.date}
									/>
								</Grid>
								<Grid item sm={6} xs={12}>
									<Select
										label="Delivery Time"
										options={timeList}
										value={values.time || ""}
										onChange={(time) => {
											setFieldValue("time", time)
										}}
										errorText={touched.time && errors.time}
									/>
								</Grid>
							</Grid>
						</Box> */}

						{/* <Typography mb="0.75rem">Delivery Address</Typography>
						<Grid container spacing={6}>
							{addressList.map((item, ind) => (
								<Grid item md={4} sm={6} xs={12} key={ind}>
									<Card
										bg="gray.100"
										p="1rem"
										boxShadow="none"
										border="1px solid"
										cursor="pointer"
										borderColor={
											item.address === values.address
												? "primary.main"
												: "transparent"
										}
										onClick={handleFieldValueChange(
											item.address,
											"address",
											setFieldValue
										)}
									>
										<H6 mb="0.25rem">{item.addressType}</H6>
										<Paragraph color="gray.700">
											{item.address}
										</Paragraph>
									</Card>
								</Grid>
							))}
						</Grid> */}
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
							// onBlur={handleBlur}
							// onChange={handleChange}
							// value={values.shipping_address1 || ""}
							// errorText={
							// 	touched.shipping_address1 &&
							// 	errors.shipping_address1
							// }
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
