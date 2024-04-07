
import { useEffect, useState } from "react";

const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);


    };
    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false);
        setCurrentCity(value);

    };
    useEffect(() => {
        setSuggestions(allLocations);
    }, [`${allLocations}`])

    return (
        <div id="city-search">
            <input type="text" className="city" placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged} />
            {showSuggestions ? <ul className="suggestions">
                {suggestions.map((suggestion) => {
                    return <li key={suggestion} onClick={handleItemClicked}>{suggestion}</li>
                })}
                <li key='See all cities' onClick={handleItemClicked}>
                    <b>See all Cities</b>
                </li>
            </ul> : null}

        </div>
    )
}
export default CitySearch;

// import { useState, useReducer } from "react";

// const CitySearch = ({ allLocations, setCurrentCity }) => {
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [query, setQuery] = useState("");
//     const [suggestions, setSuggestions] = useState([]);

//     useReducer(() => {
//         setSuggestions(allLocations);
//     }, [`${allLocations}`]);


//     const handleInputChanged = (event) => {
//         const value = event.target.value;
//         const filteredLocations = allLocations ? allLocations.filter((location) => {
//             return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
//         }) : [];
//         setQuery(value);
//         setSuggestions(filteredLocations);
//     };

//     const handleItemClicked = (event) => {
//         const value = event.target.textContent;
//         setQuery(value);
//         setShowSuggestions(false);
//         setCurrentCity(value);
//     };

//     return (
//         <div id="city-search">
//             <input
//                 type="text"
//                 className="city"
//                 placeholder="Search for a city"
//                 value={query}
//                 onFocus={() => setShowSuggestions(true)}
//                 onChange={handleInputChanged}
//             />
//             {showSuggestions ?
//                 <ul className="suggestions">
//                     {suggestions.map((suggestion) => {
//                         return <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
//                     })}
//                     <li key='See all cities' onClick={handleItemClicked}>
//                         <b>See all cities</b>
//                     </li>
//                 </ul>
//                 : null
//             }
//         </div>
//     )
// }

// export default CitySearch;



// event.target.value:
// Basically it retrieves value of whatever input it was called on.
// In this case, it’s your input element so whatever you insert in your input can be accessed through event.target.value

// indexOf
// search a string for a word or first occurence of a letter


