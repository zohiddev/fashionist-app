import React, { useEffect, useState, Fragment } from "react"
import Banner from "components/home/Banner"
import DiscountedProducts from "components/home/DiscountedProducts"
import NewProducts from "components/home/NewProducts"
import Services from "components/home/Services"
import Smartphones from "components/home/Smartphones"
import SomeProducts from "components/home/SomeProducts"
import TopCategories from "components/home/TopCategories"
import AppLayout from "components/layout/AppLayout"
import { useDispatch, useSelector } from "react-redux"
import { setCategories, setCategories2 } from "reducers/categoriesReducer"
import MostViewed from "components/home/MostViewed"
import SliderHero from "components/home/SliderHero"
import SliderLower from "components/home/SliderLower"
import Brands from "components/home/Brands"
import {setBrands} from 'reducers/brandsReducer'
import { setSlides } from './../reducers/slidesReducer';
import { setMostVieweddProducts, setRecommendedProducts } from "reducers/productsReducer"
import { setNewProducts, setSmartphones } from './../reducers/productsReducer';
import { getCartItems } from './../reducers/cartReducer';
import {setLang} from 'reducers/LangReducer'
import { MobileCategoryNavStyle } from 'components/mobile-category-nav/MobileCategoryNavStyle';
import Box from 'components/Box';
import Typography  from 'components/Typography';
import Divider from 'components/Divider';
import Accordion from 'components/accordion/Accordion';
import AccordionHeader  from 'components/accordion/AccordionHeader';
import Grid from 'components/grid/Grid';
import Link from "next/link"
import Image from "next/image"

const IndexPage = ({
	items,
	featuredBrands,
	slides,
	featuredCategories,
	mostViewedProducts,
	newProducts,
	smartphones,
	recommendedProducts
}) => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
	const isActive = state?.categories?.categoryNavIsActive

	useEffect(() => {
		dispatch(setCategories(items))
		dispatch(setBrands(featuredBrands))
		dispatch(setSlides(slides))
		dispatch(setCategories2(featuredCategories))
		dispatch(setMostVieweddProducts(mostViewedProducts))
		dispatch(setNewProducts(newProducts))
		dispatch(setSmartphones(smartphones))
		dispatch(setRecommendedProducts(recommendedProducts))
		getCartItems()(dispatch)
		dispatch(setLang(localStorage.getItem('lang')))
	}, [])

	return (
		<main>
			<SliderHero /> {/* slider banner */}
			<TopCategories /> {/* top categories */}
			{/* <TopRatings /> top ratings */}
			<MostViewed /> {/* most viewed */}
			<NewProducts />
			{/* <DiscountedProducts /> Discounted products */}
			<Smartphones /> {/* smartphones */}
			{/* <Banner /> banner */}
			<SliderLower /> {/* slider banner */}
			{/* <SomeCategories /> some categories */}
			<SomeProducts />
			<Brands /> {/* products */}
			<Services /> {/* services worldwide delivsery */}
		</main>
	)
}

IndexPage.layout = AppLayout

export async function getServerSideProps() {
	const [
			categoriesRes,
			featuredBrandsRes,
			slidesRes,
			featuredCategoriesRes,
			mostViewedProductsRes,
			newProductsRes,
			smartphonesRes,
			recommendedProductsRes
		] = await Promise.all([
		fetch("https://api.sdb.uz/dev/v1/category/list"),
		fetch("https://api.sdb.uz/dev/v1/brand/list?featured=1"),
		fetch("https://api.sdb.uz/dev/v1/events/list"),
		fetch("https://api.sdb.uz/dev/v1/category/featured"),
		fetch("https://api.sdb.uz/dev/v1/product/list?sort=views,desc&per_page=9"),
		fetch("https://api.sdb.uz/dev/v1/product/list?sort=id,desc&per_page=9"),
		fetch("https://api.sdb.uz/dev/v1/category/smartfonlar?per_page=12"),
		fetch("https://api.sdb.uz/dev/v1/product/list?type=recommended&per_page=12"),
	])
	const [
			categories,
			featuredBrands,
			slides,
			featuredCategories,
			mostViewedProducts,
			newProducts,
			smartphones,
			recommendedProducts
		] = await Promise.all([
		categoriesRes.json(),
		featuredBrandsRes.json(),
		slidesRes.json(),
		featuredCategoriesRes.json(),
		mostViewedProductsRes.json(),
		newProductsRes.json(),
		smartphonesRes.json(),
		recommendedProductsRes.json(),

	])
	return {
		props: {
			items: categories.categories,
			featuredBrands: featuredBrands?.brands,
			slides: slides?.events,
			featuredCategories: featuredCategories?.categories,
			mostViewedProducts: mostViewedProducts?.products,
			newProducts: newProducts?.products,
			smartphones: smartphones?.products,
			recommendedProducts: recommendedProducts?.products
		},
	}
}

export default IndexPage
