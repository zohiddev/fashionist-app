import React, { useEffect, useState } from "react"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import Typography,{ Small, H3 } from "../Typography"
import StyledTopbar from "./Topbar.style"
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from "reducers/LangReducer"
import useWindowSize from './../../hooks/useWindowSize';
import  Accordion  from 'components/accordion/Accordion';
import  AccordionHeader  from 'components/accordion/AccordionHeader';
import Grid from 'components/grid/Grid';
import Box from '../Box';
import  Link  from 'next/link';


const Topbar = () => {
	const [language, setLanguage] = useState(languageList[0])
	const dispatch = useDispatch()
	const window = useWindowSize()
	const categories = useSelector(state => state.categories.navbarLinks)
	const [modalActive, setModalActive] = useState(false)
	const lang = useSelector(state => state.lang.lang)

	const handleLanguageClick = (lang) => () => {
		const new_lang = (lang.sub !== 'uz') ? 'ru' : 'uz'
		localStorage.setItem('lang', new_lang)
		dispatch(setLang(new_lang))
		setLanguage(lang)
	}

	useEffect(() => {
		localStorage.getItem('lang') === 'uz' ? setLanguage(languageList[0]) : setLanguage(languageList[1])
	}, [])

	return (
		<StyledTopbar>
			<Container
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				height="100%"
			>
				{
					window < 768 ? <FlexBox className="topbar-left">
					<FlexBox alignItems="center">
						<div className="category-holder" onClick={() => setModalActive(!modalActive)}>
								<FlexBox
									color="text.hint"
									alignItems="center"
									mr="0.8rem"
								>
									<Icon color="white">menu</Icon>
								</FlexBox>
						</div>
						<Link href='/'>
							<a className="white-link" style={{color: '#fff!important', fontSize: '20px'}}>sdb.uz</a>
						</Link>
					</FlexBox>

					</FlexBox> : <FlexBox className="topbar-left">
						<FlexBox alignItems="center">
							<Icon size="14px">phone-call</Icon>
							<span style={{color: '#fff!important'}}>+998 94 110 06 06</span>
						</FlexBox>
					</FlexBox>
				}

				<div className={modalActive ? "category_modal active" : "category_modal"} style={{padding: '16px'}}>
					<FlexBox alignItems="center" justifyContent="space-between" my="20px">
						<H3 color="black" fontSize="28px">{lang === 'uz' ? 'Kategoriyalar' : 'Категории'}</H3>
						<button className="category_modal-btn" onClick={() => setModalActive(false)}><Icon>close</Icon></button>
					</FlexBox>
					{categories?.map((item,ind) => {
						return(
							<Accordion key={ind} >
								<AccordionHeader px="0px" py="10px" style={{backgroundColor: '#F6F9FC', borderRadius: '8px'}} >
									<FlexBox alignItems='center'>
										{/* <Image
											quality="85"
											loader={myLoader}
											src={item?.image}
											layout="fixed"
											alt={item?.name_uz}
											width={'30px'}
											height={'30px'}
										/> */}
										<Typography
											fontWeight="600"
											fontSize="18px"
											ml='10px'
											color="black"
										>
											{lang === 'uz' ? item?.name_uz : item?.name_ru}
										</Typography>
									</FlexBox>
								</AccordionHeader>

								<Box pl='15px' mb="2rem" mt="0.5rem">
									<Grid spacing={5}>
										{item?.children?.map(
											(el, ind) => (
												<Grid
													lg={1}
													md={2}
													sm={3}
													xs={4}
													key={ind}
												>
													<Link href={"/products/"+el?.slug} >
														<a onClick={() => setModalActive(false) } style={{marginBottom: '10px'}}>
															<H3 mb='5px' fontSize='15px'>
																{lang === 'uz' ? el?.name_uz : el?.name_ru}
															</H3>
														</a>
													</Link>
													{
														el?.children?.map((link, i) => {
															return (
																<Link href={"/products/"+link?.slug} key={i}  >
																	<a onClick={() => setModalActive(false)}>
																		<H3 mb='5px' fontSize='15px' fontWeight="300">
																			{lang === 'uz' ? link?.name_uz : link?.name_ru}
																		</H3>
																	</a>
																</Link>
															)
														})
													}
												</Grid>
											)
										)}
									</Grid>
								</Box>
							</Accordion>
						)
					})}
				</div>

				<FlexBox className="topbar-right" alignItems="center">
					<Menu
						direction="right"
						handler={
							<FlexBox
								className="dropdown-handler"
								alignItems="center"
								height="40px"
								mr="1.25rem"
							>
								<Small fontWeight="600">{language.title}</Small>
								<Icon size="1rem">chevron-down</Icon>
							</FlexBox>
						}
					>
						{languageList.map((item) => (
							<MenuItem
								key={item.title}
								onClick={handleLanguageClick(item)}
							>
								<Small fontWeight="600">{item.title}</Small>
							</MenuItem>
						))}
					</Menu>
				</FlexBox>
			</Container>
		</StyledTopbar>
	)
}

const languageList = [
	{
		title: "O`zb",
		sub: 'uz'
	},
	{
		title: "Рус",
		sub: 'ru'
	},
]

export default Topbar
