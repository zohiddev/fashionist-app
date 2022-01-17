import navigations from "data/navigations"
import React from "react"
import CategoryMenuItem from "./category-menu-item/CategoryMenuItem"
import { StyledCategoryDropdown } from "./CategoryDropdownStyle"
import MegaMenu1 from "./mega-menu/MegaMenu1"
import MegaMenu2 from "./mega-menu/MegaMenu2"
import { useSelector } from "react-redux"

const CategoryDropdown = ({ open, position, items }) => {
	const megaMenu = {
		MegaMenu1,
		MegaMenu2,
	}
	const state = useSelector(state => state.categories.navbarLinks)
	const lang = useSelector(state => state.lang.lang)
	return (
		<StyledCategoryDropdown open={open} position={position}>
			{state.map((item) => {
				let MegaMenu = MegaMenu1
				// console.log(item)
				return (
					<CategoryMenuItem
						title={lang === 'uz' ? item?.name_uz : item?.name_ru}
						href={item?.slug}
						icon={item?.image?.replace(/https:\/\/api.sdb.uz/gi, "http://api.sdb.uz")}
						caret={!!item?.children}
						key={item?.id}
					>
						<MegaMenu data={item?.children} lang={lang}/>
					</CategoryMenuItem>
				)
			})}
		</StyledCategoryDropdown>
	)
}

CategoryDropdown.defaultProps = {
	position: "absolute",
}



export default CategoryDropdown

export async function getServerSideProps(){
	const res = await fetch('http://89.223.122.61:3333/dev/v1/category/list')
	const data = await res.json()
	// console.log(res)
	return {
		props:{
			items: data
		}
	}
}
