import SmartphonesView from "components/product-cards/SmartphonesView";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "../Box";
import CategorySectionHeader from "../CategorySectionHeader";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Grid from "../grid/Grid";
import useWindowSize from "./../../hooks/useWindowSize";

const Smartphones = ({ smartphones }) => {
    const state = useSelector((state) => state.products);
    const lang = useSelector((state) => state.lang.lang);
    const window = useWindowSize();

    return (
        <Container mb={window < 568 ? "1.75rem" : "3.75rem"}>
            <FlexBox>
                <Box flex='1 1 0' minWidth='0px'>
                    <CategorySectionHeader
                        title={
                            lang === "uz"
                                ? "Ayollar kiyimlari"
                                : "Женская одежда"
                        }
                        seeMoreLink='/products/smartfonlar'
                    />

                    <Grid container spacing={6}>
                        {smartphones?.map((product, ind) => (
                            <Grid item lg={3} md={4} sm={6} xs={6} key={ind}>
                                <SmartphonesView
                                    hoverEffect
                                    product={product}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </FlexBox>
        </Container>
    );
};

export default Smartphones;
