import './account.css'

const Account = (props) => {
  return (
    <section className="account">
        <div className="account-content-wrapper">
            <h3 className="account-title">{props.element.accountTitle}</h3>
            <p className="account-amount">{props.element.accountAmount}</p>
            <p className="account-amount-description">{props.element.accountAmountDescr}</p>
        </div>
        <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
        </div>
    </section>
  );
};

export default Account;