import { useState, useEffect } from 'react'


const Search = ({ getSearchTerm }) => {

    const [input, setInput]= useState("")

    const findHandler = (event) =>{
        event.preventDefault();
        if (input.trim() !== ""){
            getSearchTerm(input)
        }

        setInput(""); 
    }
    useEffect(() => {
        console.log(input);
    },[]) 


  return (
    <form onSubmit={findHandler} >
        <input type="search" value={input}
         onChange={(event) => setInput(event.target.value)} />
        <button>Search</button>
    </form>
  )
}

export default Search