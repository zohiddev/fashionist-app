import React, { cloneElement, Fragment, useState, useEffect } from "react"
import Modal from "../modal/Modal"
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { setIsActive } from "reducers/userReducer";

const UserLoginDialog = ({ handle, children }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const isActive = useSelector(state => state.user.isActive)
	const toggleDialog = () => {
		if(localStorage.getItem('accessToken')){
			router.push('/profile')
		} else{
			dispatch(setIsActive(!isActive))
		}
	}

	return (
		<Fragment>
			{cloneElement(handle, { onClick: toggleDialog })}

			<Modal open={isActive} onClose={toggleDialog}>
				{children}
			</Modal>
		</Fragment>
	)
}

export default UserLoginDialog
