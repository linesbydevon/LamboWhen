import { Sparklines, SparklinesLine } from "react-sparklines";
import {
  getPercentage,
  getPercentageChange,
  isUp,
  formatNum,
} from "../../utilities";

export default function CoinCardResults({ coin, portfolio }) {
  return (
    <div
      // className={
      //   parseFloat(coin.price) > coin.sparkline[0]
      //     ? "card resultsCard isUp"
      //     : parseFloat(coin.price) === coin.sparkline[0]
      //     ? "card resultsCard isSame"
      //     : "card resultsCard isDown"
      // }
      className={`card resultsCard ${isUp(coin.price, coin.sparkline[0])}`}
      key={coin.symbol}
    >
      <div className="coinInfo">
        <div className="iconContainer">
          <img src={coin.iconUrl} alt={`Logo for ${coin.name}`} />
        </div>
        <h3>
          {coin.name === "Internet Computer (DFINITY)"
            ? "ICP DFINITY " : coin.name === "Wrapped liquid staked Ether 2.0" ? `${coin.symbol} 2.0`
            : coin.name}{" "}
          | <span>{coin.symbol}</span>
        </h3>
      </div>

      <div className="assetDetails">
        <p className="change">
          24HR: <span className="indicator"></span>
          {getPercentageChange(coin.sparkline[0], coin.sparkline[24]).toFixed(
            2
          )}
          %
        </p>
        <h4 className="value">
          {/* ${parseFloat(coin.price).toFixed(2)} */}$
          {formatNum(parseFloat(coin.price))}
          <br />
          <span>per coin</span>
        </h4>
        <div className="highLow">
          <p className="low">
            <strong>Low:</strong>
            <br />${formatNum(Math.min(...coin.sparkline))}
          </p>
          <p className="high">
            <strong>High:</strong>
            <br />${formatNum(Math.max(...coin.sparkline))}
          </p>
        </div>
        <Sparklines
          className={coin.sparkline[24] > coin.sparkline[0] ? "isUp" : "isDown"}
          data={coin.sparkline}
        >
          <SparklinesLine
            color={coin.sparkline[24] > coin.sparkline[0] ? "green" : "red"}
          />
        </Sparklines>
        <div className={`portfolioSpecificInfo`}>
          <div className="qtyValue">
            <h4 className="value">
              ${formatNum(coin.holdingsValue)}
              <br />
              <span>
                {coin.qty} {coin.symbol}
              </span>
            </h4>

            <div className="percentage">
              <div
                className="pieChart"
                style={{
                  background: `conic-gradient(rgba(8, 10, 12,1) ${getPercentage(
                    coin.holdingsValue,
                    portfolio.value
                  ).toFixed(1)}%, rgba(8, 10, 12,.5) ${getPercentage(
                    coin.holdingsValue,
                    portfolio.value
                  ).toFixed(1)}%)`,
                }}
              >
                <div className="innerChart"></div>
              </div>
              <p>
                <strong>
                  {getPercentage(coin.holdingsValue, portfolio.value).toFixed(
                    1
                  )}
                  %
                </strong>{" "}
                of your portfolio value
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
