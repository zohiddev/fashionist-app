import Box from "components/Box"
import Button from "components/buttons/Button"
import Card from "components/Card"
import { Chip } from "components/Chip"
import Container from "components/Container"
import FlexBox from "components/FlexBox"
import { H2, H3, Paragraph } from "components/Typography"
import React from "react"
import styled from "styled-components"
import { getTheme } from "utils/utils"


const Section5 = () => {
	return (
		<SectionWrapper py="6rem" id="price">
			<Container id="section-3" position="relative">
				<H2
					color="secondary.main"
					maxWidth="830px"
					mx="auto"
					mb="4.5rem"
					textAlign="center"
					fontSize="40px"
					fontWeight="900"
				>
					Ready to Boost <br /> Your Ecommerce Business?
				</H2>

				<FlexBox flexWrap="wrap" justifyContent="center" m="-1.325rem">
					<Card
						minWidth="270px"
						textAlign="center"
						pt="3rem"
						pb="2rem"
						px="1rem"
						m="1.325rem"
						boxShadow="regular"
						hoverEffect
					>
						<H3>Regular</H3>
						<Box
							position="relative"
							display="inline-block"
							mb="1.5rem"
						>
							<H3 fontSize="72px" color="secondary.main">
								28
							</H3>
							<Chip
								position="absolute"
								top="1rem"
								left="-1rem"
								fontWeight="600"
								fontSize="16px"
							>
								$
							</Chip>
						</Box>

						<Paragraph maxWidth="216px" mx="auto" mb="130px">
							Can be used in a single end product which end users{" "}
							<b>are not charged</b> for.
						</Paragraph>

						<a href="https://1.envato.market/oeNbNe">
							<Button
								variant="outlined"
								color="secondary"
								mx="auto"
							>
								Purchase Now
							</Button>
						</a>
						{/* </a> */}
					</Card>

					<Card
						minWidth="270px"
						textAlign="center"
						pt="3rem"
						pb="2rem"
						px="1rem"
						m="1.325rem"
						boxShadow="regular"
						color="gray.white"
						bg="primary.main"
						hoverEffect
					>
						<H3>Extended License</H3>
						<Box
							position="relative"
							display="inline-block"
							mb="1.5rem"
						>
							<H3 fontSize="72px">700</H3>
							<Chip
								position="absolute"
								top="1rem"
								left="-1rem"
								fontWeight="600"
								fontSize="16px"
							>
								$
							</Chip>
						</Box>

						<Paragraph maxWidth="216px" mx="auto" mb="130px">
							Can be used in a single end product which end users{" "}
							<b>are not charged</b> for.
						</Paragraph>

						<Box
							color="white"
						>
							<a href="https://1.envato.market/oeNbNe">
								<Button
									variant="outlined"
									color="inherit"
									mx="auto"
								>
									Purchase Now
								</Button>
							</a>
						</Box>
					</Card>
				</FlexBox>
			</Container>
		</SectionWrapper>
	)
}

export default Section5
