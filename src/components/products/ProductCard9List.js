import productDatabase from "data/product-database"
import React from "react"
import FlexBox from "../FlexBox"
import Pagination from "../pagination/Pagination"
import ProductCard9 from "../product-cards/ProductCard9"
import { SemiSpan } from "../Typography"

const ProductCard9List = ({products}) => {

	console.log(products)
	return (
		<div>
			{products.map((item, ind) => (
				<ProductCard9 mb="1.25rem" key={item.id} item={item} />
			))}

			<FlexBox
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
				mt="32px"
			>
				<SemiSpan>Showing 1-9 of 1.3k Products</SemiSpan>
				<Pagination pageCount={10} />
			</FlexBox>
		</div>
	)
}

export default ProductCard9List
