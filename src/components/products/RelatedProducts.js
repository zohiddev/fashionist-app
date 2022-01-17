import productDatabase from "data/product-database"
import React from "react"
import Box from "../Box"
import Grid from "../grid/Grid"
import ProductCard1 from "../product-cards/ProductCard1"
import { H3 } from "../Typography"
import { useSelector } from 'react-redux';

const RelatedProducts = ({recommendedProducts}) => {
	const lang = useSelector(state => state.lang.lang)
	return (
		<Box mb="3.75rem">
			<H3 mb="1.5rem">{lang === 'uz' ? "O'xshash mahsulotlar" : 'Похожие продукты'}</H3>
			<Grid container spacing={8}>
				{recommendedProducts?.map((item, ind) => (
					<Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
						<ProductCard1 {...item} hoverEffect product={item} />
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

export default RelatedProducts
