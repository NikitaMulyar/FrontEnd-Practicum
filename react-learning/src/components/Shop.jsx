// import libs:
import React, {useState} from 'react';

import '../Shop.css';

const Shop = () => {
    const [data, setData] = useState({moon: 0, pass: 0, gems: 0});

    return (
        <div id="main">
            <h1>Магазин</h1>
            <div id="items">
                <div className="item">
                    <img
                        src="https://tulen.store/storage/thumbs/320x320_fit/cB5k1U0FcLt21Juu2OCYh23KgTruApBgj37S14OV.jpg"/>
                    <h4>Благословение полой луны</h4>
                    <p className="price">360 рублей</p>
                    <button onClick={() => setData({...data, moon: data.moon + 1})}>
                        Добавить товар
                    </button>
                    <p>В корзине: {data.moon} шт.</p>
                </div>
                <div className="item">
                    <img
                        src="https://tulen.store/storage/thumbs/320x320_fit/rTJvgAmbIUrjmzugbc3wBnjzrKrEruYJDub351Bt.jpg"/>
                    <h4>Боевой пропуск</h4>
                    <p className="price">810 рублей</p>
                    <button onClick={() => setData({...data, pass: data.pass + 1})}>
                        Добавить товар
                    </button>
                    <p>В корзине: {data.pass} шт.</p>
                </div>
                <div className="item">
                    <img
                        src="https://tulen.store/storage/thumbs/320x320_fit/tLTHdkfdb8ouEUWBZ2BI5dvSpJhJyqGIDJ1G4rP9.jpg"/>
                    <h4>6480 кристаллов</h4>
                    <p className="price">7050 рублей</p>
                    <button onClick={() => setData({...data, gems: data.gems + 1})}>
                        Добавить товар
                    </button>
                    <p>В корзине: {data.gems} шт.</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
