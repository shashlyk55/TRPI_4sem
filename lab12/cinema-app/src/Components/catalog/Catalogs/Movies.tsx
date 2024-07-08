import collectionMovies from "../MoviesCollection";
import {Movie} from "../Movie";
import CatalogItem from "../catalogItem/CatalogItem";
import style from './Catalog.module.css'
import {Simulate} from "react-dom/test-utils";
import {useParams} from "react-router-dom";

export default function Movies() {
    const params = useParams()
    const categories = ["All", "Movie", "Series", "Cartoon"]

    if (!categories.includes(params.category as string, 0))
        return (
            <div className={style.catalog}>
                <h3>Something went wrong...</h3>
            </div>
        );

    if (!params.category || params.category === 'All')
        return (
            <div className={style.catalog}>
                {collectionMovies.length > 0 ? collectionMovies.map((movie: Movie) => <CatalogItem item={movie}/>) :
                    <p>Ничего не найдено...</p>}
            </div>
        );

    let filteredList = collectionMovies.filter((movie: Movie) => movie.category === params.category)

    return (
        <div className={style.catalog}>
            {filteredList.length > 0 ? filteredList.map((movie: Movie) => <CatalogItem item={movie}/>) :
                <p>Ничего не найдено...</p>}
        </div>
    );
}