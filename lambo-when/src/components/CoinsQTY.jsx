import CoinCardForm from "./CoinCardForm";
import ProgressButton from "./ProgressButton";
import { Link, Navigate } from "react-router-dom";

export default function CoinsQTY(props){
  let coins=props.coins;
  
const handleChange = (e)=>{
  let index= e.currentTarget.id;
  let localState = [...coins];
  localState[index].qty=e.target.value;
  props.setCoins(localState);
} 

const handleLinkClick=(e)=>{
  if(props.coins.filter(coin=>coin.selected===true).every(coin=>coin.qty>0)){
    //declaring and updating holdingsValue and holdingsSparkline of local copy of props.coins
    let localState = [...props.coins];
    localState.filter(coin=>coin.selected===true).forEach(coin=>coin.holdingsValue=parseFloat(coin.price)*coin.qty);
    localState.filter(coin=>coin.selected===true).forEach(coin=>coin.holdingsSparkline=coin.sparkline.map(elem=>elem*coin.qty));
    props.setCoins(localState);
    //
    let localPortfolio= {...props.portfolio};
    localPortfolio.value=0;
    localPortfolio.sparkline.fill(0,0,25);
    localState.filter(coin=>coin.selected===true).forEach(coin=>localPortfolio.value+=coin.holdingsValue);
    localState.filter(coin=>coin.selected===true).forEach(coin=>{
          for(let i=0; i < coin.sparkline.length; i++){
            localPortfolio.sparkline[i]+=coin.holdingsSparkline[i];
          }
        }
      );
    console.log(localState);
    console.log(localPortfolio);
    props.setPortfolio(localPortfolio);
  }else{
    console.log("QTY not set")
    e.preventDefault();
  }
}

  return(
    <main className="selectCoins">
      
      
    {
      props.coins.some(coin=>coin.selected === true) ?  
      <section>
        <div className="sectionWrapper">
          <div className="padder">
          <h2>Please <span className="accent">input the quantity</span> of each asset you own:</h2>
          <div className="cardContainer">
            {
            coins.map(
              (coin,index)=> coin.selected ?
                  <CoinCardForm 
                  coin={coin}
                  index={index}
                  key={index}
                  handleChange={handleChange}/> : false
              )
            }
          </div>
          </div>
        </div>
        <div className="btnWrapper">
          <ProgressButton 
            className={props.coins.filter(coin=>coin.selected===true).every(coin=>coin.qty>0) ? "clickable btn":"notClickable btn"} 
            handleLinkClick={handleLinkClick}
            href='/results'
            disabledMessage="Set amounts"
            engagedMessage="All set?" />
        </div>
      </section>
      :
      <Navigate to="/selectcoins"/>
    }
    </main>
  )
}