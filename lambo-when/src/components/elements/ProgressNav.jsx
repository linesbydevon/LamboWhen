import { NavLink } from "react-router-dom";

export default function ProgressNav({ handleLinkClick }) {
  return (
    <section className="progressNav">
      <nav>
        <ol>
          <li>
            <NavLink to="/" onClick={handleLinkClick}>
              <span className="listNum">1</span>
              <span>
                Set
                <br />
                goal
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/selectcoins" onClick={handleLinkClick}>
              <span className="listNum">2</span>
              <span>
                Select
                <br />
                coins
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/setquantity" onClick={handleLinkClick}>
              <span className="listNum">3</span>
              <span>
                Set
                <br />
                quantity
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/results" onClick={handleLinkClick}>
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
