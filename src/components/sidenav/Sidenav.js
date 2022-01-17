import React, { cloneElement, Fragment, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { StyledSidenav } from "./SidenavStyle"

const Sidenav = ({
	position,
	open,
	width,
	scroll,
	handle,
	children,
	toggleSidenav,
}) => {
	const [sidenavOpen, setSidenavOpen] = useState(open)
	const handleModalContentClick = (e) => {
		e.stopPropagation()
	}

	const handleToggleSidenav = () => {
		setSidenavOpen(!sidenavOpen)
	}

	useEffect(() => {
		setSidenavOpen(open)
	}, [open])

	if (globalThis.document && sidenavOpen) {
		let sidenav = document.querySelector("#sidenav-root")

		if (!sidenav) {
			sidenav = document.createElement("div")
			sidenav.setAttribute("id", "sidenav-root")
			document.body.appendChild(sidenav)
		}

		return (
			<Fragment>
				{createPortal(
					<StyledSidenav
						open={sidenavOpen}
						width={width}
						position={position}
						scroll={scroll}
						onClick={toggleSidenav || handleToggleSidenav}
					>
						<div
							className="sidenav-content"
							onClick={handleModalContentClick}
						>
							{children}
						</div>
					</StyledSidenav>,
					sidenav
				)}

				{handle &&
					cloneElement(handle, {
						className: handle.props?.className + " cursor-pointer",
						onClick: toggleSidenav || handleToggleSidenav,
					})}
			</Fragment>
		)
	} else
		return (
			handle &&
			cloneElement(handle, {
				className: handle.props?.className + " cursor-pointer",
				onClick: toggleSidenav || handleToggleSidenav,
			})
		)
}

Sidenav.defaultProps = {
	width: 280,
	position: "right",
	open: false,
	scroll: false,
}

export default Sidenav
