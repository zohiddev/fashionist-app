import { useFormik } from "formik"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useCallback, useState } from "react"
import { api } from "utils/http"
import * as yup from "yup"
import Box from "../Box"
import Button from "../buttons/Button"
import IconButton from "../buttons/IconButton"
import Divider from "../Divider"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import TextField from "../text-field/TextField"
import { H3, H5, H6, SemiSpan, Small, Span } from "../Typography"
import { StyledSessionCard } from "./SessionStyle"
import { IMaskInput } from 'react-imask';
import { getUser, setIsActive } from "reducers/userReducer"
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const [passwordVisibility, setPasswordVisibility] = useState(false)
	const router = useRouter()
	const [isVerify, setIsVerify] = useState(false)
	const [isValidate, setIsValidate] = useState({phone: false, code: false})
	const [phone, setPhone] = useState('')
	const [code, setPassword] = useState('')
	const state = useSelector(state => state)
	const lang = state?.lang?.lang
	const dispatch = useDispatch()

	const loginBtn = async (e) => {
		e.preventDefault()
		if(phone.length < 9){
			setIsValidate({...isValidate, phone: true})
		}else{
			try{
				let res
				res = await api.login({ phone })
				if (!res.data.error) {
					setIsVerify(true)
					setIsValidate({...isValidate, phone: false})
				} else {
					alert(res.data.error)
				}
			} catch (error) {
				console.error(error)
				alert(error.response?.data?.error || "Error")
			}
		}
	}

	const verifyBtn = async (e) =>{
		e.preventDefault()
		if(code === ''){
			setIsValidate({...isValidate, code: true})
		}else{
			try{
				let res
				res = await api.verify({ phone, code })
				if (!res.data.error) {
					setIsVerify(false)
					let { accessToken, refreshToken } = res.data
					localStorage.setItem("accessToken", accessToken)
					localStorage.setItem("refreshToken", refreshToken)
					dispatch(setIsActive(!state?.user?.isActive))
					getUser()(dispatch)
					setIsValidate({...isValidate, code: false})
					router.push('/profile')
				} else {
					alert(res.data.error)
					setPhone('')
					setPassword('')
					setIsVerify(false)
				}
			} catch (error) {
				console.error(error)
				alert(error.response?.data?.error || "Error")
			}
		}
	}

	// const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
	// 	useFormik({
	// 		// onSubmit: loginBtn,
	// 		initialValues,
	// 		validationSchema: formSchema,
	// 	})

	return (
		<StyledSessionCard mx="auto" my="2rem" boxShadow="large">
			{/* <form className="content">
				<H3 textAlign="center" mb="0.5rem">
					Kirish
				</H3>

				<TextField
					mb="0.75rem"
					name="number"
					placeholder="+998 99 999 99 99"
					label="Telefon raqamingizni kiriting"
					type="number"
					fullwidth
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.number || ""}
					errorText={touched.number && errors.number}
				/>

				<Button
					mb="1.65rem"
					variant="contained"
					color="primary"
					type="submit"
					fullwidth
					onClick={loginBtn}
				>
					Kirish
				</Button>
			</form> */}

			{
				isVerify ?
					<form className="content">
						<H3 textAlign="center" mb="0.5rem">
							{lang === 'uz' ? 'Kirish' : 'Вход'}
						</H3>

						<TextField
							mb="0.75rem"
							name="number"
							// placeholder="+998 99 999 99 99"
							label="Maxfiy kodni kiriting"
							type="number"
							fullwidth
							// onBlur={handleBlur}
							onChange={(e) => setPassword(e.target.value)}
							style={{borderColor: isValidate.code ? 'red' : '#AEB4BE'}}
							value={code}
							// errorText={touched.number && errors.number}
						/>

						<Button
							mb="1.65rem"
							variant="contained"
							color="primary"
							type="submit"
							fullwidth
							onClick={(e) => verifyBtn(e)}
						>
							{lang === 'uz' ? 'Kirish' : 'Вход'}
						</Button>
					</form>
				:
					<form className="content">
						<H3 textAlign="center" mb="0.5rem">
							{lang === 'uz' ? 'Kirish' : 'Вход'}
						</H3>
						{/* <label className="inputLabel">
								{lang === 'uz' ? 'Telefon raqamingizni kiriting' : 'Введите свой номер телефона'}
								<IMaskInput
									mask={`{+998} 00 000 00 00`}
									className="numberInput"
									// value="+998"
									onAccept={
										(value, mask) => setPhone(mask._unmaskedValue)
									}
									placeholder='+998 99 999 99 99'
								/>
						</label> */}

						<FlexBox>
							<TextField
								mb="0.75rem"
								name="number"
								placeholder="99 999 99 99"
								label={lang === 'uz' ? 'Telefon raqamingizni kiriting' : 'Введите свой номер телефона'}
								type="number"
								span={true}
								spanTitle='+998'
								onChange={(e) => setPhone('+998' + e.target.value)}
								style={{borderColor: isValidate.phone ? 'red' : '#AEB4BE'}}
								fullwidth
							/>
						</FlexBox>

						<Button
							mb="1.65rem"
							variant="contained"
							color="primary"
							type="submit"
							fullwidth
							onClick={(e) => loginBtn(e)}
						>
							{lang === 'uz' ? 'Kirish' : 'Вход'}
						</Button>
					</form>
			}

		</StyledSessionCard>
	)
}

// const initialValues = {
// 	phone: "",
// 	code: "",
// }

// const formSchema = yup.object().shape({
// 	email: yup.string().email("invalid email").required("${path} is required"),
// 	password: yup.string().required("${path} is required"),
// })

export default Login
