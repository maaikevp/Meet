import { useState } from "react";


const NumberOfEvents = ({ setCurrentNOE }) => {

    // const [currentNOE, setCurrentNOE] = useState("");   // added myself
    const [query, setQuery] = useState("32");


    const handleInputChanged = (event) => {
        const value = event.target.value;
        setQuery(value);
        setCurrentNOE(value);
    }

    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events: </label>
            <input
                type="text"
                id="number-of-events-input"
                className="number-of-events-input"
                value={query}
                onChange={handleInputChanged}
            />
        </div>
    );
}

export default NumberOfEvents;