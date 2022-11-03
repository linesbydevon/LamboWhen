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
  }
  return(
    <main>
      <h2>Please select all coins you own from this list:</h2>
      
    {
      coins ?  
      coins.map(
        (coin,index)=>
        <div className={`card ${coin.symbol}card`} key={coin.symbol} id={index} onClick={handleClick}>
        <div className="iconContainer">
        <img src={coin.iconUrl} alt={`Logo for ${coin.name}`}/>
        </div>
        <h2 style={{color: coin.color}}>{coin.name}</h2>
        <h3>{coin.symbol}</h3>
        <p>${parseFloat(coin.price).toFixed(2)}</p>
        <Sparklines data={coin.sparkline}>
          <SparklinesLine color={coin.sparkline[23]>coin.sparkline[0]? "green":"red"} />
        </Sparklines>
        </div>
      ):
    <h1>No coins</h1>
    }
    </main>
  )
}