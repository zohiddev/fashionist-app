import Box from "components/Box"
import Image from "components/Image"
import Link from "next/link"
import React from "react"
import Button from "../buttons/Button"
import IconButton from "../buttons/IconButton"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import Typography from "../Typography"
import { StyledProductCard7 } from "./ProductCardStyle"
import { useDispatch } from 'react-redux';
import { addToCart, removeToCart, deleteToCart } from 'reducers/cartReducer';

const ProductCard7 = ({ lang, product, ...props }) => {
	const dispatch  = useDispatch()

	const handleDeleteBtn = (id) => {
		deleteToCart(id)(dispatch)
	}

	const handleRemoveBtn = (id) => {
		removeToCart(id)(dispatch)
	}

	const handleAddBtn = (id) => {
		let addedItem = {};
		addedItem.qty = 1;
		addedItem.product_id = Number(id);
		addToCart(addedItem)(dispatch)
	}

	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	return (
		<StyledProductCard7 {...props}>
			<Image
				loader={myLoader}
				src={product?.image}
				size={140}
				display="block"
				alt={product?.name_uz}
			/>
			<FlexBox
				className="product-details"
				flexDirection="column"
				justifyContent="space-between"
				minWidth="0px"
				width="100%"
			>
				<Link href={`/product/${product?.slug}`}>
					<a>
						<Typography
							className="title"
							fontWeight="600"
							fontSize="18px"
							mb="0.5rem"
						>
							{lang === 'uz' ? product?.name_uz : product?.name_ru}
						</Typography>
					</a>
				</Link>
				<Box position="absolute" right="1rem" top="1rem">
					<IconButton
						padding="4px"
						ml="12px"
						size="small"
						onClick={() =>  handleDeleteBtn(product?.product_id)}
					>
						<Icon size="1.25rem">close</Icon>
					</IconButton>
				</Box>

				<FlexBox
					// width="100%"
					justifyContent="space-between"
					alignItems="flex-end"
				>
					<FlexBox flexWrap="wrap" alignItems="center">
						<Typography color="gray.600" mr="0.5rem">

							{Math.ceil(product?.price).toLocaleString()} UZS x {product?.qty}
						</Typography>
						<Typography
							fontWeight={600}
							color="primary.main"
							mr="1rem"
						>
							{Math.ceil(product?.price * product?.qty).toLocaleString()} UZS
						</Typography>
					</FlexBox>

					<FlexBox alignItems="center">
						<Button
							variant="outlined"
							color="primary"
							padding="5px"
							size="none"
							borderColor="primary.light"
							onClick={() => handleRemoveBtn(product?.product_id)}
							disabled={product?.qty === 1}
						>
							<Icon variant="small">minus</Icon>
						</Button>
						<Typography
							mx="0.5rem"
							fontWeight="600"
							fontSize="15px"
						>
							{product?.qty}
						</Typography>
						<Button
							variant="outlined"
							color="primary"
							padding="5px"
							size="none"
							borderColor="primary.light"
							onClick={() => handleAddBtn(product?.product_id)}
						>
							<Icon variant="small">plus</Icon>
						</Button>
					</FlexBox>
				</FlexBox>
			</FlexBox>
		</StyledProductCard7>
	)
}

export default ProductCard7
