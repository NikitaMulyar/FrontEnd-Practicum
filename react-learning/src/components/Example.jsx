// import libs:
import React, {useEffect, useState} from 'react';

const Example = () => {
    const [str, setStr] = useState("");
    const [pal, setPal] = useState("");

    useEffect(() => {
        let pal = "";
        for (let i = 0; i < str.length; i++) {
            let left = i - 1;
            let right = i + 1;
            let cur_pal = str[i];
            while (left >= 0 && right < str.length && str[left] === str[right]) {
                cur_pal = str[left] + cur_pal + str[right];
                left--;
                right++;
            }
            if (cur_pal.length > pal.length)
                pal = cur_pal;
        }
        for (let i = 1; i < str.length; i++) {
            let left = i - 1;
            let right = i;
            let cur_pal = "";
            while (left >= 0 && right < str.length && str[left] === str[right]) {
                cur_pal = str[left] + cur_pal + str[right];
                left--;
                right++;
            }
            if (cur_pal.length > pal.length)
                pal = cur_pal;
        }
        setPal(pal);
    }, [str]);

    return (
        <div>
            <input onInput={(e) => setStr(e.target.value)} placeholder="Введите текст..." id="input-id"/>
            <h2>Палиндром наибольшей длины:</h2>
            <h3>{pal}</h3>
        </div>
    );
};

export default Example;
