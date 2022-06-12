import { React, useState } from 'react'
import "./SearchBar.css";

function List({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [userInputArray, setUserInputArray] = useState("");
  
    const inputHandler = (event) => {
      const searchWord = event.target.value;
      setUserInputArray(searchWord);
      const newFilter = data.filter((value) => {
        return value.Name.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
    const clearInput = () => {
      setFilteredData([]);
      setUserInputArray("");
    };
  
    return (
      <div className="search">
        <div className="searchInputs">
          <input
            type="text"
            placeholder={placeholder}
            value={userInputArray}
            onChange={inputHandler}
          />
        </div>
        {filteredData.length != 0 && (
          <div className="dataResult">
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                <a className="dataItem" target="_blank">
                  <p>{[value.Name, " (", value.Reference, ".", value.ID, ")"]} </p>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  
}

export default List;
