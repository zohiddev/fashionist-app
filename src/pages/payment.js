import React from "react";
import Grid from "../components/grid/Grid";
import CheckoutNavLayout from "../components/layout/CheckoutNavLayout";
import PaymentForm from "../components/payment/PaymentForm";
import PaymentSummary from "../components/payment/PaymentSummary";
import Container from 'components/Container';

const Checkout = () => {
  return (
	<Container mt='50px' mb='50px'>
		<Grid container flexWrap="wrap-reverse" spacing={6}>
			<Grid item lg={8} md={8} xs={12}>
				<PaymentForm />
			</Grid>
			<Grid item lg={4} md={4} xs={12}>
				<PaymentSummary />
			</Grid>
		</Grid>
	</Container>
  );
};

Checkout.layout = CheckoutNavLayout;

export default Checkout;
