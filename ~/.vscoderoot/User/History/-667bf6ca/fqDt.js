import { React, useState } from 'react'
import data from "./ListData.json"
import languageNames from "./ListLanguageNames.json" 
import languageSections from "./ListLanguageSections.json"

function List(props) {
    // var list = [data, languageNames, languageSections]
    var filteredList = []

    // create a new array by filtering the original array
    filteredList = data.map((element) => {
        return element.filter((el) => {
            // if no input then return the original
            if (props.input === '') {
                return el;
            }
            // return the item which contains the user input
            else {
                return el.text.toLowerCase().includes(props.input)
            }
        })
    })
    
    return (
        <ul>
            {filteredList[0].map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>,
        
        <ul>
            {filteredList[1].map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>,

        // <ul>
        // {filteredList[2].map((item) => (
        //     <li key={item.id}>{item.text}</li>
        // ))}
        // </ul>
        
    )
}

export default List