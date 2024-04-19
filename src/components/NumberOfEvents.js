import { useState } from "react";



const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const [query, setQuery] = useState("32");


    const handleInputChanged = (event) => {
        const value = event.target.value;
        setQuery(value);
        setCurrentNOE(value);
        // setErrorAlert('');

        if (isNaN(value)) {
            setErrorAlert('Only numbers are allowed');
        } else if (value <= 0) {
            setErrorAlert("Only positive numbers are allowed");
        } else {
            setErrorAlert("")
        }
        setCurrentNOE(value);
    };

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