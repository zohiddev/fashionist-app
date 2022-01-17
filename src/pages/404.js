import Button from "components/buttons/Button"
import FlexBox from "components/FlexBox"
import Image from "components/Image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useSelector } from 'react-redux';

const Error404 = () => {
	const router = useRouter()
	const lang = useSelector(state => state.lang.lang)

	const handleGoBack = async () => {
		router.back()
	}

	return (
		<FlexBox
			flexDirection="column"
			minHeight="100vh"
			justifyContent="center"
			alignItems="center"
			px="1rem"
		>
			<Image
				src="/assets/images/illustrations/404.svg"
				maxWidth="320px"
				width="100%"
				mb="2rem"
			/>
			<FlexBox flexWrap="wrap">
				<Button
					variant="outlined"
					color="primary"
					m="0.5rem"
					onClick={handleGoBack}
				>
					{lang === 'uz' ? 'Ortga qaytish' : 'Возвращаться'}
				</Button>
				<Link href="/">
					<Button variant="contained" color="primary" m="0.5rem">
						{lang === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться домой'}
					</Button>
				</Link>
			</FlexBox>
		</FlexBox>
	)
}

export default Error404
