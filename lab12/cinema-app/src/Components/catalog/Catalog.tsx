import Header from "../header/Header";
import {BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import Movies from "./Catalogs/Movies";
import {useState} from "react";


export default function Catalog(){
    const [category,setCategory] = useState<string>("All")

    return (
        <Router>
            <Header categoryValue={category} onChangeCategory={setCategory}/>
            <main>
                <Routes>
                    <Route path="/" element={<Navigate to="/All" />}/>
                    <Route path=":category" element={<Movies/>}/>
                    <Route path="/*" element={<h3> Something went wrong...</h3>}/>
                </Routes>
            </main>
        </Router>
    );
}