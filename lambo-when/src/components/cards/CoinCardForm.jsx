export default function CoinCardForm({ coin, index, handleChange }) {
  return (
    <div className={`card ${coin.symbol}card qtyCard`} key={coin.symbol}>
      <div className="coinInfo">
        <div className="iconContainer">
          <img src={coin.iconUrl} alt={`Logo for ${coin.name}`} />
          <div className="check"></div>
        </div>
        <h3>
        {coin.name === "Internet Computer (DFINITY)"
            ? "ICP DFINITY " : coin.name === "Wrapped liquid staked Ether 2.0" ? `${coin.symbol} 2.0`
            : coin.name}{" "}|{" "}<span>{coin.symbol}</span>
        </h3>
      </div>
      <form>
        <label htmlFor="qty">How many {coin.symbol}s do you own?</label>
        <input
          id={index}
          type="number"
          placeholder={coin.qty}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
