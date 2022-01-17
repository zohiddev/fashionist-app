import SmartphonesView from "components/product-cards/SmartphonesView"
import NextImage from "next/image"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getSmartphones, setSmartphones, getBrands } from "reducers/productsReducer"
import Box from "../Box"
import CategorySectionHeader from "../CategorySectionHeader"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Grid from "../grid/Grid"
import Hidden from "../hidden/Hidden"
import Typography from "../Typography"
import StyledProductCategory from "./ProductCategoryStyle"
import useWindowSize from './../../hooks/useWindowSize';

const Smartphones = () => {
	const state = useSelector((state) => state.products)
	const lang = useSelector(state => state.lang.lang)
	const [type, setType] = useState("brands")
	const [selected, setSelected] = useState("")
	const [list, setList] = useState([])
	const dispatch = useDispatch()
	const window = useWindowSize()

	const handleCategoryClick = (brand) => {
		if (selected.match(brand)) {
			setSelected("")
		} else setSelected(brand)
	}

	useEffect(() => {
		// if (type === "brands") setList(brandList)
		// else setList(shopList)

		// getSmartphones()(dispatch)
		// getBrands()(dispatch)
	}, [type, dispatch])


	return (
		<Container mb={window < 568 ? "1.75rem" : "3.75rem"}>
			<FlexBox>
				{/* <Hidden down={768} mr="1.75rem">
					<Box
						shadow={6}
						borderRadius={10}
						padding="1.25rem"
						bg="white"
					>
						<FlexBox mt="-0.5rem" mb="0.5rem">
							<Typography
								fontWeight="600"
								fontSize="20px"
								padding="0.5rem 1rem"
								style={{ cursor: "pointer" }}
								color={
									type === "brands" ? "gray.900" : "gray.600"
								}
								onClick={() => setType("brands")}
							>
								Brands
							</Typography>
						</FlexBox>

						{state?.brands?.map((brand, ind) => (
							<StyledProductCategory
								key={ind}
								mb="0.75rem"
								bg={"gray.100"}
								bg={
									selected.match(brand) ? "white" : "gray.100"
								}
								shadow={selected.match(brand) ? 4 : null}
								onClick={() => handleCategoryClick(brand)}
							>
								{/* <NextImage
									height={20}
									width={20}
									objectFit="contain"
									alt={brand.name_uz}
									src={brand.image}
								/>
								<span className="product-category-title">
									{brand.name_uz}
								</span>
							</StyledProductCategory>
						{/* ))}

						<StyledProductCategory
							mt="4rem"
							bg={
								selected.match(`all-${type}`)
									? "white"
									: "gray.100"
							}
							shadow={selected.match(`all-${type}`) ? 4 : null}
							onClick={() => handleCategoryClick(`all-${type}`)}
						>
							<span className="product-category-title show-all">
								View All {type}
							</span>
						</StyledProductCategory>
					</Box>
				</Hidden> */}

				<Box flex="1 1 0" minWidth="0px">
					<CategorySectionHeader
						title={lang === 'uz' ? "Smartfonlar" : 'Смартфоны'}
						seeMoreLink="/products/smartfonlar"
					/>

					<Grid container spacing={6}>
						{state?.products?.map((product, ind) => (
							<Grid item lg={3} sm={4} xs={6} key={ind}>
								<SmartphonesView hoverEffect product={product} />
							</Grid>
						))}
					</Grid>
				</Box>
			</FlexBox>
		</Container>
	)
}

export default Smartphones