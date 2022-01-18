import React from "react"
import useWindowSize from "../../hooks/useWindowSize"
import Box from "../Box"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import { H2 } from "../Typography"
import Button from "components/buttons/Button"
import { useSelector } from 'react-redux';
import { api } from "utils/http"
import { useRouter } from 'next/router';

const DashboardPageHeader = ({ iconName, title, button, exitBtn }) => {
	const width = useWindowSize()
	const router = useRouter()
	const lang = useSelector(state => state.lang.lang)
	const isTablet = width < 1025

	const handleLogOutBtn = async () => {
		let res = await api.logout(localStorage.getItem('refreshToken'))
			if (!res.data.error) {
				localStorage.removeItem("accessToken")
				localStorage.removeItem("refreshToken")
				localStorage.removeItem("user")
				router.push('/')
			} else {
				alert(res.data.error)
			}
	}

	return (
		<Box mt="1.5rem" mb="1.5rem">
			<FlexBox
				justifyContent="space-between"
				alignItems="center"
				mt="1rem"
			>
				<FlexBox alignItems="center">
					<Icon color="primary">{iconName}</Icon>
					<H2 ml="12px" my="0px" lineHeight="1" whitespace="pre">
						{title}
					</H2>
				</FlexBox>

				{ exitBtn ? !isTablet &&   <FlexBox>
									<Button color="primary" bg="primary.light" px="2rem" mr="10px" onClick={() => handleLogOutBtn()}>
										{lang === 'uz' ? 'Chiqish' : 'Выход'}
									</Button>
									{button}
								</FlexBox> : !isTablet && button
				}
			</FlexBox>

			{exitBtn ? isTablet && !!button && <Box mt="1rem"> <Button color="primary" bg="primary.light" px="2rem" mb="10px" onClick={() => handleLogOutBtn()}>
										{lang === 'uz' ? 'Chiqish' : 'Выход'}
									</Button>{button}</Box> : isTablet && !!button && <Box mt="1rem">{button}</Box>}


		</Box>
	)
}

export default DashboardPageHeader
