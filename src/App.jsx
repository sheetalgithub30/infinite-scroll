import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(1);
  const[data,setData] = useState([]);
  useEffect(()=>{
     async function getData(){
       const response = await fetch(`https://api.unsplash.com/photos/?page=${page}&per_page=40&client_id=XCtYKfKmCVr18RlEzs7cx1LFRcuhFbs7fAWcvkMHwQA`);
       const result = await response.json();
       setData(result);
     }
     getData();
  },[])

  return (
    <div id="main">
      {
      data.map((e)=>{
         return (
          <div id="images">
            <img src={e.urls.thumb}></img>
          </div>
         ) 
      })
    }
  
    </div>
  )
}

export default App
