import CoinCard from "./CoinCard";
import ProgressButton from "./ProgressButton";
import { Link } from "react-router-dom";

export default function CoinsOwned(props){
  let coins=props.coins;
  console.log(coins)
  const handleClick=(e)=>{
    let index = e.currentTarget.id;
    let localState = [...coins];
    localState[index].selected=!localState[index].selected;
    console.log(localState[index]);
    props.setCoins(localState);
    e.currentTarget.classList.toggle("selected")
  }

const handleLinkClick=(e)=>{
  if(props.coins.some(coin=>coin.selected === true)){
    console.log("There are selected coins.")
  }else{
    console.log("Nothing is selected lol.")
    e.preventDefault();
  }
}

  return(
    <main className="selectCoins">
      
      
    {
      props.coins.length ?  
      <section>
        <div className="sectionWrapper">
          <h2>Please select all coins you own from this list:</h2>
          <div className="cardContainer">
            {
            coins.map(
              (coin,index)=>
                  <CoinCard 
                  coin={coin}
                  index={index}
                  key={index}
                  handleClick={handleClick}/>
              )
            }
          </div>
        </div>
        <div className="btnWrapper">
          <ProgressButton 
            className={props.coins.some(coin=>coin.selected === true) ? "clickable btn":"notClickable btn"} 
            handleLinkClick={handleLinkClick}
            href='/setquantity'
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