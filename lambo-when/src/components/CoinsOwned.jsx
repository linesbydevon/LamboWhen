import CoinCard from "./CoinCard";

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
        <CoinCard coin={coin} index={index} handleClick={handleClick}/>
      ):
    <p>No coins</p>
    }
    </main>
  )
}