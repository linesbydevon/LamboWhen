import { NavLink } from "react-router-dom";

export default function ProgressNav({ handleLinkClick, portfolio, coins}) {
  return (
    <section className="progressNav">
      <nav>
        <ol>
          <li>
            <NavLink end to="/" onClick={handleLinkClick}>
              <span className="listNum">1</span>
              <span>
                Set
                <br />
                goal
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/selectcoins" end className={!portfolio.goal > 0 ? "disabledNav" : "abledNav"} onClick={handleLinkClick}>
              <span className="listNum">2</span>
              <span>
                Select
                <br />
                coins
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink end className={(!coins.some((coin) => coin.selected === true)) ? "disabledNav" : "abledNav"} onClick={handleLinkClick} to="/setquantity">
              <span className="listNum">3</span>
              <span>
                Set
                <br />
                quantity
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink end className={(
        coins.some((coin) => coin.selected === true) &&
        coins
          .filter((coin) => coin.selected === true)
          .every((coin) => coin.qty > 0)
      )? "abledNav":"disabledNav"} to="/results" onClick={handleLinkClick}>
              <span className="listNum">4</span>
              <span>
                Get
                <br />
                results
              </span>
            </NavLink>
          </li>
        </ol>
      </nav>
    </section>
  );
}
