import React from "react"
import Button from "../buttons/Button"
import Typography from "../Typography"
import { StyledCarouselCard1 } from "./CarouselCardStyle"
import Link from 'next/link'

const CarouselCard1 = ({ slide }) => {
	console.log(slide)
	return (
		<StyledCarouselCard1>
			{/* <div> */}
				{/* <h1 className="title">{slide?.title_uz}</h1> */}
				{/* <Typography color="secondary.main" mb="1.35rem">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quis lobortis consequat eu, quam etiam at quis ut convallis.
				</Typography> */}
				{/* <Button
					className="button-link"
					variant="contained"
					color="primary"
					p="1rem 1.5rem"
				>
					Visit Collections
				</Button> */}
			{/* </div> */}

			{
				slide?.url !== null ? <Link href={`/${slide?.url}`}>
				<a>
					<div className="image-holder" style={{width:'100%'}}>
						<img src={slide?.image}  />
					</div>
				</a>
			</Link> : <div className="image-holder" style={{width:'100%'}}>
						<img src={slide?.image}  />
					</div>
			}



		</StyledCarouselCard1>
	)
}

export default CarouselCard1
