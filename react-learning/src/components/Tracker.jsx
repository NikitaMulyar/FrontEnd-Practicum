// import libs:
import React, {useEffect, useState} from 'react';

import '../Shop.css';

const Tracker = () => {
    const [numbers, setNumbers] = useState([]);
    const [squares, setSquares] = useState([]);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 10; i++) {
            arr.push(Math.round(Math.random() * 100));
            squares.push(0);
        }
        setNumbers([...arr]);
    }, []);

    return (
        <div id="items">
            {numbers.map((item, i) => (<div className="item">
                <button onClick={() => {
                    let new_arr = [];
                    for (let j = 0; j < numbers.length; j++) {
                        if (j === i) {
                            new_arr.push(item * item);
                            continue;
                        }
                        new_arr.push(squares[j]);
                    }
                    setSquares(new_arr);
                }}>Посчитать квадрат числа {item}</button>
                <p>{squares[i]}</p>
            </div>))}
        </div>
    );
};

export default Tracker;
