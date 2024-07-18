// import libs:
import React, {useState, useEffect} from 'react';

const Prime = () => {
    const [count, setCount] = useState(1);
    const [fact, setFact] = useState(1);

    useEffect(() => {
        setFact(fact * count);
    }, [count]);

    let i = count - 1;
    let ans = 2;
    while(true) {
        let fl = true;
        for (let j = 2; j <= Math.ceil(ans ** 0.5); j++) {
            if (ans % j === 0) {
                fl = false;
                break;
            }
        }
        if (fl)
            i--;
        if (i === 0)
            break;
        ans++;
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Увеличить значение на 1
            </button>
            <h1>{count}-е простое число:</h1> <h3>{ans}</h3>
            <h1>Факториал числа {count}:</h1> <h3>{fact}</h3>
        </div>
    );
};

export default Prime;
