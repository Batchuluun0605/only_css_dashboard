import Budget from "../Budget/Budget";
import Cards from "../Cards/Cards";
import Financial from "../Financial/Financial";
import Loans from "../Loans/Loans";
import Report from "../Report/Report";
import Savings from "../Savings/Savings";
import Subscriptions from "../Subscriptions/Subscriptions";
import Transactions from "../Transactions/Transactions";
import "./contentMain.css";
const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscriptions />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
