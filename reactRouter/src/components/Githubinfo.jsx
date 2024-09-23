import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Githubinfo() {
  const load  = useLoaderData()
  // const [followers, setFollowers] = useState(0);

  // const [name,setName] = useState(null)
  // const [img,setImg] = useState(null)
  // useEffect(() => {
  //   const follow  = fetch("https://api.github.com/users/Sameer292").then((response)=> response.json()).then((data)=>{
  //     console.log(data);
  //     setFollowers(data.followers)
  //     setName(data.name)
  //     setImg(data.avatar_url)
      
  //   })
  // },[])
  return (
    <div>
      Github Info:
      <br />
      Name: {load.name}
      <br />
      Followers: {load.followers}
      <br />
      Profile picture:
      <img src={load.avatar_url} alt={load.name} width={300} />
    </div>

  );
}

export default Githubinfo;


export const githubLoader = async ()=>{

const response =   await fetch("https://api.github.com/users/Sameer292")
return response.json()

}