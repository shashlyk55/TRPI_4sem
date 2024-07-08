import style from './CatalogItem.module.css'
import {Film} from "./Film";

export default function CatalogItem(props:{film: Film}){
    return (
        <div className={style.container}>
            <div id="image">
                <img src={props.film.imgSrc}/>
            </div>
            <div className={style.info}>
                <div className={style.movieName}>
                    <h3>{props.film.name}</h3>
                </div>
                <div className={style.addInfo}>
                    <p>{props.film.type}</p>
                    <p>{props.film.year}</p>
                </div>
            </div>
        </div>
    );
}