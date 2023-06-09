import React, { useEffect, useState } from "react";
import Services from "components/home/Services";
import Smartphones from "components/home/Smartphones";
import SomeProducts from "components/home/SomeProducts";
import AppLayout from "components/layout/AppLayout";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setCategories2 } from "reducers/categoriesReducer";
import MostViewed from "components/home/MostViewed";
import SliderHero from "components/home/SliderHero";
import SliderLower from "components/home/SliderLower";
import { setBrands } from "reducers/brandsReducer";
import { setSlides } from "./../reducers/slidesReducer";
import {
    setMostVieweddProducts,
    setRecommendedProducts,
} from "reducers/productsReducer";
import { setSmartphones } from "./../reducers/productsReducer";
import { getCartItems } from "./../reducers/cartReducer";
import { setLang } from "reducers/LangReducer";

const IndexPage = ({
    items,
    featuredBrands,
    slides,
    // featuredCategories,
    mostViewedProducts,
    newProducts,
    smartphones,
    // recommendedProducts,
}) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const isActive = state?.categories?.categoryNavIsActive;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            dispatch(getCartItems());
        }
        dispatch(setCategories(items));
        dispatch(setBrands(featuredBrands));
        dispatch(setSlides(slides));
        dispatch(setMostVieweddProducts(mostViewedProducts));
        dispatch(setSmartphones(smartphones));
        dispatch(setRecommendedProducts(newProducts));
        dispatch(setLang(localStorage.getItem("lang")));
    }, []);

    return (
        <main>
            <SliderHero slides={slides} />
            <MostViewed mostViewedProducts={mostViewedProducts} />
            {/* <Smartphones smartphones={smartphones} /> */}
            <SliderLower slides={slides} />
            <SomeProducts recommendedProducts={newProducts} />
            <Services />
        </main>
    );
};

IndexPage.layout = AppLayout;

export async function getStaticProps() {
    const [
        categoriesRes,
        featuredBrandsRes,
        slidesRes,
        mostViewedProductsRes,
        smartphonesRes,
        newProductsRes,
    ] = await Promise.all([
        fetch("https://ecommerce.main-gate.appx.uz/dev/v1/category/list"),
        fetch(
            "https://ecommerce.main-gate.appx.uz/dev/v1/brand/list?featured=1"
        ),
        fetch("https://ecommerce.main-gate.appx.uz/dev/v1/events/list"),
        fetch(
            "https://ecommerce.main-gate.appx.uz/dev/v1/product/list?sort=views,desc&per_page=9"
        ),
        fetch(
            "https://ecommerce.main-gate.appx.uz/dev/v1/category/ayollar-kiyimi?per_page=12"
        ),
        fetch(
            "https://ecommerce.main-gate.appx.uz/dev/v1/product/list?type=new&per_page=12"
        ),
    ]);
    const [
        categories,
        featuredBrands,
        slides,
        mostViewedProducts,
        // smartphones,
        newProducts,
    ] = await Promise.all([
        categoriesRes.json(),
        featuredBrandsRes.json(),
        slidesRes.json(),
        mostViewedProductsRes.json(),
        // smartphonesRes.json(),
        newProductsRes.json(),
    ]);
    return {
        props: {
            items: categories.categories,
            featuredBrands: featuredBrands?.brands,
            slides: slides?.events,
            mostViewedProducts: mostViewedProducts?.products,
            // smartphones: smartphones?.products,
            newProducts: newProducts?.products,
        },
        revalidate: 10,
    };
}

export default IndexPage;
