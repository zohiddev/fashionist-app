import React from "react"
import Box from "../Box"
import Typography, { H3 } from "../Typography"
import { useSelector } from 'react-redux';
import Divider from './../Divider';

const ProductDescription = ({desc, attributes}) => {
	const lang = useSelector(state => state.lang.lang)
	return (
		<>
			{
				desc === undefined ?
				<Box>
					{/* <H3 mb="1rem">{lang === 'uz' ? 'Xususiyatlar' : 'Функции'}:</H3> */}
					<Typography>
							{
								attributes?.map((item, index) => {
									return (
										<div className="product_attr">
											<span className="attribute">
												{lang === 'uz' ? item?.attribute_uz : item?.attribute_ru} :
											</span>  <Divider/>
											<span className="value">
												{lang === 'uz' ? item?.value_uz : item?.value_ru}
											</span>
										</div>
									)
								})
							}
					</Typography>
				</Box> :
				<Box>
					{/* <H3 mb="1rem">{lang === 'uz' ? 'Xususiyatlar' : 'Функции'}:</H3> */}
					<Typography>
						{/* {desc} */}
						<span className='product_desc'  dangerouslySetInnerHTML={{ __html: desc}}>

						</span>
					</Typography>
				</Box>
			}
		</>
	)
}

export default ProductDescription
