export default function CoinCard(props){
  let coin=props.coin;
  let index=props.index;
  let handleClick=props.handleClick;
  return(
    <div className={`card ${coin.symbol}card`} key={coin.symbol} id={index} onClick={handleClick}>
      <div className="coinInfo">
        <div className="iconContainer">
          <img src={coin.iconUrl} alt={`Logo for ${coin.name}`}/>
        <div className="check"></div>
        </div>
        <h3>{coin.name} | <span>{coin.symbol}</span></h3>
      </div>
    </div>
  )
}