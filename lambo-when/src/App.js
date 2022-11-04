import axios from 'axios';
import {useState, useEffect} from 'react';
import {BASE_URL} from './global.js';
import {Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import APIErrorGaurd from './components/APIErrorGaurd.jsx';
import CoinsOwned from './components/CoinsOwned.jsx';
import CoinsQTY from './components/CoinsQTY.jsx';
import Results from './components/Results';
import './App.css';

function App() {
  //USING STATE
  const [goal, setGoal] = useState(0)
  const [portfolio, setPortfolio] = useState({goal: 0, value: 0, sparkline: new Array(25).fill(0,0,25)})
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
                  holdingsValue: 0,
                  holdingsSparkline: []}
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
  // console.log(allCoinsList)
  // console.log(coins)
  // console.log(portfolio)
  return (
    <div className="App">
      <Header/>
      {
        APIError ?
        
        <APIErrorGaurd APIError={APIError}></APIErrorGaurd>:
        <>
      <Routes>
        <Route exact path="/" element={<Home portfolio={portfolio} setPortfolio={setPortfolio}/>}/>
        <Route exact path="/selectcoins" element={<CoinsOwned portfolio={portfolio} coins={coins} setCoins={setCoins}/>}/>
        <Route exact path="/setquantity" element={<CoinsQTY coins={coins} setCoins={setCoins} portfolio={portfolio} setPortfolio={setPortfolio}/>}/>
        <Route exact path="/results" element={<Results portfolio={portfolio} coins={coins}/>}/>
      </Routes>
      </>
      }
      
    </div>
  );
  } 

export default App;
