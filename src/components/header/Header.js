import IconButton from "components/buttons/IconButton";
import Image from "components/Image";
import Link from "next/link";
import React, { useState } from "react";
import Box from "../Box";
import Categories from "../categories/Categories";
import Container from "../Container";
import FlexBox from "../FlexBox";
import Icon from "../icon/Icon";
import MiniCart from "../mini-cart/MiniCart";
import SearchBox from "../search-box/SearchBox";
import Login from "../sessions/Login";
import Sidenav from "../sidenav/Sidenav";
import { Tiny, H5 } from "../Typography";
import StyledHeader from "./HeaderStyle";
import UserLoginDialog from "./UserLoginDialog";
import { Typography } from "../Typography";
import { useDispatch, useSelector } from "react-redux";
import LogoSVG from "./LogoSVG";

const Header = ({ isFixed, className }) => {
    const [open, setOpen] = useState(false);
    const toggleSidenav = () => setOpen(!open);
    const state = useSelector((state) => state);
    const lang = state?.lang?.lang;
    const { cartList } = state.cart;

    const cartHandle = (
        <FlexBox ml='20px' alignItems='flex-start'>
            <IconButton bg='gray.200' p='12px'>
                <Icon size='20px'>bag</Icon>
            </IconButton>

            {!!cartList?.length && (
                <FlexBox
                    borderRadius='300px'
                    bg='error.main'
                    px='5px'
                    py='2px'
                    alignItems='center'
                    justifyContent='center'
                    ml='-1rem'
                    mt='-9px'
                >
                    <Tiny color='white' fontWeight='600'>
                        {cartList?.reduce((acc, item) => acc + item.qty, 0)}
                    </Tiny>
                </FlexBox>
            )}
        </FlexBox>
    );

    return (
        <StyledHeader className={className}>
            <Container
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                height='100%'
            >
                <FlexBox
                    className='logo'
                    width='200px'
                    // height="200px"
                    alignItems='center'
                >
                    <Link href='/'>
                        <a>
                            <Image
                                src='/logo.png'
                                width='100%'
                                height='100%'
                                layout='intrinsic'
                                objectFit='contain'
                                alt='logo'
                            />
                        </a>
                    </Link>

                    <div className='category-holder'>
                        <Categories>
                            <FlexBox
                                color='text.hint'
                                alignItems='center'
                                ml='1rem'
                            >
                                <Icon>categories</Icon>
                                <H5 color='text.muted' ml='7px'>
                                    {lang === "uz" ? "Menu" : "Меню"}
                                </H5>
                                <Icon>arrow-down-filled</Icon>
                            </FlexBox>
                        </Categories>
                    </div>
                </FlexBox>

                <FlexBox justifyContent='center' flex='1 1 0'>
                    <SearchBox />
                </FlexBox>

                <FlexBox className='header-right' alignItems='center'>
                    <UserLoginDialog
                        handle={
                            <IconButton ml='1rem' bg='gray.200' p='8px'>
                                <Icon size='28px'>user</Icon>
                            </IconButton>
                        }
                    >
                        <Box>
                            <Login />
                        </Box>
                    </UserLoginDialog>

                    <Sidenav
                        handle={cartHandle}
                        position='right'
                        open={open}
                        width={380}
                        toggleSidenav={toggleSidenav}
                    >
                        <MiniCart toggleSidenav={toggleSidenav} />
                    </Sidenav>
                </FlexBox>
            </Container>
        </StyledHeader>
    );
};

export default Header;
