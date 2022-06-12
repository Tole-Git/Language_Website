import { React, useState } from 'react'
import data from "./ListData.json"
import languageNames from "./ListLanguageNames.json" 

function List(props) {
    var list = [data, languageNames]
    var filteredList = []

    // create a new array by filtering the original array
    const filteredList = list[1].filter((el) => {
        // if no input then return the original
        if (props.input === '') {
            return el;
        }
        // return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
    
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List