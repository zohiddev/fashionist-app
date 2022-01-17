import productDatabase from "data/product-database"
import React from "react"
import FlexBox from "../FlexBox"
import Grid from "../grid/Grid"
import Pagination from "../pagination/Pagination"
import ProductCard1 from "../product-cards/ProductCard1"
import { SemiSpan } from "../Typography"

const ProductCard1List = ({products, pagination}) => {
	return (
		<div>
			<Grid container spacing={6}>
				{products?.map((item, ind) => (
					<Grid item lg={4} sm={6} xs={12} key={item.id}>
						<ProductCard1 product={item} />
					</Grid>
				))}
			</Grid>

			<FlexBox
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
				mt="32px"
			>
				<SemiSpan></SemiSpan>
				<Pagination pageCount={pagination?.total_pages} />
			</FlexBox>
		</div>
	)
}

export default ProductCard1List
