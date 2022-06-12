//import React from 'react';
import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./../components/List"
import "./../App.css";

function Home() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    // convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

  };

  return (
    <div className = 'home'>
        <h3>Home</h3>

        <br></br>

        <image src="./public/logo512.png" alt="Genius-Squad" ></image>

        <h6>The Comprehensive Programming Language Database that will revolutize the way you code forever</h6>

        <br></br>
        
        
        {/* <input size="100" type="text" placeholder="What's your desire?..."></input> */}

        {/* <p className='query_result'></p> */}

        <div className="main">
          <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Ask me anything"
          />
        </div>
        <List input={inputText} />
        </div>


    </div>
  )
}

export default Home;