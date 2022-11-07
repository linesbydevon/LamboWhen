import CoinCard from "../cards/CoinCard";
import ProgressButton from "../elements/ProgressButton";
import { Link, Navigate } from "react-router-dom";

export default function CoinsSelectPage({
  coins,
  setCoins,
  portfolio,
  handleLinkClick,
}) {
  const handleClick = (e) => {
    let index = e.currentTarget.id;
    let localState = [...coins];
    localState[index].selected = !localState[index].selected;
    setCoins(localState);
    e.currentTarget.classList.toggle("selected");
  };

  return (
    <main className="selectCoins">
      {portfolio.goal > 0 ? (
        <section>
          <div className="sectionWrapper">
            <div className="padder">
              <h2>
                Please select <span className="accent">all the assets</span> you
                own from the list below
              </h2>
              <div className="cardContainer">
                {coins.map((coin, index) => (
                  <CoinCard
                    coin={coin}
                    index={index}
                    key={index}
                    handleClick={handleClick}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="btnWrapper">
            <ProgressButton
              className={
                coins.some((coin) => coin.selected === true)
                  ? "clickable btn"
                  : "notClickable btn"
              }
              handleLinkClick={handleLinkClick}
              href="/setquantity"
              disabledMessage="Add coins"
              engagedMessage="All set?"
            />
          </div>
        </section>
      ) : (
        <Navigate to="/" />
      )}
    </main>
  );
}
