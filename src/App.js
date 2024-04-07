import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { useEffect, useState } from 'react';
import { getEvents, extractLocations } from './api';



const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all Cities');




  useEffect(() => {
    if (navigator.onLine) {
      console.log("");
    } else {
      console.log("You are offline. The displayed list may not be up to date.");
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === 'See all Cities' ? allEvents : allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">


      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}

      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}

      />

      <EventList events={events} />
    </div>
  );
}
export default App;


// import CitySearch from './components/CitySearch';
// import EventList from './components/EventList';
// import NumberOfEvents from './components/NumberOfEvents';
// import { useEffect, useState } from 'react';
// import { extractLocations, getEvents } from './api';

// import './App.css';

// const App = () => {
//   const [allLocations, setAllLocations] = useState([]);
//   const [currentNOE, setCurrentNOE] = useState(32);
//   const [events, setEvents] = useState([]);
//   const [currentCity, setCurrentCity] = useState("See all cities");
//   const [warningAlert, setWarningAlert] = useState("");

//   useEffect(() => {
//     if (navigator.onLine) {
//       setWarningAlert("");
//     } else {
//       setWarningAlert("You are offline. The displayed list may not be up to date.");
//     }
//     fetchData();
//   }, [currentCity, currentNOE]);


//   const fetchData = async () => {
//     const allEvents = await getEvents();
//     const filteredEvents = currentCity === "See all cities" ?
//       allEvents :
//       allEvents.filter(event => event.location === currentCity)
//     setEvents(filteredEvents.slice(0, setCurrentNOE));
//     setAllLocations(extractLocations(allEvents));
//   }


//   // useEffect(() => {
//   //   fetchData();
//   // }, [currentCity]);  // , setCurrentNOE



//   return (
//     <div className="App">
//       <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
//       <NumberOfEvents setCurrentNOE={setCurrentNOE} />
//       <EventList events={events} />
//     </div>

//   );
// }

// export default App;



// npm run test


// changing number doesn't change view



// <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>f
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>