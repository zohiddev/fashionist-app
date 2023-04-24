import React from "react";
import Container from "components/Container";
import Typography, { H4, H3 } from "components/Typography";
import { useSelector } from "react-redux";
import Box from "../components/Box";
import Card from "../components/Card";
import Link from "next/link";
import HoverBox from "../components/HoverBox";
import Image from "next/image";
import FlexBox from "../components/FlexBox";
import Grid from "components/grid/Grid";
import Accordion from "components/accordion/Accordion";
import AccordionHeader from "components/accordion/AccordionHeader";

export default function Category({ data }) {
    const state = useSelector((state) => state);
    const lang = state?.lang?.lang;
    const myLoader = ({ src, width, quality }) => {
        return `${src}?w=${width}&q=${quality || 75}`;
    };
    return (
        <Container mt='30px' mb='30px'>
            <Typography fontSize='18px' mb='20px'>
                {lang === "uz" ? "Tovarlarning katalogi" : "Каталог товаров"}
            </Typography>

            {data?.categories?.map((item, ind) => (
                <Accordion key={ind}>
                    <AccordionHeader px='0px' py='10px'>
                        <FlexBox alignItems='center'>
                            <Image
                                quality='85'
                                loader={myLoader}
                                src={item?.image}
                                layout='fixed'
                                alt={item?.name_uz}
                                width={"30px"}
                                height={"30px"}
                            />
                            <Typography
                                fontWeight='600'
                                fontSize='18px'
                                ml='10px'
                            >
                                {lang === "uz" ? item?.name_uz : item?.name_ru}
                            </Typography>
                        </FlexBox>
                    </AccordionHeader>

                    <Box pl='40px' mb='2rem' mt='0.5rem'>
                        <Grid spacing={5}>
                            {item?.children?.map((el, ind) => (
                                <Grid lg={1} md={2} sm={3} xs={4} key={ind}>
                                    <Link href={"/products/" + el?.slug}>
                                        <a>
                                            <H3 mb='5px' fontSize='15px'>
                                                {lang === "uz"
                                                    ? el?.name_uz
                                                    : el?.name_ru}
                                            </H3>
                                        </a>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Accordion>
            ))}
        </Container>
    );
}

export async function getServerSideProps() {
    const res = await fetch(
        `https://ecommerce.main-gate.appx.uz/dev/v1/category/list`
    );
    const data = await res.json();
    return {
        props: {
            data: data,
        },
    };
}
