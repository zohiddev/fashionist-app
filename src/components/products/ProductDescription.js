import React from "react"
import Box from "../Box"
import Typography, { H3 } from "../Typography"
import { useSelector } from 'react-redux';

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
									<>
										{lang === 'uz' ? item?.attribute_uz : item?.attribute_ru} : {lang === 'uz' ? item?.value_uz : item?.value_ru} <br/>
									</>
								)
							})
						}
					</Typography>
				</Box> :
				<Box>
					{/* <H3 mb="1rem">{lang === 'uz' ? 'Xususiyatlar' : 'Функции'}:</H3> */}
					<Typography>
						{desc}
					</Typography>
				</Box>
			}
		</>
	)
}

export default ProductDescription
