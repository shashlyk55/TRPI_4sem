import {Movie} from "../Movie";
import style from './CatalogItem.module.css'

export default function CatalogItem(props:{item: Movie}){
    return (
        <div className={style.container}>
            <div id="image">
                <img src={props.item.path}/>
            </div>
            <div className={style.info}>
                <div className={style.movieName}>
                    <h3>{props.item.name}</h3>
                </div>
                <div className={style.addInfo}>
                    <p>{props.item.category}</p>
                    <p>{props.item.year}</p>
                </div>
            </div>
        </div>
    );
}