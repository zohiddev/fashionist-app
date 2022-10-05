import Avatar from 'components/avatar/Avatar'
import Box from 'components/Box'
import Button from 'components/buttons/Button'
import Card from 'components/Card'
import FlexBox from 'components/FlexBox'
import Grid from 'components/grid/Grid'
import DashboardLayout from 'components/layout/CustomerDashboardLayout'
import DashboardPageHeader from 'components/layout/DashboardPageHeader'
import TableRow from 'components/TableRow'
import Typography, { H3, H5, Small } from 'components/Typography'
import { format } from 'date-fns'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Container from './../../components/Container'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUser } from 'reducers/userReducer'
import OrderRow from './../../components/orders/OrderRow'
import Hidden from 'components/hidden/Hidden'
import useWindowSize from 'hooks/useWindowSize'
import { useRouter } from 'next/router'
import { setIsActive } from 'reducers/userReducer'
import Spinner from 'components/Spinner'

const Profile = () => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
	const lang = useSelector((state) => state.lang.lang)
	const isActive = useSelector((state) => state.user.isActive)
	const router = useRouter()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			getUser()(dispatch)
			setLoading(false)
		} else {
			router.push('/')
			dispatch(setIsActive(!isActive))
		}
	}, [router])

	const infoList = [
		{
			title: state?.user?.orders?.length,
			subtitle: lang === 'uz' ? 'Barcha buyurtmalar' : 'Все заказы',
		},
		{
			title: state?.user?.orders?.filter((item) => item?.status === 1)
				.length,
			subtitle: lang === 'uz' ? 'Jarayonda' : 'В Процессе',
		},
		{
			title: state?.user?.orders?.filter((item) => item?.status === 2)
				.length,
			subtitle: lang === 'uz' ? 'Yo`lda' : 'В дороге',
		},
		{
			title: state?.user?.orders?.filter((item) => item?.status === 3)
				.length,
			subtitle: lang === 'uz' ? 'Yetkazib berildi' : 'Доставлено',
		},
	]

	return (
		<>
			{loading ? (
				<Container mt='50px' mb='50px'>
					<FlexBox alignItems='center' justifyContent='center'>
						<Spinner />
					</FlexBox>
				</Container>
			) : (
				<Container mt='50px' mb='50px'>
					<DashboardPageHeader
						iconName='user_filled'
						title={
							lang === 'uz' ? 'Mening profilim' : 'Мой профиль'
						}
						button={
							<Link href='/profile/edit'>
								<Button
									color='primary'
									bg='primary.light'
									px='2rem'
								>
									{lang === 'uz'
										? 'Profilni o`zgartirish'
										: 'Изменить профиль'}
								</Button>
							</Link>
						}
						exitBtn={true}
					/>

					<Box mb='30px'>
						<Grid container spacing={6}>
							<Grid item lg={6} md={6} sm={12} xs={12}>
								<FlexBox
									as={Card}
									p='14px 32px'
									height='100%'
									alignItems='center'
								>
									<Box ml='12px' flex='1 1 0'>
										<FlexBox
											flexWrap='wrap'
											justifyContent='space-between'
											alignItems='center'
										>
											<div>
												<H5 my='0px'>
													{state?.user?.user
														?.full_name
														? state?.user?.user
																?.full_name
														: lang === 'uz'
														? 'Ism kiritilmagan'
														: 'Имя не введено'}
												</H5>
												<H5 my='0px'>
													{state?.user?.user?.phone}
												</H5>
											</div>
										</FlexBox>
									</Box>
								</FlexBox>
							</Grid>

							<Grid item lg={6} md={6} sm={12} xs={12}>
								<Grid container spacing={4}>
									{infoList.map((item) => (
										<Grid
											item
											lg={3}
											sm={6}
											xs={6}
											key={item.subtitle}
										>
											<FlexBox
												as={Card}
												flexDirection='column'
												alignItems='center'
												height='100%'
												p='1rem 1.25rem'
											>
												<H3
													color='primary.main'
													my='0px'
													fontWeight='600'
												>
													{item.title}
												</H3>
												<Small
													color='text.muted'
													textAlign='center'
												>
													{item.subtitle}
												</Small>
											</FlexBox>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Box>

					{/* {
				window < 768 ? null :
				<TableRow p="0.75rem 1.5rem">
					<FlexBox flexDirection="column" p="0.5rem">
						<Small color="text.muted" mb="4px" textAlign="left">
							{lang === 'uz' ? 'Ism, familiya' : 'Имя Фамилия'}
						</Small>
						<span>{state?.user?.full_name ? state?.user?.full_name : lang === 'uz' ? 'Ism, familya kiritilmagan' : 'Имя, фамилия не указаны'}</span>
					</FlexBox>
					<FlexBox flexDirection="column" p="0.5rem">
						<Small color="text.muted" mb="4px" textAlign="left">
							{lang === 'uz' ? 'Manzil' : 'Адрес'}
						</Small>
						<span>{state?.user?.email ? state?.user?.email : lang === 'uz' ? 'Manzil kiritilmagan' : 'Адрес не введен'}</span>
					</FlexBox>
					<FlexBox flexDirection="column" p="0.5rem">
						<Small color="text.muted" mb="4px" textAlign="left">
							Telefon raqam
						</Small>
						<span>{state?.user?.phone}</span>
					</FlexBox>
				</TableRow>
			} */}

					{state?.user?.orders.length === 0 ? null : (
						<>
							<DashboardPageHeader
								title={
									lang === 'uz'
										? 'Mening buyurtmalarim'
										: 'Мои заказы'
								}
								iconName='bag_filled'
								mt='50px'
							/>

							<Hidden down={769}>
								<TableRow
									padding='0px 18px'
									boxShadow='none'
									bg='none'
								>
									<H5
										color='text.muted'
										my='0px'
										mx='6px'
										textAlign='left'
									>
										{lang === 'uz' ? 'Buyurtma' : 'Заказ'} #
									</H5>
									<H5
										color='text.muted'
										my='0px'
										mx='6px'
										textAlign='left'
									>
										{lang === 'uz' ? 'Holati' : 'Состояние'}
									</H5>
									<H5
										color='text.muted'
										my='0px'
										mx='6px'
										textAlign='left'
									>
										{lang === 'uz'
											? 'Sotib olingan sana'
											: 'Дата покупки'}
									</H5>
									<H5
										color='text.muted'
										my='0px'
										mx='6px'
										textAlign='left'
									>
										{lang === 'uz' ? 'Jami' : 'Всего'}
									</H5>
									<H5
										flex='0 0 0 !important'
										color='text.muted'
										px='22px'
										my='0px'
									></H5>
								</TableRow>
							</Hidden>

							{state?.user?.orders?.map((item, ind) => (
								<OrderRow item={item} key={ind} lang={lang} />
							))}
						</>
					)}
				</Container>
			)}
		</>
	)
}

Profile.layout = DashboardLayout

export default Profile
