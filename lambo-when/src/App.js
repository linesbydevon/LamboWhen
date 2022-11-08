import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "./global.js";
import Header from "./components/elements/Header";
import Main from "./components/elements/Main.jsx";
import APIErrorGaurd from "./components/elements/APIErrorGaurd.jsx";
import Footer from "./components/elements/Footer.jsx";
import "./style.css";

function App() {
  //USING STATE
  const [portfolio, setPortfolio] = useState({
    goal: 0,
    value: 0,
    sparkline: new Array(25).fill(0, 0, 25),
  });
  const [coins, setCoins] = useState([]);
  const [APIError, setAPIError] = useState(false);
  //USE EFFECT W/API CALL
  useEffect(() => {
    const options = {
      method: "GET",
      url: `${BASE_URL}/coins`,
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_COINRANKING_KEY,
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };
    const getResponse = async () => {
      let APIresponse;
      axios
        .request(options)
        .then(function (response) {
          APIresponse = response.data.data.coins;
          setCoins(
            APIresponse.map((coin) => {
              return {
                ...coin,
                selected: false,
                qty: 0,
                holdingsValue: 0,
                holdingsSparkline: [],
              };
            })
          );
        })
        .catch(function (error) {
          setAPIError(error.message);
        });
    };

    getResponse();
  }, []);

  const handleLinkClick = (e) => {
    let targetPath = e.target.parentElement.attributes[1].nodeValue;
    if (targetPath === "/selectcoins") {
      if (!portfolio.goal > 0) {
        console.log("Goal is too small");
        e.preventDefault();
      }
    } else if (targetPath === "/setquantity") {
      if (!coins.some((coin) => coin.selected === true)) {
        e.preventDefault();
      }
    } else if (targetPath === "/results") {
      if (
        coins.some((coin) => coin.selected === true) &&
        coins
          .filter((coin) => coin.selected === true)
          .every((coin) => coin.qty > 0)
      ) {
        //declaring and updating holdingsValue and holdingsSparkline of local copy of props.coins
        let localState = [...coins];
        localState
          .filter((coin) => coin.selected === true)
          .forEach(
            (coin) => (coin.holdingsValue = parseFloat(coin.price) * coin.qty)
          );
        localState
          .filter((coin) => coin.selected === true)
          .forEach(
            (coin) =>
              (coin.holdingsSparkline = coin.sparkline.map(
                (elem) => elem * coin.qty
              ))
          );
        setCoins(localState);
        //
        let localPortfolio = { ...portfolio };
        localPortfolio.value = 0;
        localPortfolio.sparkline.fill(0, 0, 25);
        localState
          .filter((coin) => coin.selected === true)
          .forEach((coin) => (localPortfolio.value += coin.holdingsValue));
        localState
          .filter((coin) => coin.selected === true)
          .forEach((coin) => {
            for (let i = 0; i < coin.sparkline.length; i++) {
              localPortfolio.sparkline[i] += coin.holdingsSparkline[i];
            }
          });
        setPortfolio(localPortfolio);
      } else {
        console.log("QTY not set");
        e.preventDefault();
      }
    }
  };

  return (
    <div className="App">
      <div>
        <Header />
        {APIError ? (
          <APIErrorGaurd APIError={APIError}></APIErrorGaurd>
        ) : (
          <Main
            coins={coins}
            setCoins={setCoins}
            portfolio={portfolio}
            setPortfolio={setPortfolio}
            handleLinkClick={handleLinkClick}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
