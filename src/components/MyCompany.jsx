import React from "react"
import { Company, CompanyImage, CompanyText } from "./MyCompany.styled"

const CompanyIcon = (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={33}
        height={33}
        transform='scale(.8)'
        viewBox='0 0 40 40'
        {...props}
    >
        <g>
            <path
                fill='#2b2b2b'
                fillRule='evenodd'
                d='M23.352 23.371c.777-.793 2.05-.8 2.84-.02a.104.104 0 0 1 .023.02l4.605 4.676 4.61-4.676a2.008 2.008 0 0 1 2.863 0 2.065 2.065 0 0 1 0 2.906l-4.605 4.676 4.605 4.676a2.065 2.065 0 0 1 0 2.906c-.777.79-2.05.8-2.844.02-.004-.008-.011-.012-.02-.02L30.82 33.86l-4.605 4.676c-.781.79-2.055.8-2.844.02-.008-.008-.016-.012-.02-.02a2.065 2.065 0 0 1 0-2.906l4.606-4.676-4.605-4.676a2.065 2.065 0 0 1 0-2.906zm0 0'
            />
            <path
                fill='none'
                stroke='#2b2b2b'
                strokeWidth={4.11}
                d='M37.672 8.902a6.812 6.812 0 0 1-2.008 4.844 6.812 6.812 0 0 1-4.844 2.008h-6.847V8.902a6.81 6.81 0 0 1 2.007-4.84 6.81 6.81 0 0 1 4.84-2.007c1.895 0 3.606.765 4.844 2.008a6.81 6.81 0 0 1 2.008 4.84zM15.754 30.82a6.812 6.812 0 0 1-2.008 4.844 6.812 6.812 0 0 1-4.844 2.008H2.055V30.82a6.81 6.81 0 0 1 2.007-4.84 6.81 6.81 0 0 1 4.84-2.007c1.895 0 3.606.765 4.844 2.007a6.81 6.81 0 0 1 2.008 4.84zM8.902 2.055c1.895 0 3.606.765 4.844 2.007a6.81 6.81 0 0 1 2.008 4.84v6.852H8.902a6.81 6.81 0 0 1-4.84-2.008 6.812 6.812 0 0 1-2.007-4.844 6.81 6.81 0 0 1 2.007-4.84 6.81 6.81 0 0 1 4.84-2.007zm0 0'
            />
        </g>
    </svg>
)

const MyCompany = () => {
    return (
        <Company href='https://appx.uz/' target='_blank'>
            <CompanyImage>
                <CompanyIcon />
            </CompanyImage>
            <CompanyText>Developed and designed by Appx Group</CompanyText>
        </Company>
    )
}

export default MyCompany
