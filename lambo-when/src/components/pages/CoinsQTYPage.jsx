import CoinCardForm from "../cards/CoinCardForm";
import ProgressButton from "../elements/ProgressButton";
import { Navigate } from "react-router-dom";

export default function CoinsQTYPage({
  portfolio,
  coins,
  setCoins,
  setPortfolio,
  handleLinkClick,
}) {
  const handleChange = (e) => {
    let index = e.currentTarget.id;
    let localState = [...coins];
    localState[index].qty = e.target.value;
    setCoins(localState);
  };

  return (
    <main className="selectCoins">
      {portfolio.goal > 0 && coins.some((coin) => coin.selected === true) ? (
        <section>
          <div className="sectionWrapper">
            <div className="padder">
              <h2>
                Please <span className="accent">input the quantity</span> of
                each asset you own:
              </h2>
              <div className="cardContainer">
                {coins.map((coin, index) =>
                  coin.selected ? (
                    <CoinCardForm
                      coin={coin}
                      index={index}
                      key={index}
                      handleChange={handleChange}
                    />
                  ) : (
                    false
                  )
                )}
              </div>
            </div>
          </div>
          <div className="btnWrapper">
            <ProgressButton
              className={
                coins
                  .filter((coin) => coin.selected === true)
                  .every((coin) => coin.qty > 0)
                  ? "clickable btn"
                  : "notClickable btn"
              }
              handleLinkClick={handleLinkClick}
              href="/results"
              disabledMessage="Set amounts"
              engagedMessage="All set?"
            />
          </div>
        </section>
      ) : portfolio.goal > 0 ? (
        <Navigate to="/selectcoins" />
      ) : (
        <Navigate to="/" />
      )}
    </main>
  );
}
