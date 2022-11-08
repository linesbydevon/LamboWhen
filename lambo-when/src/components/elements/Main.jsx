import { Route, Routes } from "react-router-dom";
import ProgressNav from "./ProgressNav";
import GoalSetPage from "../pages/GoalSetPage";
import CoinsSelectPage from "../pages/CoinsSelectPage";
import CoinsQTYPage from "../pages/CoinsQTYPage";
import Results from "../pages/Results";

export default function Main({
  coins,
  setCoins,
  portfolio,
  setPortfolio,
  handleLinkClick,
}) {
  return (
    <div className="mainWrapper">
      <ProgressNav handleLinkClick={handleLinkClick} portfolio={portfolio} coins={coins}></ProgressNav>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <GoalSetPage
              portfolio={portfolio}
              setPortfolio={setPortfolio}
              handleLinkClick={handleLinkClick}
            />
          }
        />
        <Route
          exact
          path="/selectcoins"
          element={
            <CoinsSelectPage
              portfolio={portfolio}
              coins={coins}
              setCoins={setCoins}
              handleLinkClick={handleLinkClick}
            />
          }
        />
        <Route
          exact
          path="/setquantity"
          element={
            <CoinsQTYPage
              coins={coins}
              setCoins={setCoins}
              portfolio={portfolio}
              setPortfolio={setPortfolio}
              handleLinkClick={handleLinkClick}
            />
          }
        />
        <Route
          exact
          path="/results"
          element={<Results portfolio={portfolio} coins={coins} />}
        />
      </Routes>
    </div>
  );
}
