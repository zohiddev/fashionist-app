import DashboardLayout from "components/layout/CustomerDashboardLayout"
import Typography, { H1} from "components/Typography"
import React from "react"
import Container from './../../components/Container';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useRouter } from "next/router"

const Page = ({data}) => {
	const lang = useSelector(state => state.lang.lang)
	const router = useRouter()

	return (
		<Container mt='50px' mb='50px'>
			<Typography>
				<H1>{lang === 'uz' ? data?.page?.title_uz : data?.page?.title_ru}</H1>
			</Typography>

			<div dangerouslySetInnerHTML={{ __html: lang === 'uz' ? data?.page?.content_uz : data?.page?.content_ru }}>

			</div>


		</Container>
	)
}

Page.layout = DashboardLayout

export async function getServerSideProps({params}) {
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


