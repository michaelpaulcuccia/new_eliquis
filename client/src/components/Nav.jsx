import React, { useState } from 'react';
import styled from 'styled-components';
import { pallette, breakpoints } from '../constants';
import { TextHeadline } from '../components/Text'
import Home from '../images/home.png';
import Hamburger from '../images/ham.png';
import EliquisLogo from '../images/logos/Eliquis_logo-01.svg';


const Root = styled.div`
    width: 100%;
    border-bottom: 2px solid ${pallette.orange};
`;

const UtilNav = styled.div`
    background-color: ${pallette.defaultTextBlack};
    color: ${pallette.white};
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    font-family: sans-serif;
    
    @media (min-width: ${breakpoints.mobile}) {
        padding: 4px 18px;
    } 

    .desktop-util-item {
        cursor: pointer;
        display: none;

        &:hover {
            text-decoration: underline;
        }

        @media (min-width: ${breakpoints.mobile}) {
            display: block;
        } 
    }

    .mobile-menu {
        display: flex;
        align-items: center;

        img {
            height: 18px;
            width: 18px;
            margin-right: 12px;
            cursor: pointer;
        }

        span {
            display: flex;
            align-items: center;
        }

        @media (min-width: ${breakpoints.mobile}) {
            display: none;
        } 
    }
`;

const MobileUtilNavMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 14px;
    padding-bottom: 4px;
    background-color: ${pallette.defaultTextBlack};
    color: ${pallette.white};
    font-family: Arial, Helvetica, sans-serif;

    div {
        padding-bottom: 10px;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }

    @media (min-width: ${breakpoints.mobile}) {
        display: none;
    } 

`;

const Banner = styled.div`
    padding: 16px 0;
    margin: 0 auto;

    @media (min-width: ${breakpoints.mobile}) {
        padding: 18px 0 24px 0;
    } 

    .desktop {
        display: none;

        @media (min-width: ${breakpoints.mobile}) {
            display: block;
        } 
    }

    .mobile {
        display: block;

        @media (min-width: ${breakpoints.mobile}) {
            display: none;
        } 
    }
`;

export default function Nav() {

    const [showModal, setShowModal] = useState(false);

    const handleMenuClick = () => {
        setShowModal(!showModal);
        console.log('click')
    }

  return (
    <Root>
        <UtilNav>
            {/* DESKTOP START */}
            <div className='desktop-util-item'>U.S. FULL PRESCRIBING INFORMATION</div>
            <div className='desktop-util-item'>MEDICATION GUIDE</div>
            <div className='desktop-util-item'>INDICATIONS</div>
            <div className='desktop-util-item'>HEALTHCARE PROFESSIONALS SITE</div>
            <div className='desktop-util-item'>EN ESPAÑOL</div>
            {/* DESKTOP END */}
            {/* MOBILE START */}
            <div className='mobile-menu'>
                <div>U.S. FULL PRESCRIBING INFORMATION</div>
                <span onClick={handleMenuClick}>
                    <img src={Hamburger} alt='' />
                    <TextHeadline>MENU</TextHeadline>
                </span>
            </div>
            {/* MOBILE END */}
        </UtilNav>
        {
            showModal && 
            <MobileUtilNavMenu>
                <div>MEDICATION GUIDE</div>
                <div>INDICATIONS</div>
                <div>HEALTHCARE PROFESSIONALS SITE</div>
                <div>EN ESPAÑOL</div>
            </MobileUtilNavMenu>
        }
        <Banner>
            <img className='desktop' src={Home} alt='' />
            <img className='mobile' src={EliquisLogo} alt='' />
        </Banner>
    </Root>
  )
}
