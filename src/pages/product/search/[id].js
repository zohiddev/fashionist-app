import Box from "components/Box"
import IconButton from "components/buttons/IconButton"
import Card from "components/Card"
import FlexBox from "components/FlexBox"
import Grid from "components/grid/Grid"
import Hidden from "components/hidden/Hidden"
import Icon from "components/icon/Icon"
import NavbarLayout from "components/layout/NavbarLayout"
import ProductCard1List from "components/products/ProductCard1List"
import ProductCard9List from "components/products/ProductCard9List"
import ProductFilterCard from "components/products/ProductFilterCard"
import Select from "components/Select"
import Sidenav from "components/sidenav/Sidenav"
import { H5, Paragraph } from "components/Typography"
import React, { useCallback, useState } from "react"
import useWindowSize from "../../../hooks/useWindowSize"
import Container from "components/Container"
import { useRouter } from "next/router"
import { useEffect } from "react"

const ProductSearchResult = ({data, rest}) => {
	const [view, setView] = useState("grid")
	const [fetchedData, setFetchedData] = useState(data)
	const width = useWindowSize()
	const isTablet = width < 1025
	const router = useRouter()
	const query = router.query

	console.log(rest)

	return (
		<Container pb="2rem">
			<Box pt="20px">
				<FlexBox
					p="1.25rem"
					flexWrap="wrap"
					justifyContent="space-between"
					alignItems="center"
					mb="55px"
					elevation={5}
					as={Card}
				>
					<div>
						{/* <H5>Searching for “ mobile phone ”</H5> */}
						<Paragraph color="text.muted">Jami {data?.pagination?.total} ta topildi</Paragraph>
					</div>
					<FlexBox alignItems="center" flexWrap="wrap">
						<Paragraph color="text.muted" mr="1rem">
						Saralash:
						</Paragraph>
						<Box flex="1 1 0" mr="1.75rem" minWidth="150px">
							<Select
								placeholder="Saralash"
								defaultValue={sortOptions[0]}
								options={sortOptions}
							/>
						</Box>

						{/* <Paragraph color="text.muted" mr="0.5rem">
							View:
						</Paragraph>
						<IconButton size="small" onClick={toggleView("grid")}>
							<Icon
								variant="small"
								defaultcolor="auto"
								color={view === "grid" ? "primary" : "inherit"}
							>
								grid
							</Icon>
						</IconButton>
						<IconButton size="small" onClick={toggleView("list")}>
							<Icon
								variant="small"
								defaultcolor="auto"
								color={view === "list" ? "primary" : "inherit"}
							>
								menu
							</Icon>
						</IconButton> */}

						{isTablet && (
							<Sidenav
								position="left"
								scroll={true}
								handle={
									<IconButton size="small">
										<Icon>options</Icon>
									</IconButton>
								}
							>
								<ProductFilterCard subCats={data?.subCats}/>
							</Sidenav>
						)}
					</FlexBox>
				</FlexBox>

				<Grid container spacing={6}>
					<Hidden as={Grid} item lg={3} xs={12} down={1024}>
						<ProductFilterCard subCats={data?.subCats}/>
					</Hidden>

					<Grid item lg={9} xs={12}>
						{view === "grid" ? (
							<ProductCard1List  products={data?.products} pagination={data?.pagination}/>
						) : (
							<ProductCard9List products={data?.products}/>
						)}
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

const sortOptions = [
	{ label: "Barchasini ko'rsatish", value: "Barchasini ko'rsatish" },
	{ label: "Arzon yuqorida", value: "Arzon yuqorida" },
	{ label: "Qimmat yuqorida", value: "Qimmat yuqorida" },
]

ProductSearchResult.layout = NavbarLayout

export async function getServerSideProps({params, query}){
	if(params.id !== 'products'){
		const res = await fetch(`http://89.223.122.61:3333/dev/v1/category/${params.id}?per_page=15&page=${query.page}`)
		const data = await res.json()
		return {
			props:{
				data: data,
				rest: query
			}
		}
	}else{
		const res = await fetch(`http://89.223.122.61:3333/dev/v1/product/list?per_page=15&page=${query.page}&brand_ids=${query.brand_ids}`)
		const data = await res.json()
		console.log(res)
		return {
			props:{
				data: data,
				rest: query
			}
		}
	}
}

export default ProductSearchResult