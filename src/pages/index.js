import React, { useEffect, useState } from 'react'
import Services from 'components/home/Services'
import Smartphones from 'components/home/Smartphones'
import SomeProducts from 'components/home/SomeProducts'
import TopCategories from 'components/home/TopCategories'
import AppLayout from 'components/layout/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { setCategories, setCategories2 } from 'reducers/categoriesReducer'
import MostViewed from 'components/home/MostViewed'
import SliderHero from 'components/home/SliderHero'
import SliderLower from 'components/home/SliderLower'
import Brands from 'components/home/Brands'
import { setBrands } from 'reducers/brandsReducer'
import { setSlides } from './../reducers/slidesReducer'
import {
	setMostVieweddProducts,
	setRecommendedProducts,
} from 'reducers/productsReducer'
import { setNewProducts, setSmartphones } from './../reducers/productsReducer'
import { getCartItems } from './../reducers/cartReducer'
import { setLang } from 'reducers/LangReducer'
import Router from 'next/router'

const IndexPage = ({
	items,
	featuredBrands,
	slides,
	// featuredCategories,
	mostViewedProducts,
	// newProducts,
	smartphones,
	recommendedProducts,
}) => {
	const dispatch = useDispatch()
	const state = useSelector((state) => state)
	const isActive = state?.categories?.categoryNavIsActive
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		dispatch(setCategories(items))
		dispatch(setBrands(featuredBrands))
		dispatch(setSlides(slides))
		dispatch(setMostVieweddProducts(mostViewedProducts))
		dispatch(setSmartphones(smartphones))
		dispatch(setRecommendedProducts(recommendedProducts))
		getCartItems()(dispatch)
		dispatch(setLang(localStorage.getItem('lang')))
	}, [])

	return (
		<main>
			<SliderHero slides={slides} />
			<MostViewed mostViewedProducts={mostViewedProducts} />
			<Smartphones smartphones={smartphones} />
			<SliderLower slides={slides} />
			<SomeProducts recommendedProducts={recommendedProducts} />
			<Services />
		</main>
	)
}

IndexPage.layout = AppLayout

export async function getStaticProps() {
	const [
		categoriesRes,
		featuredBrandsRes,
		slidesRes,
		mostViewedProductsRes,
		smartphonesRes,
		recommendedProductsRes,
	] = await Promise.all([
		fetch('https://api.sdb.uz/dev/v1/category/list'),
		fetch('https://api.sdb.uz/dev/v1/brand/list?featured=1'),
		fetch('https://api.sdb.uz/dev/v1/events/list'),
		fetch(
			'https://api.sdb.uz/dev/v1/product/list?sort=views,desc&per_page=9'
		),
		fetch('https://api.sdb.uz/dev/v1/category/smartfonlar?per_page=12'),
		fetch(
			'https://api.sdb.uz/dev/v1/product/list?type=recommended&per_page=12'
		),
	])
	const [
		categories,
		featuredBrands,
		slides,
		mostViewedProducts,
		smartphones,
		recommendedProducts,
	] = await Promise.all([
		categoriesRes.json(),
		featuredBrandsRes.json(),
		slidesRes.json(),
		mostViewedProductsRes.json(),
		smartphonesRes.json(),
		recommendedProductsRes.json(),
	])
	return {
		props: {
			items: categories.categories,
			featuredBrands: featuredBrands?.brands,
			slides: slides?.events,
			mostViewedProducts: mostViewedProducts?.products,
			smartphones: smartphones?.products,
			recommendedProducts: recommendedProducts?.products,
		},
		revalidate: 10,
	}
}

export default IndexPage
