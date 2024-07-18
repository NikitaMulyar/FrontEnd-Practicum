// import libs:
import React, {useState} from 'react';

const Game = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Увеличить значение на 1
            </button>
            <h1>Count: {Math.round(count / 50)} секунд</h1>
        </div>
    );
};

export default Game;
