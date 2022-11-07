export default function CoinCard({ coin, index, handleClick }) {
  return (
    <div
      className={
        coin.selected
          ? `card ${coin.symbol}card option selected`
          : `card option ${coin.symbol}card`
      }
      key={coin.symbol}
      id={index}
      onClick={handleClick}
    >
      <div className="coinInfo">
        <div className="iconContainer">
          <img src={coin.iconUrl} alt={`Logo for ${coin.name}`} />
          <div className="check"></div>
        </div>
        <h3>
          {coin.name} | <span>{coin.symbol}</span>
        </h3>
      </div>
    </div>
  );
}
