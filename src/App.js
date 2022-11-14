import './App.css';
import { random } from './api/random';
import React, {useState,useEffect} from 'react'
import Search from './component/Search';
import User from './component/User';


const App = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [images, setImages] = useState([])
  

  // useEffect(() => {
  //   const getUsers = async () =>{
  //     let users = await random.get('/?results=24');
      
  //     setImages(users.data.results);
  //     console.log(users.data.results)
  //   }
  //   getUsers();
    
  // },[searchTerm])


  useEffect(() => {
    const getUsers = async () =>{
      let users = await random.get('/?results=24');
      // let users = await random.get('/?gender=female');
      
      setImages(users.data.results);
      console.log(users.data.results)
    }
    getUsers();
    
  },[searchTerm])

  return (
    <div>
      <Search getSearchTerm={setSearchTerm}/>
      <User images={images}/>
    
    </div>
  )
}

export default App
