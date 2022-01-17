import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Box from "../Box"
import Container from "../Container"
import Grid from "../grid/Grid"
import Navbar from "../navbar/Navbar"
import Stepper from "../stepper/Stepper"
import AppLayout from "./AppLayout"

const CheckoutNavLayout = ({ children }) => {
	const [selectedStep, setSelectedStep] = useState(0)

	const router = useRouter()
	const { pathname } = router

	const handleStepChange = (_step, ind) => {
		const handlers = [
			() => router.push("/cart"),
			() => router.push("/checkout"),
			() => router.push("/payment"),
			() => router.push("/orders"),
		]

		const handler = handlers[ind]

		handler?.()
	}

	useEffect(() => {
		switch (pathname) {
			case "/cart":
				setSelectedStep(1)
				break
			case "/checkout":
				setSelectedStep(2)
				break
			case "/payment":
				setSelectedStep(3)
				break
			default:
				break
		}
	}, [pathname])

	return (
		<AppLayout navbar={<Navbar />}>
			<Container my="2rem">
				<Box mb="14px">
					<Grid container spacing={6}>
						<Grid item lg={8} md={8} xs={12}>
							<Stepper
								stepperList={stepperList}
								selectedStep={selectedStep}
								onChange={handleStepChange}
							/>
						</Grid>
					</Grid>
				</Box>
				{children}
			</Container>
		</AppLayout>
	)
}

const stepperList = [
	{
		title: "Cart",
		disabled: false,
	},
	{
		title: "Details",
		disabled: false,
	},
	{
		title: "Payment",
		disabled: false,
	},
	{
		title: "Review",
		disabled: true,
	},
]

export default CheckoutNavLayout
