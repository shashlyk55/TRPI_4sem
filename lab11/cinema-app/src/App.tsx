import React, {useState} from 'react';
import Catalog from "./Catalog/Catalog";
import MoviesCollection from "./Collection";
import SrcString from "./SearchString/SrcString";

function App(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('')
    const [isAvalaible, setAvalaible] = useState<boolean>(false)
  return (
      <div>
        <SrcString value={searchQuery} onChangeValue={setSearchQuery} avalaible={isAvalaible} onChangeCheckbox={setAvalaible}/>
        <Catalog movies={MoviesCollection} searchQuery={searchQuery} avalaible={isAvalaible}/>
      </div>
  );
}

export default App;
