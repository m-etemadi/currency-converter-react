import { fixCurrency, getCurrentDateTime } from '../helper';

export default function Summary({ amount, from, to, convertedResult }) {
  return (
    <div className="summary">
      <p className="from-amount">
        {fixCurrency(amount)} {from} =
      </p>
      <p className="to-amount">
        {fixCurrency(convertedResult)} {to}
      </p>
      <p className="date">Last updated {getCurrentDateTime()}</p>
    </div>
  );
}
