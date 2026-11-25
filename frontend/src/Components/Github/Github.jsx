import React, { useEffect, useState } from "react";
import './Github.css';


const Github = () => { 

    const [data, setData] = useState(null)

    useEffect(()=>{

      // const controller = new AbortController();
      
      async function handleGithubData(){

        try {

          const response = await fetch("http://localhost:3000/api/github/profile", {
            // signal : controller.signal
          } );

          if(!response.ok){
            throw new Error(`http error ${response.status}`)
          }

          const value = await response.json();

          setData(value)
          
        } catch (error) {
          console.log("issue in fetching data from profile");
          console.log("Active error : ", error);
        }

      }

      handleGithubData();


      // return ()=>{
      //   controller.abort()
      // }

    },[])

  return (
    <div>
      <div className="github">
          {/* <p>Repo : {data.public_repos}</p> */}
          <p>Repo : {data?.profileData?.public_repos}</p>
      </div>
    </div>
  );
};

export default Github;
