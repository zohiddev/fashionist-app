import AppStore from "components/AppStore";
import Image from "components/Image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { getTheme } from "../../utils/utils";
import Box from "../Box";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import Icon from "../icon/Icon";
import Typography from "../Typography";
import { useSelector } from "react-redux";
import Divider from "./../Divider";
import useWindowSize from "./../../hooks/useWindowSize";
import MyCompany from "components/MyCompany";

const StyledLink = styled.a`
    position: relative;
    display: block;
    padding: 0.3rem 0rem;
    color: #fff;
    cursor: pointer;
    border-radius: 4px;
    :hover {
        color: #121212;
    }
`;

const Footer = () => {
    const lang = useSelector((state) => state.lang.lang);
    const windowSize = useWindowSize();

    const aboutLinks = [
        {
            id: 1,
            name_uz: "To’lov turlari",
            name_ru: "Виды оплаты",
            slug: "/page/tolov-turlari",
        },
        {
            id: 2,
            name_uz: "Yetkazib berish xizmati haqida",
            name_ru: "О службе доставки",
            slug: "/page/yetkazib-berish",
        },
        {
            id: 3,
            name_uz: "Biz haqimizda",
            name_ru: "О нас",
            slug: "/page/biz-haqimizda",
        },
        {
            id: 4,
            name_uz: "Aksiyalar va qaynoq chegirmalar",
            name_ru: "Акции и горячие скидки",
            slug: "/page/aksiyalar",
        },
    ];

    return (
        <footer>
            <Box bg='#469AE0'>
                <Container p='1rem' color='white'>
                    <Box overflow='hidden'>
                        <Grid container spacing={6}>
                            <Grid
                                item
                                lg={4}
                                md={4}
                                sm={6}
                                xs={12}
                                alignSelf='center'
                            >
                                <FlexBox
                                    justifyContent='space-around'
                                    alignItems='center'
                                    flexDirection={
                                        windowSize <= 768 ? "column" : "row"
                                    }
                                >
                                    <Link href='/'>
                                        <a>
                                            <Image
                                                src='/logo-white.png'
                                                width='150px'
                                                height='150px'
                                                layout='fill'
                                                alt='logo'
                                                style={{ objectFit: "contain" }}
                                            />
                                        </a>
                                    </Link>
                                </FlexBox>
                            </Grid>

                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <Typography
                                    fontSize='25px'
                                    fontWeight='600'
                                    mb='1.25rem'
                                    lineHeight='1'
                                >
                                    {lang === "uz"
                                        ? "Ma’lumotlar"
                                        : "Информация"}
                                </Typography>

                                <div>
                                    {aboutLinks.map((item, ind) => (
                                        <Link href={item?.slug} key={ind}>
                                            <StyledLink>
                                                {lang === "uz"
                                                    ? item?.name_uz
                                                    : item?.name_ru}
                                            </StyledLink>
                                        </Link>
                                    ))}
                                </div>
                            </Grid>

                            <Grid item lg={4} md={4} sm={6} xs={12}>
                                <Typography
                                    fontSize='25px'
                                    fontWeight='600'
                                    mb='1.25rem'
                                    lineHeight='1'
                                >
                                    {lang === "uz" ? "Aloqa" : "Коммуникация"}
                                </Typography>
                                <Typography py='0.3rem' color='white'>
                                    {lang === "uz"
                                        ? "Xorazm, Urganch Shahar, TATUUF"
                                        : "Хорезм, город Ургенч TATUUF"}
                                </Typography>
                                <Typography py='0.3rem' color='white'>
                                    Email: info@fashionista.uz
                                </Typography>
                                <Typography py='0.3rem' mb='1rem' color='white'>
                                    {lang === "uz"
                                        ? "Telefon raqam"
                                        : "Телефонный номер"}
                                    : +998 99 999 99 99
                                </Typography>

                                {windowSize <= 768 ? null : (
                                    <FlexBox className='flex' mx='-5px'>
                                        {iconList.map((item) => (
                                            <a
                                                href={item.url}
                                                target='_blank'
                                                rel='noreferrer noopenner'
                                                key={item.iconName}
                                            >
                                                <Box
                                                    m='5px'
                                                    size='small'
                                                    p='10px'
                                                    bg='rgba(0,0,0,0.2)'
                                                    borderRadius='50%'
                                                >
                                                    <Icon
                                                        size='12px'
                                                        defaultcolor='auto'
                                                    >
                                                        {item.iconName}
                                                    </Icon>
                                                </Box>
                                            </a>
                                        ))}
                                    </FlexBox>
                                )}
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                <Divider />
                <Container>
                    <FlexBox
                        alignItems='center'
                        justifyContent='space-between'
                        py='24px'
                    >
                        <Typography
                            fontSize='18px'
                            fontWeight='600'
                            lineHeight='1'
                            textAlign='center'
                            color='#fff'
                        >
                            Copyright © Fashionista, {new Date().getFullYear()}
                        </Typography>
                        {/* <MyCompany /> */}
                    </FlexBox>
                </Container>
            </Box>
        </footer>
    );
};

const customerCareLinks = [
    "Help Center",
    "How to Buy",
    "Track Your Order",
    "Corporate & Bulk Purchasing",
    "Returns & Refunds",
];

const iconList = [
    {
        iconName: "telegram",
        url: "https://t.me/samsung_dehkonbozor1",
    },
    {
        iconName: "instagram",
        url: "https://www.instagram.com/samsung_dehkonbozor/",
    },
    {
        iconName: "youtube",
        url: "https://www.instagram.com/samsung_dehkonbozor/",
    },
];

export default Footer;
