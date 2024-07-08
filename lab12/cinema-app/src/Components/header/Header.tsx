import style from './header.module.css'
import'./header.module.css'
import {BrowserRouter as Router, Routes, Route, Link, NavLink, useParams} from 'react-router-dom';

export default function Header(props:{categoryValue: string, onChangeCategory: (value:string) => void}){

    const handleCategoryClick = (category: string) => {
        props.onChangeCategory(category); // Изменяем состояние при нажатии
    };
    return (
        <header className={style.header}>
            <nav>
                <ul className={style.menu}>
                    <li><Link to={`/All`} onClick={() => handleCategoryClick("All")}>All</Link></li>
                    <li><Link to={`/Movie`} onClick={() => handleCategoryClick("Movie")}>Movie</Link></li>
                    <li><Link to={`/Series`} onClick={() => handleCategoryClick("Series")}>Series</Link></li>
                    <li><Link to={`/Cartoon`} onClick={() => handleCategoryClick("Cartoon")}>Cartoon</Link></li>
                </ul>
            </nav>
        </header>
    );
}