import React, {
	Children,
	cloneElement,
	useEffect,
	useRef,
	useState,
} from "react"
import { AccordionWrapper } from "./AccordionStyle"
import useWindowSize from './../../hooks/useWindowSize';

const Accordion = ({ expanded = false, children }) => {
	const [open, setOpen] = useState(expanded)
	const [headerHeight, setHeaderHeight] = useState(0)
	const [parentHeight, setParentHeight] = useState(0)
	const window = useWindowSize()

	const ref = useRef(null)

	const toggle = () => {
		setOpen(!open)
	}

	useEffect(() => {
		let parent = ref.current

		if (parent) {
			setHeaderHeight(parent.children[0].scrollHeight)
			setParentHeight(parent.scrollHeight)
		}
	}, [ref.current])

	const modifiedChildren = Children.map(children, (child, ind) => {
		if (ind === 0) return cloneElement(child, { open, onClick: toggle })
		else return child
	})

	return (
		<AccordionWrapper
			ref={ref}
			height={open ? parentHeight : headerHeight}
			style={{marginBottom: "10px"}}
			window={window}

		>
			{modifiedChildren}
		</AccordionWrapper>
	)
}

Accordion.defaultProps = {
	expanded: false,
}

export default Accordion
