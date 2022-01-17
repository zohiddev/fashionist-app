import React from "react"
import Box from "./Box"
import CategorySectionHeader from "./CategorySectionHeader"
import Container from "./Container"
import useWindowSize from './../hooks/useWindowSize';

const CategorySectionCreator = ({ iconName, seeMoreLink, title, children }) => {
	const window = useWindowSize()
	return (
		<Box mb={window < 568 ? "1.75rem" : "3.75rem"}>
			<Container pb="1rem">
				{title && (
					<CategorySectionHeader
						title={title}
						seeMoreLink={seeMoreLink}
						iconName={iconName}
					/>
				)}

				{children}
			</Container>
		</Box>
	)
}

export default CategorySectionCreator
