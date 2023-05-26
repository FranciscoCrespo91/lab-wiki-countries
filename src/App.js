import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/header';
import CountriesList from './Components/countriesList';

let apiURL = 'https://ih-countries-api.herokuapp.com/countries';

function App() {
  let [fetching, SetFetching] = useState(false);
  let [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      //Listing all the apartmens in State.
      setCountries(response.data);
      //Giving BUENO status to Data Fetch
      SetFetching(true);
    });
  });

  return (
    <div className="App">
      <Header />
      {!fetching && <p>Loading</p>}
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
