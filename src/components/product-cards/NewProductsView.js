import HoverBox from "components/HoverBox"
import { H4 } from "components/Typography"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const NewProductsView = (product) => {

	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	return (
		<Link href={'product/'+product?.slug}>
			<a>
				<HoverBox borderRadius={8} mb="0.5rem">
					<Image
						loader={myLoader}
						src={product?.images[0]}
						width={100}
						height={100}
						layout="responsive"
						alt={product?.name_uz}
						quality="85"
					/>
				</HoverBox>
				{/* <H4 fontWeight="600" fontSize="14px" mb="0.25rem">
					{product?.name_uz}
				</H4> */}
				<H4
					className="title"
					fontSize="14px"
					textAlign="left"
					fontWeight="600"
					color="text.secondary"
					mb="10px"
					title={product?.name_uz}
				>
					{product?.name_uz}
				</H4>
				<H4 fontWeight="600" fontSize="14px" color="primary.main">
					{Math.ceil(product?.price).toLocaleString()}
					<span> UZS</span>
				</H4>
			</a>
		</Link>
	)
}

export default NewProductsView
