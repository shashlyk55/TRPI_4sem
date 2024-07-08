import './App.css';
import {useState} from "react";
import {FindFilm} from "./Api";
import {RadioButtons} from "./Components/RadioButtons";
import {ResultCatalog} from "./Components/catalog/Catalogs/ResultCatalog";
import styles from './Api.module.css'


function App() {
    const [searchResult, setResult] = useState<any[]>([]);
    const [inputText, setInputText] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<string>("all");
    const Find = async(sv?:string)=>{
        let arr:any;
        if(inputText !== undefined)
        {
            if(sv)
                arr = await FindFilm(inputText, sv);
            else
                arr = await FindFilm(inputText, selectedValue);
        }
        if(arr === undefined)
            arr = [];
        setResult(arr);
    }
    const handleKeyDown = (event:any):void => {
        // console.log(event.key);
        if (event.key === 'Enter') {
            Find();
        }
    };
    const handleChange = (event:any) => {
        setSelectedValue(event.target.value);
        Find(event.target.value);
    };

    return (
        <main>
            <div>
                <div className={styles.container}>
                    <div className={styles.searchString}>
                        <input value={inputText} onKeyDown={handleKeyDown}
                               onChange={(e: any) => setInputText(e.target.value)}/>
                        <button onClick={() => Find()}>Search</button>
                    </div>
                    <RadioButtons selectedValue={selectedValue} handleChange={handleChange}/>
                </div>
                <ResultCatalog films={searchResult}/>
            </div>
        </main>
    );
}

export default App;
