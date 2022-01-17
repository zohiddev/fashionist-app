import { format } from "date-fns"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import Box from "../Box"
import IconButton from "../buttons/IconButton"
import { Chip } from "../Chip"
import Hidden from "../hidden/Hidden"
import Icon from "../icon/Icon"
import TableRow from "../TableRow"
import Typography, { H5, Small } from "../Typography"

const OrderRow = ({ item, lang }) => {
	const router = useRouter()
	const statuses = {
		0: "secondary",
		1: "primary",
		2: "success",
		3: "success",
		4: "danger",
	}


// 0-pending,1-processing, 2-ontheway,3-delivered,4-canceled

	const getColor = (status) => {
		return statuses[status] ?? ""
	}

	const statusString = (status) => {
		switch (status) {
			case 0:
				return lang === 'uz' ? 'Kutilmoqda' : 'В ожидании'

			case 1:
				return lang === 'uz' ? 'Jarayonda' : 'В Процессе'

			case 2:
				return lang === 'uz' ? 'Yo`lda' : 'В дороге'

			case 3:
				return lang === 'uz' ? 'Yetkazib berildi' : 'Доставлено'

			case 4:
				return lang === 'uz' ? 'Bekor qilingan' : 'Отменено'

			default:
				return ''
		}
	}

	const handleOrderClick = (id) => {
		router.push({pathname: `/orders/${item?.order_id}`, query: {slug: id}})
	}
	return (
		<Link href={`/orders/${item?.order_id}`} >
			<TableRow
				as="a"
				href={`/orders/${item?.order_id}`}
				my="1rem"
				padding="6px 18px"
				onClick={() => handleOrderClick(item?.id)}
				>
				<H5 m="6px" textAlign="left">
					{item?.order_id}
				</H5>
				<Box m="6px">
					<Chip
						p="0.25rem 1rem"
						bg={`${getColor(item?.status)}.light`}
					>
						<Small color={`${getColor(item?.status)}.main`}>
							{
								statusString(item?.status)
							}
						</Small>
					</Chip>
				</Box>
				<Typography className="flex-grow pre" m="6px" textAlign="left">
					{format(new Date(`${item?.updated_at}`), "MMM dd, yyyy")}
					{/* {item?.updated_at?.formatToParts()} */}
				</Typography>
				<Typography m="6px" textAlign="left">
					{item?.total_price?.toLocaleString()}
				</Typography>

				<Hidden flex="0 0 0 !important" down={769}>
					<Typography textAlign="center" color="text.muted">
						<IconButton size="small">
							<Icon variant="small" defaultcolor="currentColor">
								arrow-right
							</Icon>
						</IconButton>
					</Typography>
				</Hidden>
			</TableRow>
		</Link>
	)
}

export default OrderRow
