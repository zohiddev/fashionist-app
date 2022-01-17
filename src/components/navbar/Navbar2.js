import Box from "components/Box"
import Card from "components/Card"
import MenuItem from "components/MenuItem"
import navbarNavigations from "data/navbarNavigations"
import React from "react"
import Container from "../Container"
import FlexBox from "../FlexBox"
import Icon from "../icon/Icon"
import NavLink from "../nav-link/NavLink"
import { Span } from "../Typography"
import StyledNavbar from "./NavbarStyle"

const Navbar2 = () => {
	const renderNestedNav = (list, isRoot = false) => {
		return list?.map((nav) => {
			if (isRoot) {
				if (nav.url && nav.extLink)
					return (
						<NavLink
							className="nav-link"
							href={nav.url}
							key={nav.title}
							target="_blank"
							rel="noopener noreferrer"
						>
							{nav.title}
						</NavLink>
					)
				else if (nav.url)
					return (
						<NavLink
							className="nav-link"
							href={nav.url}
							key={nav.title}
						>
							{nav.title}
						</NavLink>
					)
				if (nav.child)
					return (
						<FlexBox
							className="root"
							position="relative"
							flexDirection="column"
							alignItems="center"
							key={nav.title}
						>
							<Span className="nav-link">{nav.title}</Span>
							<Box className="root-child">
								<Card
									mt="1.25rem"
									py="0.5rem"
									boxShadow="large"
									minWidth="230px"
								>
									{renderNestedNav(nav.child)}
								</Card>
							</Box>
						</FlexBox>
					)
			} else {
				if (nav.url)
					return (
						<NavLink href={nav.url} key={nav.title}>
							<MenuItem>
								<Span fontSize="14px">{nav.title}</Span>
							</MenuItem>
						</NavLink>
					)

				if (nav.child)
					return (
						<Box
							className="parent"
							position="relative"
							minWidth="230px"
							key={nav.title}
						>
							<MenuItem color="gray.700">
								<Span flex="1 1 0" fontSize="14px">
									{nav.title}
								</Span>
								<Icon size="8px" defaultcolor="currentColor">
									right-arrow
								</Icon>
							</MenuItem>
							<Box className="child" pl="0.5rem">
								<Card
									py="0.5rem"
									boxShadow="large"
									minWidth="230px"
								>
									{renderNestedNav(nav.child)}
								</Card>
							</Box>
						</Box>
					)
			}
		})
	}

	return (
		<StyledNavbar>
			<Container
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				height="100%"
			>
				<div />
				<FlexBox>{renderNestedNav(navbarNavigations, true)}</FlexBox>
			</Container>
		</StyledNavbar>
	)
}

export default Navbar2
