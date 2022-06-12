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
        <h1>Home</h1>

        <br></br>

        <image src="./public/logo512.png" alt="Genius-Squad" ></image>

        <h6>The Comprehensive Programming Language Database that will revolutize the way you code forever</h6>

        <br></br>
        
        <div className="main">
          <div className="search">
            {/* <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant="outlined"
              fullWidth
              label="Ask me anything"
            /> */}
          <SearchBar placeholder="What's your desire?..." data={List} />
          </div>

          <div className="search_container">
            <div className="search_list"><List input={inputText} /></div>
            <div className="search_list"><List input={inputText} /></div>
            <div className="search_list"><List input={inputText} /></div>
          </div>
        </div>


    </div>
  )
}

export default Home;
