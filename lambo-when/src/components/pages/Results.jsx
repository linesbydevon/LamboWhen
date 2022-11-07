import { Sparklines, SparklinesLine } from "react-sparklines";
import CoinCardResults from "../cards/CoinCardResults";

export default function Results(props) {
  let portfolio = { ...props.portfolio };
  let coins = [...props.coins];
  let goal = parseFloat(portfolio.goal);
  const getPercentage = (num1, num2) => (num1 / num2) * 100;
  return (
    <main>
      <section className="results">
        <div className="sectionWrapper">
          <div
            className={
              portfolio.sparkline[24] > portfolio.sparkline[0]
                ? "portfolioResults isUp"
                : "portfolioResults isDown"
            }
          >
            <div className="header">
              <h2>Your portfolio</h2>
            </div>
            <p className="change">
              24HR: <span className="indicator"></span>
              {(
                100 -
                getPercentage(portfolio.sparkline[0], portfolio.sparkline[24])
              ).toFixed(2)}
              %
            </p>

            <h3 className="value">
              $
              {portfolio.value.toLocaleString(navigator.language, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              <br />
              <span>{coins.filter((elem) => elem.selected).length} assets</span>
            </h3>

            <div className="sparkBox">
              <div className="highLow">
                <p className="high">
                  <strong>High:</strong>
                  <br />${Math.max(...portfolio.sparkline).toFixed(2)}
                </p>
                <p className="low">
                  <strong>Low:</strong>
                  <br />${Math.min(...portfolio.sparkline).toFixed(2)}
                </p>
              </div>
              <Sparklines
                className={
                  portfolio.sparkline[24] > portfolio.sparkline[0]
                    ? "isUp"
                    : "isDown"
                }
                data={portfolio.sparkline}
              >
                <SparklinesLine
                  color={
                    portfolio.sparkline[24] > portfolio.sparkline[0]
                      ? "green"
                      : "red"
                  }
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
                    ).toFixed(0)}%, rgba(8, 10, 12,.5) ${getPercentage(
                      portfolio.value,
                      portfolio.goal
                    ).toFixed(0)}%)`,
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
              coin.selected ? <CoinCardResults coin={coin} portfolio={portfolio} getPercentage={getPercentage}/> : (
                false
              )
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
