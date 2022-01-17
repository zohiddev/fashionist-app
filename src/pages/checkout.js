import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";
import Grid from "../components/grid/Grid";
import CheckoutNavLayout from "../components/layout/CheckoutNavLayout";
import Container from './../components/Container';
import  CheckoutSummary2  from 'components/checkout/CheckoutSummary2';
import  CheckoutForm2  from 'components/checkout/CheckoutForm2';

const Checkout = () => {
  return (
	  <Container mt='50px' mb='50px'>
		<Grid container flexWrap="wrap-reverse" spacing={6}>
			<Grid item lg={8} md={8} xs={12}>
				<CheckoutForm2 />
			</Grid>
			<Grid item lg={4} md={4} xs={12}>
				<CheckoutSummary />
			</Grid>
		</Grid>
	</Container>
  );
};

Checkout.layout = CheckoutNavLayout;

export default Checkout;
