import axios from 'axios';
import {useState, useEffect} from 'react';
import {BASE_URL} from './global.js';
import Header from './components/Header';
import Home from './components/Home';
import CoinsOwned from './components/CoinsOwned.jsx';
import './App.css';

function App() {
  const [goal, setGoal] = useState(0)
  const [allCoinsList, setAllCoinsList] = useState([]);
  const [coins,setCoins] = useState([]);
  const [APIError, setAPIError] = useState([]);
  useEffect(
    ()=>{
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h',
          'tiers[0]': '1',
          orderBy: 'marketCap',
          orderDirection: 'desc',
          limit: '50',
          offset: '0'
        },
        headers: {
          'X-RapidAPI-Key': '618491a8aemsh20b1110ec97d4ffp141f42jsn7f8443f4955c',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };
      let APIresponse;
      axios.request(options).then(function (response) {
        APIresponse = response.data.data.coins;
        setAllCoinsList(APIresponse);
        setCoins(allCoinsList.map(coin=>{
          return {...coin, selected: false, qty: 0, holdingsValue: 0}
          }
        ))
      }).catch(function (error) {
        setAPIError(error.message);
        
      });
      
    },[]
  )
  console.log(coins)
  return (
    <div className="App">
      <Header/>
      <Home goal={goal} setGoal={setGoal}/>
      <CoinsOwned coins={coins} setCoins={setCoins}></CoinsOwned>
    </div>
  );
  }

export default App;
