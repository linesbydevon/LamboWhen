import ProgressButton from "../elements/ProgressButton";
export default function GoalSetPage({
  portfolio,
  setPortfolio,
  coins,
  handleLinkClick,
}) {
  const handleChange = (e) => {
    let localPortfolio = { ...portfolio };
    localPortfolio.goal = e.target.value;
    setPortfolio(localPortfolio);
  };
  return (
    <main>
      <section className="sectionWrapper">
        <div className="padder">
          <form>
            <label htmlFor="goal">
              <h2>
                Enter your target portfolio value{" "}
                <span className="accent">in US dollars</span>.
              </h2>
            </label>
            <div id="goalInputWrapper">
              <input
                type="number"
                name="goal"
                id="goal"
                onChange={handleChange}
                placeholder={portfolio.goal}
                min={0}
                max={9999999999999.99}
              ></input>
            </div>
          </form>
        </div>
      </section>
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
