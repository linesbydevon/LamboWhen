import axios from 'axios';
import {useState, useEffect} from 'react';
import {BASE_URL} from './global.js';
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import APIErrorGaurd from './components/APIErrorGaurd.jsx';
import CoinsOwned from './components/CoinsOwned.jsx';
import './App.css';

function App() {
  //USING STATE
  const [goal, setGoal] = useState(0)
  const [allCoinsList, setAllCoinsList] = useState([]);
  const [coins,setCoins] = useState([]);
  const [APIError, setAPIError] = useState(false);
  //USE EFFECT W/API CALL
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
      const getResponse= async()=>{
      let APIresponse;
      axios.request(options).then(function (response) {
        APIresponse = response.data.data.coins;
        setCoins(APIresponse.map(coin=>{
          return {...coin,
                  selected: false,
                  qty: 0,
                  holdingsValue: 0}
          }
        ));
      }
      ).catch(function (error) {
        setAPIError(error.message);
        
      });
    }

    getResponse();

    },[]
  )
  console.log(allCoinsList)
  console.log(coins)
  return (
    <div className="App">
      <Header/>
      {
        APIError ?
        
        <APIErrorGaurd APIError={APIError}></APIErrorGaurd>:
        <>
      <Routes>
        <Route exact path="/" element={<Home goal={goal} setGoal={setGoal}/>}/>
        <Route exact path="/selectcoins" element={<CoinsOwned coins={coins} setCoins={setCoins}/>}/>
      </Routes>
      </>
      }
      
    </div>
  );
  } 

export default App;
