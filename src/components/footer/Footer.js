import AppStore from "components/AppStore"
import LogoSVGWhite from "components/header/LogoSVGWhite"
import Image from "components/Image"
import Link from "next/link"
import React from "react"
import styled from "styled-components"
import { getTheme } from "../../utils/utils"
import Box from "../Box"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Grid from "../grid/Grid"
import Icon from "../icon/Icon"
import Typography, { Paragraph } from "../Typography"
import { useSelector } from 'react-redux';
import Divider from './../Divider';

const StyledLink = styled.a`
	position: relative;
	display: block;
	padding: 0.3rem 0rem;
	color: ${getTheme("colors.gray.500")};
	cursor: pointer;
	border-radius: 4px;
	:hover {
		color: ${getTheme("colors.gray.100")};
	}
`

const Footer = () => {

	const lang = useSelector(state => state.lang.lang)

	const aboutLinks = [
		{
			id: 1,
			name_uz: "To’lov turlari",
			name_ru: "Виды оплаты",
			slug: '/page/tolov-turlari'
		},
		{
			id: 2,
			name_uz: "Yetkazib berish xizmati haqida",
			name_ru: "О службе доставки",
			slug: '/page/yetkazib-berish'
		},
		{
			id: 3,
			name_uz: "Biz haqimizda",
			name_ru: "О нас",
			slug: '/page/biz-haqimizda'
		},
		{
			id: 4,
			name_uz: "Aksiyalar va qaynoq chegirmalar",
			name_ru: "Акции и горячие скидки",
			slug: '/page/aksiyalar'
		}
	]


	return (
		<footer>
			<Box bg="#0F3460">
				<Container p="1rem" color="white">
					<Box overflow="hidden">
						<Grid container spacing={6}>
							<Grid item lg={4} md={6} sm={6} xs={12} alignSelf="center">
								<FlexBox justifyContent="space-around" alignItems="center">
									<Link href="/">
										<a>
											<Image
												mb="1.25rem"
												src="/sdb_svg_logo.svg"
												width="100px"
												height="100px"
												layout="responsive"
												objectFit="contain"
												alt="logo"
											/>
											{/* <LogoSVGWhite/> */}
										</a>
									</Link>
									<AppStore />
								</FlexBox>
							</Grid>

							<Grid item lg={4} md={6} sm={6} xs={12}>
								<Typography
									fontSize="25px"
									fontWeight="600"
									mb="1.25rem"
									lineHeight="1"
								>
									{lang === 'uz' ? 'Ma’lumotlar' : 'Информация'}
								</Typography>

								<div>
									{aboutLinks.map((item, ind) => (
										<Link href={item?.slug} key={ind}>
											<StyledLink>{lang === 'uz' ? item?.name_uz : item?.name_ru}</StyledLink>
										</Link>
									))}
								</div>
							</Grid>

							{/* <Grid item lg={3} md={6} sm={6} xs={12}>
								<Typography
									fontSize="25px"
									fontWeight="600"
									mb="1.25rem"
									lineHeight="1"
								>

								</Typography>

								<div>
									{customerCareLinks.map((item, ind) => (
										<Link href="/" key={ind}>
											<StyledLink>{item}</StyledLink>
										</Link>
									))}
								</div>
							</Grid> */}

							<Grid item lg={4} md={6} sm={6} xs={12}>
								<Typography
									fontSize="25px"
									fontWeight="600"
									mb="1.25rem"
									lineHeight="1"
								>
									{lang === 'uz' ? 'Aloqa' : 'Коммуникация'}
								</Typography>
								<Typography py="0.3rem" color="gray.500">
								{lang === 'uz' ? 'Xorazm, Urganch Shahar, Buyum Bozori. Raysentr' : 'Хорезм, город Ургенч, Буюм базар. Райцентр'}
								</Typography>
								<Typography py="0.3rem" color="gray.500">
									Email: info@sdb.uz
								</Typography>
								<Typography
									py="0.3rem"
									mb="1rem"
									color="gray.500"
								>
									{lang === 'uz' ? 'Telefon raqam' : 'Телефонный номер'}: +998 94 110 06 06
								</Typography>

								<FlexBox className="flex" mx="-5px">
									{iconList.map((item) => (
										<a
											href={item.url}
											target="_blank"
											rel="noreferrer noopenner"
											key={item.iconName}
										>
											<Box
												m="5px"
												size="small"
												p="10px"
												bg="rgba(0,0,0,0.2)"
												borderRadius="50%"
											>
												<Icon
													size="12px"
													defaultcolor="auto"
												>
													{item.iconName}
												</Icon>
											</Box>
										</a>
									))}
								</FlexBox>
							</Grid>
						</Grid>
					</Box>
				</Container>
				<Divider/>
				<FlexBox alignItems='center' justifyContent="center" pt='10px'>
					<Typography
						fontSize="18px"
						fontWeight="600"
						mb="1.25rem"
						lineHeight="1"
						textAlign="center"
						color="#fff"
					>
						{lang === 'uz' ? 'Sayt yaratuvchisi:' : 'Создатель сайта:'}  <a className="footer_link" href='https://appx.uz' target="_blank" rel="noreferrer"> Appx Group</a>
					</Typography>
				</FlexBox>
			</Box>
		</footer>
	)
}

const customerCareLinks = [
	"Help Center",
	"How to Buy",
	"Track Your Order",
	"Corporate & Bulk Purchasing",
	"Returns & Refunds",
]

const iconList = [
	{
		iconName: "telegram",
		url: "https://t.me/samsung_dehkonbozor1",
	},
	{
		iconName: "instagram",
		url: "https://www.instagram.com/samsung_dehkonbozor/",
	},
	{
		iconName: "youtube",
		url: "https://www.instagram.com/samsung_dehkonbozor/",
	},
]

export default Footer
