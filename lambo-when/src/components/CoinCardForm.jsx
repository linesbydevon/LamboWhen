export default function CoinCardForm(props){
  let coin=props.coin;
  let index=props.index;
  let handleChange=props.handleChange;
  return(
    <div className={`cardForm ${coin.symbol}card`} key={coin.symbol} id={index}>
      <div className="coinInfo">
        <div className="iconContainer">
          <img src={coin.iconUrl} alt={`Logo for ${coin.name}`}/>
        <div className="check"></div>
        </div>
        <h3>{coin.name} | <span>{coin.symbol}</span></h3>
      </div>
      <form>
        <label htmlFor="qty">How many {coin.symbol}s do you own?</label>
        <input id={`input${index}`} type="number" placeholder={props.coin.qty} onChange={handleChange}/>
      </form>
    </div>
  )
}