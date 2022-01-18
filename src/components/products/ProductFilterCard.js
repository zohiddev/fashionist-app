import React, {useState} from "react"
import Accordion from "../accordion/Accordion"
import AccordionHeader from "../accordion/AccordionHeader"
import Avatar from "../avatar/Avatar"
import Card from "../Card"
import CheckBox from "../CheckBox"
import Divider from "../Divider"
import FlexBox from "../FlexBox"
import TextField from "../text-field/TextField"
import { H5, H6, Paragraph, SemiSpan } from "../Typography"
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from "react"
import  Link  from 'next/link';

const ProductFilterCard = ({subCats, categoryBrands , categoryAttributes, brandCategories}) => {
	const lang = useSelector(state => state.lang.lang)
	const [brand_ids, setBrand_ids] = useState([])
	const [attr, setAttr] = useState([])
	const router = useRouter()

	const handleBrandIds = (e) => {
		if(e.target.checked){
			setBrand_ids([...brand_ids, e.target.value])
		} else{
			setBrand_ids(brand_ids.filter(item => item !== e.target.value))
		}
	}

	const handleAttr = (e) => {
		if(e.target.checked){
			setAttr([...attr, e.target.value])
		} else{
			setAttr(attr.filter(item => item !== e.target.value))
		}
	}

	useEffect(() => {
		if(router.query.id !== 'products'){
			brand_ids.length === 0 ? delete router.query.brand_ids : router.query.brand_ids = brand_ids.join(',')
			attr.length === 0 ? delete router.query.attr : router.query.attr = attr.join(',')
			router.push(router)
		}
	}, [brand_ids, attr])

	return (
		<Card p="18px 27px 64px 27px" elevation={5}>
			{
				subCats?.length === 0 || subCats === undefined ? null : <><H6 mb="10px">{lang === 'uz' ? 'Kategoriyalar' : 'Категории'}</H6>

				{subCats?.map((item, index) =>
					item.subCategories ? (
						<Accordion key={index} expanded>
							<AccordionHeader
								px="0px"
								py="6px"
								color="text.muted"
								// justifyContent="flex-start"
							>
								<SemiSpan className="cursor-pointer" mr="9px">
									{item?.title}
								</SemiSpan>
							</AccordionHeader>
							{item?.subCategories.map((name,index) => (
								<Paragraph
									className="cursor-pointer"
									fontSize="14px"
									color="text.muted"
									pl="22px"
									py="6px"
									key={index}
								>
									{name}
								</Paragraph>
							))}
						</Accordion>
					) : (
						<Link href={`/products/${item?.slug}`}>
							<a>
								<Paragraph
									className="cursor-pointer"
									fontSize="14px"
									color="text.muted"
									py="6px"
									key={item?.id}
								>
									{lang === 'uz' ? item?.name_uz : item?.name_ru}
								</Paragraph>
							</a>
						</Link>

					)
				)}<Divider my="24px" /></>
			}

			{
				brandCategories?.length === 0 || brandCategories === undefined ? null : <><H6 mb="10px">{lang === 'uz' ? 'Kategoriyalar' : 'Категории'}</H6>

				{brandCategories?.map((item, index) =>
					item.subCategories ? (
						<Accordion key={index} expanded>
							<AccordionHeader
								px="0px"
								py="6px"
								color="text.muted"
								// justifyContent="flex-start"
							>
								<SemiSpan className="cursor-pointer" mr="9px">
									{item?.title}
								</SemiSpan>
							</AccordionHeader>
							{item?.subCategories.map((name,index) => (
								<Paragraph
									className="cursor-pointer"
									fontSize="14px"
									color="text.muted"
									pl="22px"
									py="6px"
									key={index}
								>
									{name}
								</Paragraph>
							))}
						</Accordion>
					) : (
						<Link href={`/products/${item?.slug}`}>
							<a>
								<Paragraph
									className="cursor-pointer"
									fontSize="14px"
									color="text.muted"
									py="6px"
									key={item?.id}
								>
									{lang === 'uz' ? item?.c_uz || item?.name_uz : item?.c_ru || item?.name_ru}
								</Paragraph>
							</a>
						</Link>

					)
				)}<Divider my="24px" /></>
			}

			{/* <H6 mb="16px">Price Range</H6>
			<FlexBox justifyContent="space-between" alignItems="center">
				<TextField placeholder="0" type="number" fullwidth />
				<H5 color="text.muted" px="0.5rem">
					-
				</H5>
				<TextField placeholder="250" type="number" fullwidth />
			</FlexBox> */}

			{
				categoryBrands ? <>

				<H6 mb="16px">{lang === 'uz' ? 'Brandlar' : 'Бренды'}</H6>
				{categoryBrands?.map((item, index) => (
					<CheckBox
						key={index}
						name={lang === 'uz' ? item?.name_uz : item?.name_ru}
						value={item?.id}
						color="secondary"
						label={<SemiSpan color="inherit">{lang === 'uz' ? item?.name_uz : item?.name_ru} &nbsp; {item?.count}</SemiSpan>}
						my="10px"
						onChange={(e) => {
							handleBrandIds(e)
						}}
					/>
				))}</> : null
			}

			{
				categoryAttributes ?

				categoryAttributes.map(attribute => {
					return (
						<>
							<Divider my="24px" />
							<H6 mb="16px">{lang === 'uz' ? attribute.name_uz : attribute.name_ru}</H6>
							{attribute?.values?.map((item, index) => (
								<CheckBox
									key={index}
									name={lang === 'uz' ? item?.value_uz : item?.value_ru}
									value={item?.value_id}
									color="secondary"
									label={<SemiSpan color="inherit">{item?.value_uz}</SemiSpan>}
									my="10px"
									onChange={(e) => {
										handleAttr(e)
									}}
								/>
							))}
						</>
					)
				})

				: null
			}


		</Card>
	)
}

export default ProductFilterCard
