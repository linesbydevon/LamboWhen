import { Sparklines, SparklinesLine } from 'react-sparklines';

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
  return(
    <main>
      <h2>Please select all coins you own from this list:</h2>
      
    {
      props.coins.length ?  
      coins.map(
        (coin,index)=>
        <div className={`card ${coin.symbol}card`} key={coin.symbol} id={index} onClick={handleClick}>
        <div className="iconContainer">
        <img src={coin.iconUrl} alt={`Logo for ${coin.name}`}/>
        <div className="check"></div>
        </div>
        <h3>{coin.name} | <span>{coin.symbol}</span></h3>
        </div>
      ):
    <p>No coins</p>
    }
    </main>
  )
}