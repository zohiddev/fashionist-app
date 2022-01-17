import Avatar from "components/avatar/Avatar"
import Box from "components/Box"
import Button from "components/buttons/Button"
import { Card1 } from "components/Card1"
import FlexBox from "components/FlexBox"
import Grid from "components/grid/Grid"
import Hidden from "components/hidden/Hidden"
import Icon from "components/icon/Icon"
import DashboardLayout from "components/layout/CustomerDashboardLayout"
import DashboardPageHeader from "components/layout/DashboardPageHeader"
import TextField from "components/text-field/TextField"
import { Formik } from "formik"
import Link from "next/link"
import React, {useEffect, useState} from "react"
import * as yup from "yup"
import Container from './../../components/Container';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser, getUser } from "reducers/userReducer"
import { useRouter } from 'next/router';

const ProfileEditor = () => {

	const dispatch = useDispatch()
	const router = useRouter()
	const state = useSelector(state => state)
	const lang = state?.lang?.lang
	const [user, setUser] = useState({})

	const handleFullNameChange = ({target}) => {
		setUser({...user, full_name: target.value})
	}

	const handlePhoneChange = ({target}) => {
		setUser({...user, phone: target.value})
	}

	const handleSubmitBtn = (e) =>{
		e.preventDefault()
		updateUser(user,(error) => {
			if(error !== null){
				alert(error)
			}else{
				getUser()(dispatch);
				router.push('/profile')
			}})(dispatch)

	}

	useEffect(() => {
		if(!localStorage.getItem('user')){
			getUser()(dispatch)
		}else{
			setUser({full_name: JSON.parse(localStorage.getItem('user'))?.full_name === null ? '' : JSON.parse(localStorage.getItem('user'))?.full_name, phone: JSON.parse(localStorage.getItem('user'))?.phone})
		}
	}, [])

	return (
		<Container mt='50px' mb='50px'>
			<DashboardPageHeader
				iconName="user_filled"
				title={lang === 'uz' ? 'Profilni o`zgartirish' : 'Изменить профиль'}
				button={
					<Link href="/profile">
						<Button color="primary" bg="primary.light" px="2rem">
							{lang === 'uz' ? 'Ortga' : 'Назад'}
						</Button>
					</Link>
				}
			/>

			<Card1>
				{/* <FlexBox alignItems="flex-end" mb="22px">
					<Avatar src="/assets/images/faces/ralph.png" size={64} />

					<Box ml="-20px" zIndex={1}>
						<label htmlFor="profile-image">
							<Button
								as="span"
								size="small"
								bg="gray.300"
								color="secondary"
								height="auto"
								p="6px"
								borderRadius="50%"
							>
								<Icon>camera</Icon>
							</Button>
						</label>
					</Box>
					<Hidden>
						<input
							className="hidden"
							onChange={(e) => console.log(e.target.files)}
							id="profile-image"
							accept="image/*"
							type="file"
						/>
					</Hidden>
				</FlexBox> */}

				<Formik>
					{() => (
						<form>
							<Box mb="30px">
								<Grid
									container
									horizontal_spacing={6}
									vertical_spacing={4}
								>
									<Grid item md={6} xs={12}>
										<TextField
											name="first_name"
											label={lang === 'uz' ? 'Ism' : 'Имя'}
											fullwidth
											value={user?.full_name}
											onChange={handleFullNameChange}
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											name="contact"
											label={lang === 'uz' ? 'Telefon raqam' : 'Телефонный номер'}
											fullwidth
											value={user?.phone}
											onChange={handlePhoneChange}
										/>
									</Grid>
								</Grid>
							</Box>

							<Button
								variant="contained"
								color="primary"
								onClick={(e) => handleSubmitBtn(e)}
							>
								{lang === 'uz' ? 'Saqlash' : 'Сохранять'}
							</Button>
						</form>
					)}
				</Formik>
			</Card1>
		</Container>
	)
}


ProfileEditor.layout = DashboardLayout

export default ProfileEditor
