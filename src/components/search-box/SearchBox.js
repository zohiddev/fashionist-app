import Card from "components/Card"
import { Span } from "components/Typography"
import { debounce } from "lodash"
import Link from "next/link"
import React, { useCallback, useEffect, useState } from "react"
import Box from "../Box"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import Menu from "../Menu"
import MenuItem from "../MenuItem"
import TextField from "../text-field/TextField"
import StyledSearchBox from "./SearchBoxStyle"
import { getSearchedProducts } from './../../reducers/searchReducer';
import { useDispatch, useSelector } from 'react-redux';
import { $host } from 'utils/http';
import { useRouter } from 'next/router';

const SearchBox = () => {
	const [category, setCategory] = useState("All Categories")
	const [title, setTitle] = useState('')
	const dispatch = useDispatch()
	const router = useRouter()
	const state = useSelector(state => state.search.searchedProducts)
	const [resultList, setResultList] = useState([])
	const lang = useSelector(state => state.lang.lang)
	const handleCategoryChange = (cat) => () => {
		setCategory(cat)
	}

	const search = debounce((e) => {
		const value = e.target?.value
		if (!value) setResultList([])
		else {
			$host.get(`/v1/product/list?type=default&search=${value}`).then(function(response){
				if(!response?.data?.error){
					// dispatch(setSearchedProducts(response.data.products))
					setResultList(response?.data?.products)
				}
			}).catch(function (error) {
				setResultList([])
			})
			// getSearchedProducts(value)(dispatch);
			}
	}, 200)

	const hanldeSearch = useCallback((event) => {
		event.persist()
		search(event)
		setTitle(event.target.value)
		setResultList(state)
	}, [])

	const handleKeyPress = (e) => {
		if(e.key === 'Enter'){
			router.push(`/products/products?search=${title}`)
		}
	}

	const handleDocumentClick = () => {
		setResultList([])
	}

	useEffect(() => {
		window.addEventListener("click", handleDocumentClick)
		return () => {
			window.removeEventListener("click", handleDocumentClick)
		}
	}, [])

	// useEffect(() => {
	// 	getSearchedProducts(title)(dispatch)
	// }, [title])

	return (
		<Box position="relative" flex="1 1 0" maxWidth="600px" mx="auto">
			<StyledSearchBox>
				<Icon className="search-icon" size="18px">
					search
				</Icon>
				<TextField
					className="search-field"
					placeholder={lang === 'uz' ? 'Qidirish...' : 'Поиск...'}
					fullwidth
					onChange={hanldeSearch}
					onKeyPress={(e) => handleKeyPress(e)}

				/>
				{/* <Menu
					className="category-dropdown"
					direction="right"
					handler={
						<FlexBox
							type="submit"
							as="button"
							className=""
							alignItems="center"
						>
							<span>Search</span>
						</FlexBox>
					}
				></Menu>
				<Box className="menu-button" ml="14px" cursor="pointer">
					<Icon color="primary">menu</Icon>
				</Box> */}
			</StyledSearchBox>

			{!!resultList.length && (
				<Card
					position="absolute"
					top="100%"
					py="0.5rem"
					width="100%"
					boxShadow="large"
					zIndex={99}
				>
					{resultList?.map((item) => (
						<Link href={`/product/${item?.slug}`} key={item?.id}>
							<MenuItem key={item?.id}>
								<Span fontSize="14px">{item?.name_uz}</Span>
							</MenuItem>
						</Link>
					))}
				</Card>
			)}
		</Box>
	)
}

const categories = [
	"All Categories",
	"Car",
	"Clothes",
	"Electronics",
	"Laptop",
	"Desktop",
	"Camera",
	"Toys",
]

const dummySearchResult = [
	"Macbook Air 13",
	"Ksus K555LA",
	"Acer Aspire X453",
	"iPad Mini 3",
]

export default SearchBox
