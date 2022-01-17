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
import Typography, { H5, Paragraph } from "components/Typography"
import React, { useEffect, useState } from "react"
import useWindowSize from "hooks/useWindowSize"
import Container from "components/Container"
import { useRouter } from "next/router"
import { useSelector } from 'react-redux';
import  Button  from 'components/buttons/Button';
import Link from "next/link"

const ProductSearchResult = ({ data, rest }) => {
	const [view, setView] = useState("grid")
	const lang = useSelector(state => state.lang.lang)
	const width = useWindowSize()
	const [sortValue, setSortValue] = useState('')
	const isTablet = width < 1025
	const router = useRouter()

	const handleGoBack = async () => {
		router.back()
	}

	const handleSelectChange = (e) => {
		setSortValue(e.value)
	}

	console.log(data)

	useEffect(() => {
			if(sortValue === '' || sortValue === 'all'){
				delete router.query.sort_by;
				delete router.query.order_type;
			}else{
				router.query.sort_by = 'price'
				router.query.order_type = sortValue
			}
			router.push(router)
	}, [sortValue])

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
						<Paragraph color="text.muted">
							{lang === 'uz' ? `Jami ${data?.pagination?.total} ta topildi` : `Всего найдено ${data?.pagination?.total}`}
						</Paragraph>
					</div>
					<FlexBox alignItems="center" flexWrap="wrap">
						<Paragraph color="text.muted" mr="1rem">
							{lang === 'uz' ? 'Saralash' : 'Сортировка'}:
						</Paragraph>
						<Box flex="1 1 0" mr="1.75rem" minWidth="150px">
							<Select
								placeholder={lang === 'uz' ? 'Saralash' : 'Сортировка'}
								isSearchable={false}
								defaultValue={lang === 'uz' ?  sortOptions_uz[0] : sortOptions_ru[0]}
								options={lang === 'uz' ? sortOptions_uz : sortOptions_ru}
								onChange={(e) => handleSelectChange(e)}
							/>
						</Box>

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
								<ProductFilterCard
									subCats={data?.subCats}
									categoryBrands={data?.categoryBrands}
									categoryAttributes={data?.categoryAttributes}
									brandCategories={data?.relatedCategories}
								/>
							</Sidenav>
						)}
					</FlexBox>
				</FlexBox>

				<Grid container spacing={6}>
					<Hidden as={Grid} item lg={3} xs={12} down={1024}>
						<ProductFilterCard
							subCats={data?.subCats}
							categoryBrands={data?.categoryBrands}
							categoryAttributes={data?.categoryAttributes}
							brandCategories={data?.relatedCategories}
						/>
					</Hidden>

					<Grid item lg={9} xs={12}>
						{data?.products?.length !== 0 ? (
							<ProductCard1List
								products={data?.products}
								pagination={data?.pagination}
							/>
						) : (
							<FlexBox
								flexDirection="column"
								minHeight="100vh"
								justifyContent="center"
								alignItems="center"
								px="1rem"
							>

								<Typography>
									{lang === 'uz' ? 'Kechirasiz, hozirda ushbu kategoriyada hech qanday mahsulot yoʻq.' : 'К сожалению, в данной категории временно нет товаров'}
								</Typography>

								<FlexBox flexWrap="wrap">
									<Button
										variant="outlined"
										color="primary"
										m="0.5rem"
										onClick={handleGoBack}
									>
										{lang === 'uz' ? 'Ortga qaytish' : 'Возвращаться'}
									</Button>
									<Link href="/">
										<Button variant="contained" color="primary" m="0.5rem">
											{lang === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться домой'}
										</Button>
									</Link>
								</FlexBox>
							</FlexBox>
						)}
					</Grid>
				</Grid>
			</Box>
		</Container>
	)
}

const sortOptions_uz = [
	{ label: "Barchasini ko'rsatish", value: "all" },
	{ label: "Arzon yuqorida", value: "asc" },
	{ label: "Qimmat yuqorida", value: "desc" },
]

const sortOptions_ru = [
	{ label: "Показать все", value: "all" },
	{ label: "Дешево выше", value: "asc" },
	{ label: "Дорого выше", value: "desc" },
]

ProductSearchResult.layout = NavbarLayout

export async function getServerSideProps({ params, query }) {
	if (params.id !== "products") {
		const res = await fetch(
			`https://api.sdb.uz/dev/v1/category/${params.id}?per_page=15${query.page ? `&page=${query.page}` : ''}${query.brand_ids ? `&brand_ids=${query.brand_ids}` : ''}${query.attr ? `&attr=${query.attr}` : ''}${query.sort_by ? `&sort=${query.sort_by},${query.order_type}` : ''}`
		)
		const data = await res.json()
		console.log(res)
		return {
			props: {
				data: data,
				rest: query,
			},
		}
	} else {
		const res = await fetch(
			`https://api.sdb.uz/dev/v1/product/list?per_page=15&page=${query.page}${query.brand ? `&brand_ids=${query.brand}` : ''}${query.sort_by ? `&sort=${query.sort_by},${query.order_type}` : ''}${query.views ? `&sort=${query.views}` : ''}${query.news ? `&sort=${query.news}` : ''}${query.type ? `&type=${query.type}` : ''}${query.search ? `&type=default&search=${query.search}` : ''}`
		)
		const data = await res.json()
		console.log(res)
		return {
			props: {
				data: data,
				rest: query,
			},
		}
	}
}

export default ProductSearchResult

// http://localhost:3000/products/smartfon-va-telefonlar?sort-by=price&order-type=asc
