import CoinCardForm from "./CoinCardForm";
import ProgressButton from "./ProgressButton";
import { Link } from "react-router-dom";

export default function CoinsQTY(props){
  let coins=props.coins;
  
const handleChange = (e)=>{
  let id= e.currentTarget.id;
  let index = parseInt(id[id.length-1]);
  console.log(index)
  let localState = [...coins];
  localState[index].qty=parseInt(e.target.value);
  console.log(localState)
  props.setCoins(localState);
} 

const handleLinkClick=(e)=>{
  if(props.coins.filter(coin=>coin.selected===true).every(coin=>coin.qty>0)){
    console.log("QTY good")
  }else{
    console.log("QTY not set")
    e.preventDefault();
  }
}

  return(
    <main className="selectCoins">
      
      
    {
      props.coins.length ?  
      <section>
        <div className="sectionWrapper">
          <h2>Please input the quantity of each asset you own:</h2>
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
        <div className="btnWrapper">
          <ProgressButton 
            className={props.coins.some(coin=>coin.selected === true) ? "clickable btn":"notClickable btn"} 
            handleLinkClick={handleLinkClick}
            href='/results'
            disabledMessage="Add coins"
            engagedMessage="All set?" />
        </div>
      </section>
      :
    <p>No coins</p>
    }
    </main>
  )
}