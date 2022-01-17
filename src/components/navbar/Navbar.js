import Badge from "components/badge/Badge"
import Box from "components/Box"
import { StyledCategoryMenuItem } from "components/categories/category-menu-item/CategoryMenuItemStyle"
import MenuItem from "components/MenuItem"
import navbarNavigations from "data/navbarNavigations"
import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-scroll"
import { justifyContent } from "styled-system"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import Button from "../buttons/Button"
import Categories from "../categories/Categories"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import NavLink from "../nav-link/NavLink"
import Typography, { Span, H3 } from "../Typography"
import StyledNavbar from "./NavbarStyle"
import Grid from "components/grid/Grid"

const Navbar = ({ navListOpen }) => {
	const [selected, setSelected] = React.useState([]);
	const [position, setPosition] = React.useState(0);
	const isItemSelected = (id) => !!selected.find((el) => el === id);

	const handleClick = (id) => ({ getItemById, scrollToItem }) => {
		const itemSelected = isItemSelected(id);
		setSelected((currentSelected) => itemSelected ? currentSelected.filter((el) => el !== id) : currentSelected.concat(id))
	}

	const categories = useSelector(state => state.categories.navbarLinks)
	const [is_hovered, setHovered] = React.useState(false)
	const [hoveredCategory, setHoveredCategory] = React.useState([])
	const lang = useSelector(state => state.lang.lang)
	const mouseIn = (category, event) => {
		setHovered(true)
		setHoveredCategory(category)
	}
	const mouseOut = (event) => setHovered(false)

	return (
		<StyledNavbar>
			<Container>
				<ScrollMenu
					onWheel={onWheel}
					LeftArrow={() => <Arrow side="left" />}
					RightArrow={() => <Arrow side="right" />}
				>
					{categories?.map((category) => (
						<Card
							mouseIn={mouseIn}
							mouseOut={mouseOut}
							key={category.id}
							itemId={category.id}
							category={category}
							lang={lang}
							onClick={handleClick(category.id)}
							selected={isItemSelected(category.id)}
						/>
					))}
				</ScrollMenu>

				<CategoryDetails
					is_hovered={is_hovered}
					hoveredCategory={hoveredCategory}
					mouseIn={mouseIn}
					mouseOut={mouseOut}
					lang={lang}
				/>
			</Container>
		</StyledNavbar>
	)
}

export default Navbar

function onWheel(apiObj, ev) {
	const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

	if (isThouchpad) {
		ev.stopPropagation();
		return;
	}

	if (ev.deltaY < 0) {
		apiObj.scrollNext();
	} else if (ev.deltaY > 0) {
		apiObj.scrollPrev();
	}
}

const Card = ({ onClick, mouseIn, mouseOut, category, lang }) => {
	const visibility = React.useContext(VisibilityContext)

	return (
		<div
			onMouseEnter={(event) => mouseIn(category, event)}
			onMouseLeave={mouseOut}
			onClick={() => onClick(visibility)}
			tabIndex={0}
			className="category_swipe_item">

			<StyledCategoryMenuItem>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',

					}}
				>
					{category.image && <img src={category.image?.replace(/https:\/\/api.sdb.uz/gi, "http://api.sdb.uz")} alt=""/>}
					<div className="title" style={{ padding: '20px', lineHeight: 1.2 }}>{lang === 'uz' ? category[`name_${'uz'}`] : category[`name_${'ru'}`]}</div>
					<Icon variant="small" style={{ display: 'flex', alignItems: 'center'}}>chevron-down</Icon>
				</div>
			</StyledCategoryMenuItem>
		</div>
	)
}

const Arrow = ({ side='left' }) => {
	const { isLastItemVisible, isFirstItemVisible, scrollNext, scrollPrev } = React.useContext(VisibilityContext);

	return (
		<div
			className="arrow_button_round"
			onClick={()=> {
				if(side==='left')
					!isFirstItemVisible && scrollPrev()
				else
					!isLastItemVisible && scrollNext()

				console.log('qwafdc')
			}}
		>
			<Icon variant="small">{`chevron-${side}`}</Icon>
		</div>
	)
}

const CategoryDetails = ({ is_hovered, hoveredCategory, mouseIn, mouseOut, lang }) => (
	<div
		onMouseEnter={(event) => mouseIn(hoveredCategory, event)}
		onMouseLeave={mouseOut}
		className="wrap_cat_banner"
		style={{ display: is_hovered ? 'block' : 'none' }}
	>
		<div style={{ height: '30px'}} />

		<div
			className="category_banner_details"
			px="1.25rem" py="0.875rem"
		>

			<H3
				className="title"
				fontSize="18px"
				textAlign="left"
				fontWeight="600"
				color="text.secondary"
				pl="20px"
				mb="10px"
				// title={product?.name_uz}
			>
				{lang === 'uz' ? hoveredCategory[`name_${'uz'}`] : hoveredCategory[`name_${'ru'}`]}
			</H3>

			<div>
				<FlexBox px="1.25rem" py="0.875rem">
					<Box flex="1 1 0">
						<Grid container spacing={4} >
								{hoveredCategory.children?.map((sub, i2) => (
									<Grid item md={3} key={i2}>
											<NavLink
												className="child-link"
												href={`/products/${sub.slug}`}
												key={i2}
											>
												<H3
													className="title"
													fontSize="14px"
													textAlign="left"
													fontWeight="600"
													color="text.secondary"
													mb="10px"
												>
													{lang === 'uz' ? sub.name_uz : sub.name_ru}
												</H3>
											</NavLink>
											{sub.children?.map((item, i2) => (
											<NavLink
												className="child-link"
												style={{display: 'block'}}
												href={`/products/${item.slug}`}
												key={i2}
											>
												{lang === 'uz' ? item.name_uz : item.name_ru}
											</NavLink>
										))}
									</Grid>
								))}
						</Grid>
					</Box>
				</FlexBox>
			</div>
		</div>
	</div>
)