import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState(1);
  const[data,setData] = useState([]);

  async function getData(){
    const response = await fetch(`https://api.unsplash.com/photos/?page=${page}&per_page=20&client_id=XCtYKfKmCVr18RlEzs7cx1LFRcuhFbs7fAWcvkMHwQA`);
    const result = await response.json();
    setData((prev)=>[...prev,...result]);
  }

  function infiniteScroll(){
    try{
      if(window.innerHeight+ document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
        setPage((prev)=>prev+1);
        // getData();
      }
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
     getData();
  },[page])


  useEffect(()=>{
    window.addEventListener("scroll",infiniteScroll);
    return () =>window.removeEventListener("scroll",infiniteScroll)
  },[]);

  return (
    <div id="main">
      {
      data.map((e)=>{
         return (
          <div id="images"> 
            <p id="name">{e.user.name}</p>
            <p id="created">{e.created_at}</p>
            <img src={e.urls.small}></img>
          </div>
         ) 
      })
    }
  
    </div>
  )
}

export default App
