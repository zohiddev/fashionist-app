import React from "react"
import ReactPaginate from "react-paginate"
import Button from "../buttons/Button"
import Icon from "../icon/Icon"
import { StyledPagination } from "./PaginationStyle"
import { useRouter } from 'next/router';

const Pagination = ({
	pageCount,
	marginPagesDisplayed,
	pageRangeDisplayed,
	onChange,
	...props
}) => {
	const router = useRouter()
	const handlePageChange = async (page) => {
		if (onChange){
			onChange(page.selected)
		}
			router.query.page = page.selected + 1
			router.push(router)
	}

	return (
		<StyledPagination {...props}>
			<ReactPaginate
				previousLabel={
					<Button
						className="control-button"
						color="primary"
						overflow="hidden"
						height="auto"
						padding="6px"
						borderRadius="50%"
					>
						<Icon defaultcolor="currentColor" variant="small">
							chevron-left
						</Icon>
					</Button>
				}
				nextLabel={
					<Button
						className="control-button"
						color="primary"
						overflow="hidden"
						height="auto"
						padding="6px"
						borderRadius="50%"
					>
						<Icon defaultcolor="currentColor" variant="small">
							chevron-right
						</Icon>
					</Button>
				}
				breakLabel={
					<Icon defaultcolor="currentColor" variant="small">
						triple-dot
					</Icon>
				}
				pageCount={pageCount}
				marginPagesDisplayed={marginPagesDisplayed}
				pageRangeDisplayed={pageRangeDisplayed}
				onPageChange={handlePageChange}
				containerClassName="pagination"
				subContainerClassName="pages pagination"
				activeClassName="active"
				disabledClassName="disabled"
			/>
		</StyledPagination>
	)
}

export default Pagination
