// import libs:
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

import logo from './../assets/logo.png'
import {Alert} from "antd";
import {Typography} from "antd";
import {AppstoreOutlined, SignatureOutlined, PartitionOutlined, SendOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

const items = [
    {
        label: (
            <Link to="">
                Главная
            </Link>
        ),
        key: 'main',
        icon: <AppstoreOutlined/>,
    },
    {
        label: (
            <Link to="regform">
                Оставить заявку
            </Link>
        ),
        key: 'regform',
        icon: <SignatureOutlined/>,
    },
    {
        label: (
            <Link to="about">
                О Лицее
            </Link>
        ),
        key: 'about',
        icon: <PartitionOutlined/>,
    },
    {
        label: (
            <Link to="contacts">
                Контакты
            </Link>
        ),
        key: 'contacts',
        icon: <SendOutlined/>,
    },
];


const Header = () => {
    const [current, setCurrent] = useState('main');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div id="header0">
            <div id="header">
                <img src={logo} alt="logo" id="logo"/>
                <h1>Отбор в ЛМШ 2024</h1>
                <img src={logo} alt="logo" id="logo"/>
            </div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} id="nav"/>
        </div>
    );
};

export default Header;
