import React, {useState} from "react";
import {data} from './data.js';
import logo from './logo.svg';
import Sorter from './Sorter.js'
import Card from './Card';

function App() {

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  function onChange(e){
    e.preventDefault();
    setSort(e.target.value);
  }
  function handleTextChange(e){
    e.preventDefault();
    setSort("search");
    setFilter(e.target.value);
  }

  return (
    <div class="text-center bg-gradient-to-br from-white to-gray-200 min-h-screen" style={{textAlign: "-webkit-center"}}>
      <div class="font-sans pt-5 text-3xl text-center text-yellow-600 w-full h-20">
        <p>ACNH Villager Search</p>
      </div>
        <form>
          <select class="m-4 appearance-none rounded block sm:inline-block md:inline-block lg:inline-block" onChange={onChange}>
            <option>High to Low</option>
            <option>Low to High</option>
            <option>Species (A-Z)</option>
          </select>
          <input type="text" placeholder="search" class="rounded m-4" onChange={handleTextChange}></input>
        </form>

        <Sorter sort={sort} filter={filter}/>

    </div>
  );
}

export default App;
