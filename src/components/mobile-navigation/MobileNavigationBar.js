import { Chip } from "components/Chip"
import React, {useEffect, useState} from "react"
import useWindowSize from "../../hooks/useWindowSize"
import Icon from "../icon/Icon"
import NavLink from "../nav-link/NavLink"
import StyledMobileNavigationBar from "./MobileNavigationBar.style"
import { useSelector, useDispatch } from "react-redux"
import { setIsActive } from "reducers/userReducer";

const MobileNavigationBar = () => {
	const width = useWindowSize()
	const state = useSelector(state => state)
	const dispatch = useDispatch()
	const lang = state?.lang?.lang
	const [isAuth, setIsAuth] = useState(false)
	const { cartList } = state?.cart

	const handleNavbarClick = () => {
		dispatch(setIsActive(!state?.user?.isActive))
	}

	useEffect(() => {
		if(localStorage.getItem('user') !== null){
			setIsAuth(true)
		} else{
			setIsAuth(false)
		}
	}, [])

	const list = [
		{
			title:lang === 'uz' ? 'Bosh sahifa' : 'Главная',
			icon: "home",
			href: "/",
			cart: false

		},
		{
			title: lang === 'uz' ? 'Kategoriya' : 'Категория',
			icon: "category",
			href: "/category",
			cart: false

		},
		{
			title: lang === 'uz' ? 'Savatcha' : 'Корзина',
			icon: "bag",
			href: "/cart",
			cart: true
		},
		// {
		// 	title: lang === 'uz' ? 'Profil' : 'Профиль',
		// 	icon: "user-2",
		// 	href: "/profile",
		// 	click: handleNavbarClick
		// },
	]

	return (
		width <= 900 && (
			<StyledMobileNavigationBar>
				{list.map((item) => (
					item?.href ?
					<NavLink className="link" href={item?.href} key={item.title}>
						<Icon className="icon" variant="small">
							{item.icon}
						</Icon>
						{item.title}

						{item.cart && !!cartList.length && (
							<Chip
								bg="primary.main"
								position="absolute"
								color="primary.text"
								fontWeight="600"
								px="0.25rem"
								top="4px"
								left="calc(50% + 8px)"
							>
								{cartList?.reduce((acc, item) => acc + item.qty,0)}
							</Chip>
						)}
					</NavLink>
				:
				<div className="link" onClick={item?.click} key={item.title}>
					<Icon className="icon" variant="small">
						{item.icon}
					</Icon>
					{item.title}
				</div>

				))}

				{
					isAuth ?
					<NavLink className="link" href='/profile'>
						<Icon className="icon" variant="small">
							{'user-2'}
						</Icon>
						{lang === 'uz' ? 'Profil' : 'Профиль'}
					</NavLink>
					:
					<div className="link" onClick={handleNavbarClick}>
						<Icon className="icon" variant="small">
							{'user-2'}
						</Icon>
						{lang === 'uz' ? 'Profil' : 'Профиль'}
					</div>
				}
			</StyledMobileNavigationBar>
		)
	)
}

export default MobileNavigationBar
