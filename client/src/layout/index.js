import React, { Children } from 'react'
import logo from "../assets/kkt_logo.png"

const AuthLayouts = () => {
    return (
        <>
            <header className='flex justify-center item-center py-3 h-20 shadow-md bg-white'>
                <img
                     src={logo}
                     alt='로고입니다'
                     width={180}
                     height={60}
                />
            </header>
            { children }
        </>
    )
}

export default AuthLayouts