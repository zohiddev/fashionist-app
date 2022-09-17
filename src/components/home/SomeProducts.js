import React from "react"
import CategorySectionHeader from "../CategorySectionHeader"
import Container from "../Container"
import Grid from "../grid/Grid"
import ProductCard1 from "../product-cards/ProductCard1"
import { useSelector } from "react-redux"
import useWindowSize from './../../hooks/useWindowSize';

const SomeProducts = ({recommendedProducts}) => {
	const state = useSelector((state) => state.products)
	const lang = useSelector((state) => state.lang.lang)
	const window = useWindowSize()


	return (
		<Container mb={window < 568 ? "1.75rem" : "3.75rem"}>
			<CategorySectionHeader
				title={lang === 'uz' ? "Yangi qo`shilganlar" : 'Новое добавлено'}
				seeMoreLink="/products/products?type=new"
			/>
			<Grid container spacing={6}>
				{recommendedProducts !== null && recommendedProducts?.map((item, ind) => (
					<Grid item lg={3} md={4} sm={6} xs={6} key={ind}>
						<ProductCard1
							price={23}
							off={25}
							hoverEffect
							product={item}
							// {...item}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default SomeProducts
