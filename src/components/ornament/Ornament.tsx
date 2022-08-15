import React, {useEffect, useState} from 'react';
import style from '../../assets/scss/Ornament.module.scss';
import {v4} from 'uuid';

function getCountOrnaments() {
    let {clientHeight} = document.body
    let countOrnaments = Math.floor((clientHeight - 15) / 95) - 3;
    return {clientHeight, countOrnaments}
}

const Ornament = () => {
    const [ornamentsValues, setOrnamentsValues] = useState({clientHeight: 1, countOrnaments: 1});

    useEffect(() => {
        function handleWindowResize() {
            setOrnamentsValues(getCountOrnaments());
        }

        setTimeout(() => {
            setOrnamentsValues(getCountOrnaments())
        }, 0)

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let htmlOrnaments: Array<string> = [];
    let i = 0;
    while (i < ornamentsValues.countOrnaments) {
        htmlOrnaments.push('');
        i++;
    }

    return (
        <div className={style.ornament}>
            <div className={style.mainItem}></div>
            {htmlOrnaments.map(el => <div key={v4()} className={style.item}></div>)}
        </div>
    );
};

export default Ornament;