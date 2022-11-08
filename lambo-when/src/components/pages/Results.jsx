import { Sparklines, SparklinesLine } from "react-sparklines";
import CoinCardResults from "../cards/CoinCardResults";
import {
  getPercentage,
  getPercentageChange,
  isUp,
  formatNum,
} from "../../utilities";
import Donate from "../elements/Donate";

export default function Results({ portfolio, coins }) {
  let goal = parseFloat(portfolio.goal);

  return (
    <main>
      <section className="results">
        <div className="sectionWrapper">
          <div
            className={`portfolioResults ${isUp(
              portfolio.sparkline[24],
              portfolio.sparkline[0]
            )}`}
          >
            <div className="header">
              <h2>Your portfolio</h2>
            </div>
            <p className="change">
              24HR: <span className="indicator"></span>
              {getPercentageChange(
                portfolio.sparkline[0],
                portfolio.sparkline[24]
              ).toFixed(2)}
              %
            </p>
            <h3 className="value">
              ${formatNum(portfolio.value)}
              <br />
              <span>
                {coins.filter((elem) => elem.selected).length}{" "}
                {coins.filter((elem) => elem.selected).length > 1
                  ? "assets"
                  : "asset"}
              </span>
            </h3>
            <div className="sparkBox">
              <div className="highLow">
                <p className="low">
                  <strong>Low:</strong>
                  <br />${formatNum(Math.min(...portfolio.sparkline))}
                </p>
                <p className="high">
                  <strong>High:</strong>
                  <br />${formatNum(Math.max(...portfolio.sparkline))}
                </p>
              </div>
              <Sparklines data={portfolio.sparkline}>
                <SparklinesLine
                  style={
                    portfolio.sparkline[24] > portfolio.sparkline[0]?
                    {stroke: "#69ffc7", fill: "#69ffc7", fillOpacity: "1"}:
                    {stroke: "#ff76b0", fill: "#ff76b0", fillOpacity: "1"}}
                 />
              </Sparklines>
            </div>
            <div className="portfolioSpecificInfo">
              <div className="percentage">
                <div
                  className="pieChart"
                  style={{
                    background: `conic-gradient(rgba(8, 10, 12,1) ${getPercentage(
                      portfolio.value,
                      portfolio.goal
                    ).toFixed(2)}%, rgba(8, 10, 12,.5) ${getPercentage(
                      portfolio.value,
                      portfolio.goal
                    ).toFixed(2)}%)`,
                  }}
                >
                  <div className="innerChart"></div>
                </div>
                <p>
                  <strong>
                    {getPercentage(portfolio.value, portfolio.goal).toFixed(2)}%
                  </strong>{" "}
                  of your{" "}
                  <strong>
                    $
                    {goal.toLocaleString(navigator.language, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </strong>{" "}
                  goal.
                </p>
              </div>
            </div>
          </div>
          <h2 className="assetHeadline">Asset Performance</h2>
          <section className="assetResults">
            {coins.map((coin, index) =>
              coin.selected ? (
                <CoinCardResults key={index} coin={coin} portfolio={portfolio} />
              ) : (
                false
              )
            )}
          </section>
        </div>
      </section>
      <Donate/>
    </main>
  );
}
