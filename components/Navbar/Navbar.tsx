// @flow
import * as React from 'react';
import Link from 'next/link';
import s from './Navbar.module.scss'

export const Navbar = () => {
    const s = {
        display: 'flex',
        columnGap: '20px'
    }
    return (
        <div style={s}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
        </div>
    );
};