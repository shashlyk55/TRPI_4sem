import {Film} from "../catalogItem/Film";
import CatalogItem from "../catalogItem/CatalogItem";
import styles from './Catalog.module.css'

export function ResultCatalog(props:{films:Film[]}):JSX.Element{
    return (
        <div className={styles.catalog}>
            {props.films.map((film)=><CatalogItem key={film.id} film = {film}/>)}
        </div>
    )
}