import React from "react"
import Button from "../buttons/Button"
import Typography from "../Typography"
import { StyledCarouselCard1 } from "./CarouselCardStyle"
import Link from 'next/link'
import Image from "next/image"

const CarouselCard1 = ({ slide }) => {
	const myLoader = ({ src, width, quality }) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}
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
					<div className="image-holder" style={{width:'100%', height: '300px', display: 'block', position: 'relative'}}>
						{/* <img src={slide?.image}  /> */}
						<Image
							loader={myLoader}
							src={slide?.image}
							layout="fill"
							alt='banner_img'
							sizes={'100%'}
							quality="85"
						/>
					</div>
				</a>
			</Link> : <div className="image-holder" style={{width:'100%', display: 'block', position: 'relative'}}>
						{/* <img src={slide?.image}  /> */}
						<Image
							loader={myLoader}
							src={slide?.image}
							layout="fill"
							alt='banner_img'
							quality="85"
						/>
					</div>
			}



		</StyledCarouselCard1>
	)
}

export default CarouselCard1
