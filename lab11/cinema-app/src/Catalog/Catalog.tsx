import React from "react";
import CatalogItem from './CatalogItem'
import {MovieModel} from "../MovieModel";
import './CatalogItem.module.css'

function Catalog(props:{movies:Array<MovieModel>, searchQuery: string, avalaible: boolean}){
    let filteredMovies: MovieModel[] = props.movies.
    filter((movie: MovieModel)=> movie.name.toLowerCase().includes(props.searchQuery.toLowerCase())).filter((movie:MovieModel)=>movie.isAvalaible === props.avalaible);

    return(
        <div>
            {filteredMovies.length > 0 ? (
                filteredMovies.map((movie: MovieModel):JSX.Element=>(
                    <CatalogItem item={movie}/>
                ))
            ):<p>Ничего не найдено</p>}
        </div>
    )
}
export default Catalog