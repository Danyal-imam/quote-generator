import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [quote, setQoute]= useState("")
  const [author, setAuthor]= useState("")

  const quoteApi = async() =>{
    try {
      const data = await axios.get('http://api.quotable.io/random')
      setAuthor(data.data.author)
      setQoute(data.data.content)

      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    quoteApi()
  },[])


  return (
    <div className="parent_div">
      <div className="center_div">
        <p className="quote"><span>“</span> {quote} <span>“</span></p>
        <p className="author">- {author}</p>
        <button onClick={quoteApi}>new Quote</button>
      </div>
    </div>
  );
}

export default App;
