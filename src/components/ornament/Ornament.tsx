import React, {useEffect, useState} from 'react';
import style from './Ornament.module.css';
import orn from '../../assets/images/icons/ornament.svg'



function getCountOrnaments() {
    let {clientHeight} = document.body
    let countOrnaments = Math.floor((clientHeight - 15) / 95) - 1;
    return { clientHeight, countOrnaments }
}


const Ornament = () => {
    const [ornametsValues, setOrnametsValues] = useState({clientHeight: 1, countOrnaments:1});

    useEffect(() => {
        function handleWindowResize() {
            setOrnametsValues(getCountOrnaments());
        }

        setTimeout(()=>{
            setOrnametsValues(getCountOrnaments())
        },0)

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    let htmlOrnamets: Array<string> = [];
    let i = 0;
    while (i < ornametsValues.countOrnaments) {
        htmlOrnamets.push('');
        i++;
    }


    return (
        <div className={style.ornament}>
            <div className={style.mainItem}></div>
            {htmlOrnamets.map(el => <div className={style.item}></div>)}
        </div>
    );
};


export default Ornament;