import Avatar from "components/avatar/Avatar"
import Box from "components/Box"
import Button from "components/buttons/Button"
import Card from "components/Card"
import Divider from "components/Divider"
import FlexBox from "components/FlexBox"
import Grid from "components/grid/Grid"
import Icon from "components/icon/Icon"
import DashboardLayout from "components/layout/CustomerDashboardLayout"
import DashboardPageHeader from "components/layout/DashboardPageHeader"
import TableRow from "components/TableRow"
import Typography, { H5, H6, Paragraph } from "components/Typography"
import useWindowSize from "hooks/useWindowSize"
import React, { Fragment, useEffect } from "react"
import Container from "components/Container"
import { getOrder } from "./../../reducers/userReducer"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"

const OrderDetails = () => {
	const orderStatus = "shipping"
	const orderStatusList = ["packaging", "shipping", "delivering", "complete"]
	const stepIconList = ["package-box", "truck-1", "delivery"]
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
	const lang = state?.lang?.lang
	const order = state?.user?.order
	const statusIndex = orderStatusList.indexOf(orderStatus)
	const width = useWindowSize()
	const breakpoint = 350
	const router = useRouter()

	useEffect(() => {
		getOrder(router?.query?.slug)(dispatch)
	}, [router])

	const createdDate = (date = new Date(), increase = 0) => {
		const ndate = new Date(date)
		let day = ndate.getDate() + increase
		let month = ndate.getMonth() + 1
		let year = ndate.getFullYear()
		const dateText = `${day}.${month}.${year}`

		return {
			dateText,
		}
	}

	const status = {
		0: lang === "uz" ? "Naqd" : "Наличные",
		1: "Payme",
		2: "Click",
		3: "Apelsin",
	}

	return (
		<Container mt="50px" mb="50px">
			<DashboardPageHeader
				title={
					lang === "uz"
						? "Buyurtma tafsilotlari"
						: "Информация для заказа"
				}
				iconName="bag_filled"
				// button={
				// 	<Button color="primary" bg="primary.light" px="2rem">
				// 		{lang === 'uz' ? 'Qaytadan buyurtma bering' : 'Заказать снова'}
				// 	</Button>
				// }
			/>

			<Card p="2rem 1.5rem" mb="30px">
				<FlexBox
					flexDirection={width < breakpoint ? "column" : "row"}
					justifyContent="space-between"
					alignItems="center"
					flexWrap="wrap"
					my="2rem"
				>
					{stepIconList.map((item, ind) => (
						<Fragment key={item}>
							<Box position="relative">
								<Avatar
									size={64}
									bg={
										ind <= statusIndex
											? "primary.main"
											: "gray.300"
									}
									color={
										ind <= statusIndex
											? "gray.white"
											: "primary.main"
									}
								>
									<Icon
										size="32px"
										defaultcolor="currentColor"
									>
										{item}
									</Icon>
								</Avatar>
								{ind < statusIndex && (
									<Box position="absolute" right="0" top="0">
										<Avatar
											size={22}
											bg="gray.200"
											color="success.main"
										>
											<Icon
												size="12px"
												defaultcolor="currentColor"
											>
												done
											</Icon>
										</Avatar>
									</Box>
								)}
							</Box>
							{ind < stepIconList.length - 1 && (
								<Box
									flex={
										width < breakpoint ? "unset" : "1 1 0"
									}
									height={width < breakpoint ? 50 : 4}
									minWidth={width < breakpoint ? 4 : 50}
									bg={
										ind < statusIndex
											? "primary.main"
											: "gray.300"
									}
								/>
							)}
						</Fragment>
					))}
				</FlexBox>

				<FlexBox
					justifyContent={width < breakpoint ? "center" : "flex-end"}
				>
					<Typography
						p="0.5rem 1rem"
						borderRadius="300px"
						bg="primary.light"
						color="primary.main"
						textAlign="center"
					>
						{lang === 'uz' ? "Taxminiy yetkazib berish sanasi" : 'Предполагаемая дата поставки'}
						{/* <b>{createdDate(order?.created_at, 3)?.dateText}</b> */}
					</Typography>
				</FlexBox>
			</Card>

			<Card p="0px" mb="30px" overflow="hidden">
				<TableRow
					bg="gray.200"
					p="12px"
					boxShadow="none"
					borderRadius={0}
				>
					<FlexBox className="pre" m="6px" alignItems="center">
						<Typography fontSize="14px" color="text.muted" mr="4px">
							{lang === "uz"
								? "Buyurtma identifikatori(ID)"
								: "Hомер заказа"}
							:
						</Typography>
						<Typography fontSize="14px">
							{order?.order_id}
						</Typography>
					</FlexBox>
				</TableRow>

				<Box py="0.5rem">
					{order?.order_items?.map((item) => (
						<FlexBox
							px="1rem"
							py="0.5rem"
							flexWrap="wrap"
							alignItems="center"
							key={item?.id}
						>
							<FlexBox
								flex="2 2 260px"
								m="6px"
								alignItems="center"
							>
								<Avatar src={item?.images[0]} size={64} />
								<Box ml="20px">
									<H6 my="0px">
										{lang === "uz"
											? item?.name_uz
											: item?.name_ru}
									</H6>
									<Typography
										fontSize="14px"
										color="text.muted"
									>
										{item?.price?.toLocaleString()} x{" "}
										{item?.qty}
									</Typography>
								</Box>
							</FlexBox>
							<FlexBox
								flex="1 1 260px"
								m="6px"
								alignItems="center"
							>
								<Typography fontSize="14px" color="text.muted">
									Product properties: Black, L
								</Typography>
							</FlexBox>
							{/* <FlexBox flex="160px" m="6px" alignItems="center">
								<Button variant="text" color="primary">
									<Typography fontSize="14px">
										Write a Review
									</Typography>
								</Button>
							</FlexBox> */}
						</FlexBox>
					))}
				</Box>
			</Card>

			<Grid container spacing={6}>
				<Grid item lg={6} md={6} xs={12}>
					<Card p="20px 30px">
						<H5 mt="0px" mb="14px">
							{lang === "uz"
								? "Yetkazish manzili"
								: "Адрес доставки"}
						</H5>
						<Paragraph fontSize="14px" my="0px">
							{order?.delivery_address}
						</Paragraph>
					</Card>
				</Grid>
				<Grid item lg={6} md={6} xs={12}>
					<Card p="20px 30px">
						<H5 mt="0px" mb="14px">
							{lang === "uz"
								? "Umumiy ma`lumotlar"
								: "Информация"}
						</H5>
						<FlexBox
							justifyContent="space-between"
							alignItems="center"
							mb="0.5rem"
						>
							<Typography fontSize="14px" color="text.hint">
								{lang === "uz" ? "Narxi" : "Цена"}:
							</Typography>
							<H6 my="0px">
								{order?.total_price?.toLocaleString() } UZS
							</H6>
						</FlexBox>
						<FlexBox
							justifyContent="space-between"
							alignItems="center"
							mb="0.5rem"
						>
							<Typography fontSize="14px" color="text.hint">
								{lang === "uz"
									? "Yetkazib berish narxi"
									: "Стоимость доставки"}
								:
							</Typography>
							<H6 my="0px">
								{order?.delivery_price?.toLocaleString()} UZS
							</H6>
						</FlexBox>
						<FlexBox
							justifyContent="space-between"
							alignItems="center"
							mb="0.5rem"
						>
							<Typography fontSize="14px" color="text.hint">
								{lang === "uz" ? "Chegirma" : "Скидка"}:
							</Typography>
							<H6 my="0px">
								{order?.discount?.toLocaleString()} UZS
							</H6>
						</FlexBox>

						<Divider mb="0.5rem" />

						<FlexBox
							justifyContent="space-between"
							alignItems="center"
							mb="1rem"
						>
							<H6 my="0px">{lang === "uz" ? "Jami" : "Итого"}</H6>
							<H6 my="0px">
								{order?.total_price?.toLocaleString()} UZS
							</H6>
						</FlexBox>
						<Typography fontSize="14px">
							{/* Paid by Credit/Debit Card */}
							{status[order?.payment_method] }
						</Typography>
					</Card>
				</Grid>
			</Grid>
		</Container>


	)
}

OrderDetails.layout = DashboardLayout

export default OrderDetails
