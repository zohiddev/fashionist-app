import React, { useEffect } from "react"
import productDatabase from "data/product-database"
import CategorySectionHeader from "../CategorySectionHeader"
import Container from "../Container"
import Grid from "../grid/Grid"
import ProductCard1 from "../product-cards/ProductCard1"
import { useDispatch, useSelector } from "react-redux"
import { getRecommendedProducts } from './../../reducers/productsReducer';
import useWindowSize from './../../hooks/useWindowSize';

const SomeProducts = () => {
	const state = useSelector((state) => state.products)
	const lang = useSelector((state) => state.lang.lang)
	const dispatch = useDispatch()
	const window = useWindowSize()
	useEffect(() => {
		// getRecommendedProducts()(dispatch)
	}, [dispatch])

	return (
		<Container mb={window < 568 ? "1.75rem" : "3.75rem"}>
			<CategorySectionHeader
				title={lang === 'uz' ? "Tavsiya e'tilganlar" : 'Рекомендуемые'}
				seeMoreLink="/products/products?type=recommended"
			/>
			<Grid container spacing={6}>
				{state.recommendedProducts.map((item, ind) => (
					<Grid item lg={3} md={4} sm={6} xs={6} key={ind}>
						<ProductCard1
							price={23}
							off={25}
							hoverEffect
							product={item}
							{...item}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default SomeProducts
