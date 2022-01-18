import Box from "components/Box"
import FlexBox from "components/FlexBox"
import NavbarLayout from "components/layout/NavbarLayout"
import ProductDescription from "components/products/ProductDescription"
import ProductIntro from "components/products/ProductIntro"
import RelatedProducts from "components/products/RelatedProducts"
import { H5 } from "components/Typography"
import React, { useState } from "react"
import Container from "../../components/Container"
import { useSelector } from 'react-redux';

const ProductDetails = ({ data }) => {
	const [selectedOption, setSelectedOption] = useState("attributes")
	const lang = useSelector(state => state.lang.lang)
	const handleOptionClick = (opt) => () => {
		setSelectedOption(opt)
	}

	return (
		<div>
			<Container mb="70px" mt="50px">
				<ProductIntro product={data.product} />

				<FlexBox
					borderBottom="1px solid"
					borderColor="gray.400"
					mt="80px"
					mb="26px"
				>
					<H5
						className="cursor-pointer"
						mr="25px"
						p="4px 10px"
						color={
							selectedOption === "attributes"
								? "primary.main"
								: "text.muted"
						}
						borderBottom={
							selectedOption === "attributes" && "2px solid"
						}
						borderColor="primary.main"
						onClick={handleOptionClick("attributes")}
					>
						{lang === 'uz' ? "Xususiyatlar" : 'Функции'}
					</H5>
					<H5
						className="cursor-pointer"
						mr="25px"
						p="4px 10px"
						color={
							selectedOption === "description"
								? "primary.main"
								: "text.muted"
						}
						borderBottom={
							selectedOption === "description" && "2px solid"
						}
						borderColor="primary.main"
						onClick={handleOptionClick("description")}
					>
						{lang === 'uz' ? "Ma'lumotlar" : 'Информация'}
					</H5>
					{/* <H5
						className="cursor-pointer"
						p="4px 10px"
						color={
							selectedOption === "review"
								? "primary.main"
								: "text.muted"
						}
						onClick={handleOptionClick("review")}
						borderBottom={
							selectedOption === "review" && "2px solid"
						}
						borderColor="primary.main"
					>
						Izohlar (3)
					</H5> */}
				</FlexBox>

				<Box mb="50px">
					{selectedOption === "description" && <ProductDescription desc={lang === 'uz' ? data?.product?.description_uz : data?.product?.description_ru}/>}
					{selectedOption === "attributes" && <ProductDescription  attributes={data?.product?.attributes}/>}
				</Box>

				{
					data?.recommendedProducts?.length === 0 ? null :
					<RelatedProducts
						recommendedProducts={data?.recommendedProducts}
					/>
				}

			</Container>
		</div>
	)
}

ProductDetails.layout = NavbarLayout

export async function getServerSideProps({ params }) {
	const res = await fetch(
		`https://api.sdb.uz/dev/v1/product/${params.id}`
	)
	const data = await res.json()

	return {
		props: {
			data: data,
			query: params,
		},
	}
}

export default ProductDetails
