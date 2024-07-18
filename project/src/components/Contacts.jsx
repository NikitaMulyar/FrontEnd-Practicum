// import libs:
import React from 'react';

import '../styles/About.css';

import {Carousel} from 'antd';
import {DoubleRightOutlined, InfoCircleOutlined} from '@ant-design/icons';


const Contacts = () => {
    return (
        <div id="main">
            <h2>Контакты</h2>
            <p>Любые вопросы по набору в Лицей «Вторая школа» Вы можете задать по электронной почте: <a
                href="mailto:abitur@sch2.ru">abitur@sch2.ru</a></p>
            <p>Все вступительные испытания проходят по адресу: <b><a target="_blank"
                                                                     href="https://yandex.ru/maps/-/CDvuFHlL">г.
                Москва, ул. Фотиевой, 18.</a></b></p>
        </div>
    );
};

export default Contacts;
