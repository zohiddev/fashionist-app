import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { api } from 'utils/http'
import Button from '../buttons/Button'
import FlexBox from '../FlexBox'
import TextField from '../text-field/TextField'
import { H3 } from '../Typography'
import { StyledSessionCard } from './SessionStyle'
import { getUser, setIsActive } from 'reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toast'

const Login = () => {
    const router = useRouter()
    const [isVerify, setIsVerify] = useState(false)
    const [isValidate, setIsValidate] = useState({ phone: false, code: false })
    const [phone, setPhone] = useState('')
    const [code, setPassword] = useState('')
    const state = useSelector((state) => state)
    const lang = state?.lang?.lang
    const dispatch = useDispatch()

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    const loginBtn = async (e) => {
        e.preventDefault()
        if (!validateEmail(phone)) {
            setIsValidate({ ...isValidate, phone: true })
        } else {
            try {
                let res
                res = await api.login({ email: phone })
                console.log(res)
                if (
                    res.data.isOk |
                    (res.data.message ===
                        'Sizga kod jo`natilgan, emailni tekshirib ko`ring')
                ) {
                    setIsVerify(true)
                    setIsValidate({ ...isValidate, phone: false })
                } else {
                    alert(res.data.message)
                }
            } catch (error) {
                console.error(error)
                alert(error.response?.data?.error || 'Error')
            }
        }
    }

    const verifyBtn = async (e) => {
        e.preventDefault()
        if (code === '') {
            setIsValidate({ ...isValidate, code: true })
        } else {
            try {
                let res
                res = await api.verify({ email: phone, code })
                if (res.data.isOk) {
                    setIsVerify(false)
                    let { accessToken, refreshToken } = res.data
                    localStorage.setItem('accessToken', accessToken)
                    localStorage.setItem('refreshToken', refreshToken)
                    dispatch(setIsActive(!state?.user?.isActive))
                    getUser()(dispatch)
                    setIsValidate({ ...isValidate, code: false })
                    router.push('/profile')
                } else {
                    toast.error(
                        `${
                            lang === 'uz'
                                ? 'Kod xato kiritildi'
                                : 'Код был введен неправильно'
                        }`
                    )
                    setPhone('')
                    setPassword('')
                    setIsVerify(false)
                }
            } catch (error) {
                console.log(error)
                toast.error(
                    `${
                        lang === 'uz'
                            ? 'Kod xato kiritildi'
                            : 'Код был введен неправильно'
                    }`
                )
            }
        }
    }
    return (
        <>
            <ToastContainer position='top' delay='3000' />

            <StyledSessionCard mx='auto' my='2rem' boxShadow='large'>
                {isVerify ? (
                    <form className='content'>
                        <H3 textAlign='center' mb='0.5rem'>
                            {lang === 'uz' ? 'Kirish' : 'Вход'}
                        </H3>

                        <TextField
                            mb='0.75rem'
                            name='number'
                            // placeholder="+998 99 999 99 99"
                            label='Maxfiy kodni kiriting'
                            type='number'
                            fullwidth
                            // onBlur={handleBlur}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                borderColor: isValidate.code
                                    ? 'red'
                                    : '#AEB4BE',
                            }}
                            value={code}
                            // errorText={touched.number && errors.number}
                        />

                        <Button
                            mb='1.65rem'
                            variant='contained'
                            color='primary'
                            type='submit'
                            fullwidth
                            onClick={(e) => verifyBtn(e)}
                        >
                            {lang === 'uz' ? 'Kirish' : 'Вход'}
                        </Button>
                    </form>
                ) : (
                    <form className='content'>
                        <H3 textAlign='center' mb='0.5rem'>
                            {lang === 'uz' ? 'Kirish' : 'Вход'}
                        </H3>

                        <FlexBox>
                            <TextField
                                mb='0.75rem'
                                name='email'
                                placeholder='example@gmail.com'
                                label={
                                    lang === 'uz'
                                        ? 'Emailingizni kiriting'
                                        : 'Введите свой адрес электронной почты'
                                }
                                type='email'
                                span={false}
                                // spanTitle='@'
                                onChange={(e) => setPhone(e.target.value)}
                                style={{
                                    borderColor: isValidate.phone
                                        ? 'red'
                                        : '#AEB4BE',
                                }}
                                fullwidth
                            />
                        </FlexBox>

                        <Button
                            mb='1.65rem'
                            variant='contained'
                            color='primary'
                            type='submit'
                            fullwidth
                            onClick={(e) => loginBtn(e)}
                        >
                            {lang === 'uz' ? 'Kirish' : 'Вход'}
                        </Button>
                    </form>
                )}
            </StyledSessionCard>
        </>
    )
}

export default Login
