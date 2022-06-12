//import React from 'react';
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./../components/List";
import SampleData from "./../components/SampleData.json";
import RawSQLData from "./../components/RawSQLData.json"
import "./../App.css";

function Home() {


  return (
    <div className = 'home'>
        <h1>Home</h1>

        <br></br>

        <image src="./public/logo512.png" alt="Genius-Squad" ></image>

        <h6>The Comprehensive Programming Language Database that will revolutize the way you code forever</h6>

        <br></br>
        
        <div className="main">  
          <List placeholder="What's your desire?..." data={RawSQLData}></List>
        </div>  
    </div>
  )
}

export default Home;
