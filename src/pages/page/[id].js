import DashboardLayout from "components/layout/CustomerDashboardLayout"
import Typography, { H1, H5, Small } from "components/Typography"
import { format } from "date-fns"
import Link from "next/link"
import React, {useEffect, useState} from "react"
import Container from './../../components/Container';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router"

const Page = ({data}) => {
	const dispatch = useDispatch()
	const state = useSelector(state => state)
	const lang = useSelector(state => state.lang.lang)
	const router = useRouter()

	console.log(data)

	return (
		<Container mt='50px' mb='50px'>
			<Typography>
				<H1>{lang === 'uz' ? data?.page?.title_uz : data?.page?.title_ru}</H1>
			</Typography>

			{lang === 'uz' ? data?.page?.content_uz : data?.page?.content_ru}
		</Container>
	)
}


Page.layout = DashboardLayout



export async function getServerSideProps({ params}) {
		const res = await fetch(
			`https://api.sdb.uz/dev/v1/page/${params.id}`
		)
		const data = await res.json()
		if(data?.page){
			return {
				props: {
					data: data,
				},
			}
		}else{
			return {
                notFound: true
            };
		}

}

export default Page


