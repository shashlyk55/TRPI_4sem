import React from "react";
import {MovieModel} from "../MovieModel";
import styles from './CatalogItem.module.css'

function CatalogItem(props:{item: MovieModel}): JSX.Element{
    return(
      <div className={styles.item}>
          <p>{props.item.name}</p>
          <p>Rate: {props.item.rate}</p>
          <p>{props.item.isAvalaible ? "Avalaible" : "NonAvalaible"}</p>
      </div>
    );
}

export default CatalogItem