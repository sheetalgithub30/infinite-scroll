import { createContext,  useEffect, useState } from 'react'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


export const imageContext = createContext();

function App() {
  const [page, setPage] = useState(1);
  const[data,setData] = useState([]);
  const[text,setText] = useState("");

  const navigate = useNavigate();

  async function getData(){
    // setData([]);
    const response = await fetch(`https://api.unsplash.com/photos/?page=${page}&query=${text}&per_page=10&client_id=XCtYKfKmCVr18RlEzs7cx1LFRcuhFbs7fAWcvkMHwQA`);
    const result = await response.json();
    // console.log(result);
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


  // useEffect(()=>{
  //    getData();
  //    setPage(1);
  // },[text])

  function handleSearch(){
    console.log(text);
    setData([]);
    setPage(1);
    getData();
  }


  useEffect(()=>{
    window.addEventListener("scroll",infiniteScroll);
    return () =>window.removeEventListener("scroll",infiniteScroll)
  },[]);


  const handleImageClick = (image) => {
    console.log(image.id)
    navigate(`/image/${image.id}`);
  };

  return (
    <>
  <imageContext.Provider value ={{handleSearch,text,setText}}>
  <Navbar/>
  </imageContext.Provider>

   
    <div id="main">
      {
      data.map((da)=>{
         return (
          <div id="images" onClick={()=> handleImageClick(da)}> 
            <p id="name">{da.user.name}</p>
            <p id="created">{da.created_at}</p>
            <img src={da.urls.small}></img>
          </div>
         ) 
      })
    }
  
    </div>
    </>
  )
}

export default App
