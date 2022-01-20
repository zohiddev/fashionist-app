import React, { useEffect, useState } from "react"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import { Small } from "../Typography"
import StyledTopbar from "./Topbar.style"
import { useDispatch } from 'react-redux';
import { setLang } from "reducers/LangReducer"
const Topbar = () => {
	const [language, setLanguage] = useState(languageList[0])
	const dispatch = useDispatch()

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
				<FlexBox className="topbar-left">
					<FlexBox alignItems="center">
						<Icon size="14px">phone-call</Icon>
						<span style={{color: '#fff!important'}}>+998 94 110 06 06</span>
					</FlexBox>
				</FlexBox>
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
		title: "Uzbek",
		sub: 'uz'
	},
	{
		title: "Russian",
		sub: 'ru'
	},
]

export default Topbar
