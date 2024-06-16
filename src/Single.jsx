import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

function Single() {
  const { id } = useParams();
  const[image,setImage] = useState(null);

  console.log(id)

 
  useEffect(()=>{

    async function single(){
        const response = await fetch(`https://api.unsplash.com/photos/${id}?client_id=XCtYKfKmCVr18RlEzs7cx1LFRcuhFbs7fAWcvkMHwQA`)
        const result = await response.json();
        console.log(result)
        setImage(result);
      }
   single();
  },[id])



  if (!image) {
    return <p>Loading...</p>;
  }
  console.log(image);

  return (
    <>
      <div id="single">
        <div id="left" >
          <img src={image.urls.regular}/>
        </div>
        <div id="right">
          <p id="desc"><span>Description : </span>{image.alt_description || "No Description"}</p>
          <p><span>Original Height : </span>{image.width} px</p>
          <p><span>Original Width : </span>{image.height} px</p>
          <div>
            <a
              href={image.links.download}
              target="_blank"
            >
              <button>Download</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Single;