import React from 'react';
import cls from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={cls.footer}>
            {/*<ul className={cls.networks}>*/}
            {/*    <li className={cls.network}>*/}
            {/*        <a className={cls.icon} href="#">*/}
            {/*            */}
            {/*        </a>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <ul className={cls.menu}>
                <li className={cls.item}>
                    <a className={cls.link} href='#'>About</a>
                </li>
                <li className={cls.item}>
                    <a className={cls.link} href='#'>Team</a>
                </li>
                <li className={cls.item}>
                    <a className={cls.link} target='_blank' href='https://t.me/DealScoutAmazon'>Contact</a>
                </li>
            </ul>
            <p>&copy;2023 DealScout</p>
        </footer>
    );
};

export default Footer;
