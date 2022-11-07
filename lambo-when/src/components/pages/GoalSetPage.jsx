import { Link } from "react-router-dom";
import ProgressButton from "../elements/ProgressButton";
export default function GoalSetPage({ portfolio, setPortfolio, coins, handleLinkClick }) {
  

  const handleChange = (e) => {
    let localPortfolio = { ...portfolio };
    localPortfolio.goal = e.target.value;
    console.log(localPortfolio);
    setPortfolio(localPortfolio);
  };
  return (
    <main>
      <div className="sectionWrapper">
        <div className="padder">
          <form>
            <label htmlFor="goal">
              <h2>
                Enter your target portfolio value{" "}
                <span className="accent">in US dollars</span>.
              </h2>
            </label>
            <input
              type="number"
              name="goal"
              id="goal"
              onChange={handleChange}
              placeholder={portfolio.goal}
            ></input>
          </form>
        </div>
      </div>
      <section className="btnWrapper">
        <ProgressButton
          className={portfolio.goal > 0 ? "clickable btn" : "notClickable btn"}
          handleLinkClick={handleLinkClick}
          href="/selectcoins"
          disabledMessage="Set goal"
          engagedMessage="All set?"
        />
      </section>
    </main>
  );
}
